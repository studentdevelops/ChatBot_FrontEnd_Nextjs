// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method == "POST") {
        // console.log(JSON.parse(req.body))
        const reqBody = JSON.parse(req.body);
        const UserId = reqBody.UserId;
        const name = reqBody.name;
        const Age = reqBody.Age;
        const height = reqBody.height;
        const weight = reqBody.weight
        const bmi = reqBody.bmi;
        const surgery = reqBody.surgery;
        const gender = reqBody.gender;
        // const complications = reqBody.complications;
        const baseline_digestive = reqBody.baseline_digestive;
        const baseline_dementia = reqBody.baseline_dementia;
        const baseline_diabetes = reqBody.baseline_diabetes;
        const baseline_cancer = reqBody.baseline_cancer;
        const baseline_pulmonary = reqBody.baseline_pulmonary;
        const baseline_cvd = reqBody.baseline_cvd;
        const baseline_psych = reqBody.baseline_psych;
        const baseline_osteoart = reqBody.baseline_osteoart;
        const bmr = reqBody.bmr;
        const result = await fetch("http://127.0.0.1:5000/post_data", {
            method: "POST",
            body: JSON.stringify({
                UserId: UserId,
                name: name,
                Age: Age,
                height: height,
                weight: weight,
                bmi: bmi,
                bmr: bmr,
                surgery: surgery,
                gender: gender,
                // complications: complications,
                baseline_digestive: baseline_digestive,
                baseline_dementia: baseline_dementia,
                baseline_diabetes: baseline_diabetes,
                baseline_cancer: baseline_cancer,
                baseline_pulmonary: baseline_pulmonary,
                baseline_cvd: baseline_cvd,
                baseline_psych: baseline_psych,
                baseline_osteoart: baseline_osteoart
            })
        })
        const response = await result.json()
        // console.log({ result, response })
        res.status(200).json(response)
    }
    // res.status(200).json({ name: 'John Doe' })
}
