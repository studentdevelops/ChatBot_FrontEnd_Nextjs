import Nav from "@/components/NavBar/Nav";
import styles from "@/styles/addtionalDetails.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

import { motion } from 'framer-motion';
import cookieCutter from 'cookie-cutter';

const Addtionaldetails = () => {

    const [username, setUser] = useState("")
    useEffect(() => {
        const user = cookieCutter.get("user");
        if (user) {
            if (JSON.parse(user).name != "")
                setUser(JSON.parse(user).name)
        }
    }, [])


    const formSubmission = async (e) => {
        if (process?.browser == true) {
            e.preventDefault();
            const baseline_dementia = document.querySelector("input[name='Dementia']").value;
            const baseline_diabetes = document.querySelector("input[name='Diabetes']").value;
            const baseline_cancer = document.querySelector("input[name='Cancer']").value;
            const baseline_pulmonary = document.querySelector("input[name='Lung']").value;
            const baseline_cvd = document.querySelector("input[name='Kidney']").value;
            const baseline_psych = document.querySelector("input[name='mental']").value;
            const baseline_osteoart = document.querySelector("input[name='Knee']").value;
            const userDetails = JSON.parse(localStorage.getItem("userDetails"));
            const localSave = Object.assign(userDetails, { baseline_dementia, baseline_diabetes, baseline_cancer, baseline_pulmonary, baseline_cvd, baseline_psych, baseline_osteoart })
            console.log(localSave)
            const result = await fetch("", {
                method: "POST",
                body: localSave
            },);
            if (result?.success) {
                const resultElement = document.querySelector("results");
                if (result?.output) {
                    resultElement.innerHTML = "Yes you may need a medical assistance immediately or in near future, please consult a physician or surgeon or you may talk to our chatbot " + <Link href={"/"}>click here</Link>;
                } else {
                    resultElement.innerHTML = "Yes you may not need a medical assistance in near future, but still consult a physician or surgeon atleast once a month or you may talk to our chatbot " + <Link href={"/"}>click here</Link>;
                }
            } else {
                alert("try again later")
            }
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
            <Nav username={username} />
            <div className={styles.AdditionalDetailsMain}>
                <motion.div variants={boxVariants} initial="initial" animate="animate" className={styles.AdditonalDetailFormWrapper}>
                    <h3 className={styles.AdditionalDetailsTitle}>Additional details</h3>
                    <motion.form variants={formVariants} initial="initial" animate="animate" onSubmit={formSubmission} className={styles.AdditionalFormDetails}>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Does the patient have Dementia ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="Dementia" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="Dementia" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Does the patient have Diabetes ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="Diabetes" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="Diabetes" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Has the patient had or have Cancer ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="Cancer" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="Cancer" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Does the patient have Lung Issue ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="Lung" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="Lung" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Does the patient have Kidney Disease ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="Kidney" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="Kidney" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Does the patient have any kind of Mental Illness ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="mental" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="mental" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Please provide Mental Illness Name :
                            </div>
                            <div className={styles.Options}>
                                <textarea className={styles.inputField} id="ailment" rows="1" cols="30" required placeholder=" Ailment Details"></textarea>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Does the patient have Knee Pain or other Ailment ?
                            </div>
                            <div className={styles.Options}>
                                <div className={styles.OptionAlign}><input type="radio" name="Knee" value={"1"} required /> Yes</div>
                                <div className={styles.OptionAlign}><input type="radio" name="Knee" value={"0"} required /> No</div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <div className={styles.Question}>
                                Please provide Ailment Details :
                            </div>
                            <div className={styles.Options}>
                                <textarea className={styles.inputField} id="ailment" rows="1" cols="30" required placeholder="Illness Name"></textarea>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className={styles.Block}>
                            <motion.button whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }} whileTap={{ scale: 1, transition: { duration: 0.1 } }} className={styles.SaveButton} type="submit">Predict</motion.button>
                        </motion.div>
                        <p id="results"></p>
                    </motion.form>
                </motion.div>

            </div>
        </>

    )
}

export default Addtionaldetails