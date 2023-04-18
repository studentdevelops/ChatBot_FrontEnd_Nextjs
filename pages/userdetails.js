import styles from "@/styles/userDetails.module.css"

const userdetails = () => {
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
    return (
        <div className={styles.UserMain}>
            <div className={styles.UserDetailFormWrapper}>
                <h3 className={styles.UserTitle}>User details</h3>
                <form className={styles.UserFormDetails}>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Name:
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input className={styles.inputField} type="text" name="name" placeholder="name" required/></div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Gender
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="gender" value={"1"} onChange={bmiCalc} required/> Male </div>
                            <div className={styles.OptionAlign}><input type="radio" name="gender" value={"0"} onChange={bmiCalc} required/> Female </div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Age:
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="range" name="age" min={"10"} max={"100"} onChange={(e) => {
                                document.querySelector("#ageDisplay").textContent = e.target.value;
                            }} required /> <div id={"ageDisplay"}></div></div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Height:
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input className={styles.inputField} type="number" name="height" placeholder="In cm" onChange={bmiCalc} /></div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Weight:
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input className={styles.inputField} type="number" name="weight" placeholder="In KG" onChange={bmiCalc} /></div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            BMI:
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input className={styles.inputField} type="decimal" name="bmi" placeholder="will be calculated" contentEditable="false" disabled/></div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Ever had a surgery?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="surgery" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="surgery" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Any post surgery or hospital complications?

                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="complications" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="complications" value={"0"} required/> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question} title="Do you reach the BMR(How many Calories should you intake as per your height, weight, age)">
                            BMR: <div id="bmrDisplay"></div>
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="bmr" value={"1"} required/> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="bmr" value={"0"} required/> No</div>
                        </div>
                    </div>
                    <button className={styles.SaveButton} type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default userdetails