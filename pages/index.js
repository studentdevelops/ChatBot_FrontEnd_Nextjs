import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [msges, setMsges] = useState([
    "Hi",
    "Esse consequat sit esse Lorem exercitation id culpa enim qui tempor consectetur proident. Ea dolor elit nulla reprehenderit. Sit ullamco non tempor eu sit pariatur.",
    "Alright Thank You",
    "Welcome",
  ]);
  const chat = msges.map((msg, i) => {
    if (i % 2 == 0) {
      return (
        <div key={i + 1} className={classNames(styles.msg, styles.msgSent)}>
          {" "}
          {msg}
        </div>
      );
    } else {
      return (
        <div key={i + 1} className={classNames(styles.msg, styles.msgReceived)}>
          {msg}
        </div>
      );
    }
  });

  const onSend = (e) => {
    const msg = document.querySelector("#message");
    if (msg.value != null && msg.value != "") {
      setMsges([...msges, msg.value]);
      msg.value = "";
    }
  };
  const checkSend = (e) => {
    if (e.key == "Enter") {
      onSend(e);
    }
  };
  useEffect(() => {
    document.querySelector("#upperWrapper").scrollTo({
      behavior: "smooth",
      top: document.querySelector("#upperWrapper").scrollHeight,
    });
  }, [msges]);

  return (
    <>
      <Head>
        {/* TODO: Add a Description, Title, page icon */}
        <title>Title</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.chatWrapper}>
          <div className={styles.upperWrapper} id="upperWrapper">
            {" "}
            {chat}
          </div>
          <div className={styles.lowerWrapper}>
            <input
              className={styles.messageBox}
              type="text"
              name="message"
              id="message"
              onKeyDown={checkSend}
            />
            {/* <button> <FaLocationArrow  size={30} rotate={"30"}/></button> */}
            <FaLocationArrow
              size={32}
              className={styles.sendArrow}
              color="hsla(0, 0%, 100%, 0.7)"
              onClick={(e) => onSend(e)}
            />
          </div>
        </div>
      </main>
    </>
  );
}
