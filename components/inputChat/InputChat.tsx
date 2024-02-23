import React, { useEffect, useRef } from "react";
import styles from "./InputChat.module.scss";

interface InputChatProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (e: React.SyntheticEvent) => Promise<void>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  loading:boolean
}

const InputChat = ({
  loading,
  input,
  setInput,
  sendMessage,
  handleKeyPress,
}:InputChatProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log("useEffect called textareaRef");
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "24px";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [input, textAreaRef]);

  return (
    <div className={styles.containerInput}>
      <textarea
        disabled={loading}
        ref={textAreaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Type a message"
        className={styles.containerInput__field}
        tabIndex={0}
      />
      <button
        onClick={sendMessage}
        className={styles.containerInput__button}
      >
        {loading ? "loading..." : "Send"}
      </button>
    </div>
  );
};

export default InputChat;
