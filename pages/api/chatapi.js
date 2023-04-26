// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method == "POST") {
        const reqBody = JSON.parse(req.body);
        // console.log(reqBody)
        const UserId = reqBody.UserId;
        const Question = reqBody.Question;
        const result = await fetch("http://127.0.0.1:5000/Get_Answer", {
            method: "POST",
            body: JSON.stringify({
                UserId: UserId,
                Question: Question,
            })
        })
        const response = await result.json()
        // console.log({ result, response })
        res.status(200).json(response)
    }
    // res.status(200).json({ name: 'John Doe' })
}
