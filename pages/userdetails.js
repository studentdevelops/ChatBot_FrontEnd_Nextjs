import Nav from "@/components/NavBar/Nav";
import styles from "@/styles/userDetails.module.css"
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import cookieCutter from 'cookie-cutter';
import Head from "next/head";


const Userdetails = () => {

    const router = useRouter();

    const [username, setUser] = useState("")
    useEffect(() => {
        const user = cookieCutter.get("user");
        if (user) {
            if (JSON.parse(user).name != "")
                setUser(JSON.parse(user).name)
        }
    }, [])



    const bmiCalc = (e) => {
        let height = (document.querySelector("input[name='height']").value) / 100;
        let weight = document.querySelector("input[name='weight']").value;
        let bmi = document.querySelector("input[name='bmi']");
        let age = document.querySelector("input[name='age']").value;

        if (height > 0.5 && weight > 20) {
            bmi.value = (weight / (height ** 2)).toFixed(2);
        }
        if (bmi?.value) {
            let bmrVal = 0.0;
            let gender = document.querySelector("input[name='gender']");
            if (gender) {
                bmrVal = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmrVal = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }
            document.querySelector("#bmrDisplay").textContent = bmrVal.toFixed(2) + " calories to be taken daily";
        }
    }

    const formSubmission = async (e) => {
        if (process?.browser == true) {
            e.preventDefault();
            const name = document.querySelector("input[name='name']").value;
            const gender = document.querySelector("input[name='gender']").value;
            const Age = document.querySelector("input[name='age']").value;
            const height = document.querySelector("input[name='height']").value;
            const weight = document.querySelector("input[name='weight']").value;
            const bmi = document.querySelector("input[name='bmi']").value;
            const surgery = document.querySelector("input[name='surgery']:checked").value;
            const complications = document.querySelector("input[name='complications']:checked").value;
            const bmr = document.querySelector("input[name='bmr']:checked").value;
            const localSave = { name, gender, Age, height, weight, bmi, bmr, surgery, complications }
            // console.log(localSave)
            // console.log(localStorage)
            localStorage.setItem("userDetails", JSON.stringify(localSave));
            router.push("/additionaldetails")

        }
    }

    const boxVariants = {
        initial: { opacity: 0, x: "-10rem", y: "-10rem" },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { staggerChildren: 0.5, ease: "easeInOut", duration: 1 },
        },
    }
    const formVariants = {
        initial: { opacity: 0, x: "-5rem", y: "-5rem" },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { staggerChildren: 0.1, ease: "easeInOut", duration: 1 },
        },
    }
    const childVariants = {
        initial: { opacity: 0, x: "-2rem", y: "-2rem" },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.5 },
        },
    }

    return (
        <>
            <Head>
                {/* TODO: Add a Description, Title, page icon */}
                <title>MedAI | Fill in User Details</title>
                <meta name="description" content="Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav username={username} />
            <div className={styles.UserMain}>
                <motion.div variants={boxVariants} initial="initial" animate="animate" className={styles.UserDetailFormWrapper}>
                    <h3 className={styles.UserTitle}>User details</h3>
                    <motion.form variants={formVariants} initial="initial" animate="animate" onSubmit={formSubmission} className={styles.UserFormDetails}>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Name:
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input className={styles.inputField} type="text" name="name" placeholder="name" required /></div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Gender:
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="gender" value={"1"} onChange={bmiCalc} required /> Male </div>
                                <div className={styles.OptionAlign}><input type="radio" name="gender" value={"0"} onChange={bmiCalc} required /> Female </div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Age:
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="range" name="age" min={"1"} max={"100"} onChange={(e) => {
                                    document.querySelector("#ageDisplay").textContent = e.target.value;
                                }} required /> <div id={"ageDisplay"}></div></div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Height:
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input className={styles.inputField} type="number" name="height" placeholder="In cm" onChange={bmiCalc} /></div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Weight:
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input className={styles.inputField} type="number" name="weight" placeholder="In KG" onChange={bmiCalc} /></div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                BMI:
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input className={styles.inputField} type="decimal" name="bmi" placeholder="will be calculated" contentEditable="false" disabled /></div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Ever had a surgery?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="surgery" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="surgery" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Any post surgery or hospital complications?

                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="complications" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="complications" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question} title="Do you reach the BMR(How many Calories should you intake as per your height, weight, age)">
                                BMR: <div id="bmrDisplay"></div>
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="bmr" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="bmr" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <motion.button whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }} whileTap={{ scale: 1, transition: { duration: 0.1 } }} variants={childVariants} className={styles.SaveButton} >Next</motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </>
    )
}

export default Userdetails