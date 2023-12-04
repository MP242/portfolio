import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navbar from "../components/navbar/Navbar";
import Projects  from "../components/projects/Projects";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Page() {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        //   'footer',
      ])),
      // Will be passed to the page component as props
    },
  };
}
