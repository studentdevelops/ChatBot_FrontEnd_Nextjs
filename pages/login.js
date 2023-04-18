import styles from "@/styles/login.module.css";
import classNames from "classnames";

export default function login() {
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
    }
  }

  return (
    <div>
      <section className={styles.formsSection}>
        <div className={styles.forms}>
          <div className={classNames(styles.formWrapper, styles.isActive)}>
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
              <button type="submit" className={styles.btnLogin} onClick={submitLogin}>
                Login
              </button>
            </form>
          </div>
          <div className={styles.formWrapper}>
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
              <button type="submit" className={styles.btnSignup} onClick={submitSignup}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
