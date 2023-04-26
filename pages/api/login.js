// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method == "POST") {
        const email = JSON.parse(req.body).email;
        const password = JSON.parse(req.body).password;
        const result = await fetch("http://127.0.0.1:5000/Get_User", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            })

        })
        const response = await result.json()
        // console.log({result, response})
        res.status(200).json(response)
    }
    // res.status(200).json({ name: 'John Doe' })
}
