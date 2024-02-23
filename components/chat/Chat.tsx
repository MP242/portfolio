import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { fetchEventSource } from "@qruto/fetch-event-source";
import { v4 as uuidv4 } from "uuid";
import InputChat from "../inputChat/InputChat";

interface Message {
  isUser: boolean;
  message: string;
}

const Chat = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  const sessionIdRef = useRef<string>(uuidv4());

  useEffect(() => {
    console.log(sessionIdRef.current);
    sessionIdRef.current = uuidv4();
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current && autoScroll) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages, autoScroll]);

  const handleScroll = () => {
    if (messagesEndRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesEndRef.current;
      const atBottom = scrollHeight - scrollTop === clientHeight;
      if (atBottom) {
        setAutoScroll(true);
      } else {
        setAutoScroll(false);
      }
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;
    setLoading(true);

    const userMessage = {
      isUser: true,
      message: input.trim(),
    };
    setMessages([...messages, userMessage]);

    setInput("");
    const response = await fetchEventSource(
      API_URL + "/rag/stream",
      {
        method: "POST",
        openWhenHidden: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            question: input,
          },
          config: {
            configurable: {
              session_id: sessionIdRef.current,
            },
          },
        }),
        onmessage: (event) => {
          if (event.data) {
            handleReceiveMessage(event.data);
          }
        },
        onclose: () => {
          setLoading(false);
        },
      }
    );
  };

  const handleReceiveMessage = (message: string) => {
    let parsedData = JSON.parse(message);
    if (
      parsedData.answer &&
      parsedData.answer.content !== undefined &&
      parsedData.answer.content !== ""
    ) {
      setPartialMessage(parsedData.answer.content);
    }
  };

  const setPartialMessage = (chunk: string) => {
    setMessages((prevMessages) => {
      let lastMessage = prevMessages[prevMessages.length - 1];
      if (prevMessages.length > 0 && lastMessage.isUser === false) {
        lastMessage.message += chunk;
        return [...prevMessages.slice(0, prevMessages.length - 1), lastMessage];
      } else {
        return [...prevMessages, { isUser: false, message: chunk }];
      }
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage(e);
    }
  };

  return (
    <div className={styles.container__chat}>
      <div
        className={styles.container__chat__messages}
        ref={messagesEndRef}
        onScroll={handleScroll}
      >
        {messages.map((message, key) =>
          message.isUser ? (
            <div key={key} className={styles.container__chat__messages__user}>
              <div className={styles.container__chat__messages__user__message}>
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div key={key} className={styles.container__chat__messages__AI}>
              <div className={styles.container__chat__messages__AI__message}>
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}
      </div>
      <InputChat
        loading={loading}
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Chat;
