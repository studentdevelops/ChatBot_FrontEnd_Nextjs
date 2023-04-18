import styles from "@/styles/addtionalDetails.module.css"

const addtionaldetails = () => {
    return (
        <div className={styles.AdditionalDetailsMain}>
            <div className={styles.AdditonalDetailFormWrapper}>
                <h3 className={styles.AdditionalDetailsTitle}>Additional details</h3>
                <form className={styles.AdditionalFormDetails}>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Does the patient have Dementia ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Dementia" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Dementia" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Does the patient have Diabetes ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Diabetes" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Diabetes" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Has the patient had or have Cancer ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Cancer" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Cancer" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Does the patient have Lung Issue ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Lung" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Lung" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Does the patient have Kidney Disease ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Kidney" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Kidney" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Does the patient have any kind of Mental Illness ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Illness" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Illness" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Please provide Mental Illness Name :
                        </div>
                        <div className={styles.Options}>
                            <textarea className={styles.inputField} id="ailment" rows="1" cols="30" required placeholder=" Ailment Details"></textarea>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Does the patient have Knee Pain or other Ailment ?
                        </div>
                        <div className={styles.Options}>
                            <div className={styles.OptionAlign}><input type="radio" name="Illness" value={"1"} required /> Yes</div>
                            <div className={styles.OptionAlign}><input type="radio" name="Illness" value={"0"} required /> No</div>
                        </div>
                    </div>
                    <div className={styles.Block}>
                        <div className={styles.Question}>
                            Please provide Ailment Details :
                        </div>
                        <div className={styles.Options}>
                            <textarea className={styles.inputField} id="ailment" rows="1" cols="30" required placeholder=" Ailment Details"></textarea>
                        </div>
                    </div>
                    <button className={styles.SaveButton} type="submit">Save</button>
                </form>
            </div>

        </div>
    )
}

export default addtionaldetails