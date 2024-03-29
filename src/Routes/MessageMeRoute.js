import nodemailer from "nodemailer"
import fs from "fs"

export default function messageMe(req, res) {
    if(req.url.replaceAll("/api", "").replaceAll("api", "") == "/message-me") {
        let data = []
        let jsondata
        req.on("data", (chunk) => {
            data.push(chunk)
        })
        req.on("end", () => {
            jsondata = JSON.parse(Buffer.concat(data).toString())

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL,
                    pass: process.env.GPASSWORDHeroku
                }
            })
            
            var mailOptions = {
                from: 'ahmd53mhmd@gmail.com',
                to: "ahmdmznaty@gmail.com",
                subject: `Portfolio Message From ${jsondata.name}`,
                html: `<div style="background: #eee; padding: 30px; border: 1px solid #ddd; border-radius: 5px; text-align: center; font-family: sans-serif; box-sizing: border-box;"><h3 style="width: 100%; margin: 0; color: #333; font-size: 30px;">${jsondata.name}</h3><p style="width: calc(100% - 10px); color: #666; margin: 15px auto; font-size: 16px; background: #fff; padding: 20px; border-radius: 5px; border: 1px solid #ddd; box-sizing: border-box;">${jsondata.message}</p><a style="margin: 5px; display: inline-block; text-decoration: none; width: 120px; height: 40px; background: #181817; color: #eee; line-height: 40px; border-radius: 4px;" href="mailto:${jsondata.email}">Email</a><a style="margin: 5px; display: inline-block; text-decoration: none; width: 120px; height: 40px; background: #181817; color: #eee; line-height: 40px; border-radius: 4px;" href="https://wa.me/+${jsondata.whatsapp.replaceAll("+", "")}">Whatsapp</a></div>`
            }
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    res.statusCode = 500
                    res.end("error")
                } else {
                    res.statusCode = 200
                    res.end("done")
                }
            })
        })
    }
}
