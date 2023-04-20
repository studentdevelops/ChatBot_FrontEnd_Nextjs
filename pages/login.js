import styles from "@/styles/login.module.css";
import classNames from "classnames";

import { motion } from "framer-motion";
import cookieCutter from 'cookie-cutter';
import { useRouter } from "next/router";


export default function Login() {
  const router = useRouter();
  const switchersFunc = (e) => {
    const switcherElements = document.querySelectorAll(`.${styles.switcher}`);

    switcherElements.forEach((item) => {
      item.children[0].classList.remove(`${styles.underline}`);
      item.parentElement.classList.remove(`${styles.isActive}`);
    });

    e.target.parentElement.classList.add(`${styles.isActive}`);
    e.target.children[0].classList.add(`${styles.underline}`);
  };

  const submitLogin = async (e) => {
    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-password").value;

    if (email != null && password != null) {
      const result = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
      },
      );
      if(result?.success){
        cookieCutter.set("user", JSON.stringify({userid: result.userid, name: result.name}))
        router.push("/additionaldetails")
      }
    }
  }

  const submitSignup = async (e) => {
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value;
    if (email != null && password != null) {
      const result = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
      },
      );
      if(result?.success){
        cookieCutter.set("user", JSON.stringify({userid: result.userid, name: result.name}))
        router.push("/additionaldetails")
      }
    }
  }
  const boxVariants = {
    initial: { opacity: 0, x: "-10rem", y: "-10rem" },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.05, ease: "easeInOut", duration: 1.5 },
    },
  }
  return (
    <div>
      <section className={styles.formsSection}>
        <div className={styles.forms}>
          <motion.div variants={boxVariants} initial="initial" animate="animate" className={classNames(styles.formWrapper, styles.isActive)}>
            <button
              onClick={switchersFunc}
              type="button"
              className={classNames(styles.switcher, styles.switcher_login)}
            >
              Login
              <span className={styles.underline}></span>
            </button>
            <form
              method="post"
              className={classNames(styles.form, styles.formLogin)}
            >
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className={styles.inputBlock}>
                  <label htmlFor="login-email">E-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    name="emailid"
                    required
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
              </fieldset>
              <motion.button whileHover={{
                scale: 1.1,
                transition: { duration: 0.01 }
              }} whileTap={{ scale: 1, transition: { duration: 0.01 } }}
                type="submit" className={styles.btnLogin} onClick={submitLogin}>
                Login
              </motion.button>
            </form>
          </motion.div>
          <motion.div variants={boxVariants} initial="initial" animate="animate" className={styles.formWrapper}>
            <button
              onClick={switchersFunc}
              type="button"
              className={classNames(styles.switcher, styles.switcherSignup)}
            >
              Sign Up
              <span className={styles.underline}></span>
            </button>
            <form
              method="post"
              className={classNames(styles.form, styles.formSignup)}
            >
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div className={styles.inputBlock}>
                  <label htmlFor="signup-email">E-mail</label>
                  <input
                    id="signup-email"
                    type="email"
                    name="emailid"
                    required
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="signup-password">Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
              </fieldset>
              <motion.button whileHover={{
                scale: 1.1,
                transition: { duration: 0.01 }
              }} whileTap={{ scale: 1, transition: { duration: 0.01 } }} type="submit" className={styles.btnSignup} onClick={submitSignup}>
                Continue
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
