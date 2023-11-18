import http from "http"
import dotenv from "dotenv"
dotenv.config()
import frontEnd from "./Routes/FrontEndRoute.js"
import messageMe from "./Routes/MessageMeRoute.js"

http.createServer((req, res) => {
    console.log("From Server")
    let url = req.url
    if (url.includes("ahmed")) res.end("Welcome Ahmed")
    if (url[0] === "/") url.split("").splice(0, 1).join("")
    if (!url.split("/").includes("api")) frontEnd(req, res)
    else {
        messageMe(req, res)
    }
}).listen(
    process.env.PORT ||
    3000,
    () => { }
)