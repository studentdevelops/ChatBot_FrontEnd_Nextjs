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
    if(user){
      if(JSON.parse(user).name!= "")
      setUser(JSON.parse(user).name)
    } 
  }, [])

  const [msges, setMsges] = useState([
    "hey i have been diagnosed with dimentia.",
    "Dementia is a complex and progressive condition. It is important to consult with a healthcare professional who can provide personalized advice and treatment options. Maintaining a healthy lifestyle, engaging in cognitive activities, and utilizing support services can also be helpful.",
    "what steps should i be taking?",
    "You should consider the following steps: \nVisit a specialist and discuss the diagnosis and the stage of dementia \nCreate a support network of family, friends, and caregivers. \nStart cognitive and physical exercises to maintain mental and physical health. \nReview financial and legal documents and consider appointing a trusted family member as a power of attorney. \nConsider joining support groups for individuals and families affected by dementia. \nEnsure a safe and comfortable living environment.\n Monitor medications and potential side effects. \nPlan for the future, including end-of-life care.",
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

  const onSend = async (e) => {
    const msg = document.querySelector("#message");
    if (msg.value != null && msg.value != "") {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify({ msg: msg.value })
      })
      if (response?.sucess) {
        const result = await JSON.parse(response);
        if (result?.success) {
          setMsges([...msges, msg.value, result.msg])
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
        <title>Title</title>
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
