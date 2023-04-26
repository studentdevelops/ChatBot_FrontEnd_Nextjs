import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Nav from "@/components/NavBar/Nav";
import cookieCutter from 'cookie-cutter';
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [username, setUser] = useState("")
  useEffect(() => {
    const user = cookieCutter.get("user");
    if (user) {
      if (JSON.parse(user).name != "")
        setUser(JSON.parse(user).name)
    }
  }, [])

  const [msges, setMsges] = useState([]);
  const chat = msges.map((msg, i) => {
    if (i % 2 == 0) {
      return (
        <div key={i + 1} className={classNames(styles.msg, styles.msgSent)}>
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

  const onSend = async (e) => {
    const msg = document.querySelector("#message");
    if (msg.value != null) {
      const UserId = JSON.parse(cookieCutter.get("user")).UserId
      const result = await fetch("/api/chatapi", {
        method: "POST",
        body: JSON.stringify({ Question: msg.value + "*note this(and do not mention it)keep your answer limited to general greeting and assistance advices only" + ".", UserId: UserId })
      })
      
      if (result) {
        const response = await result.json();
        if (response?.success) {
          setMsges([...msges, msg.value, response.message])
        } else {
          setMsges([...msges, msg.value])
        }
      } else {
        setMsges([...msges, msg.value])
      }
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
        <title>MedAI | Come have a chat</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav username={username} />
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
