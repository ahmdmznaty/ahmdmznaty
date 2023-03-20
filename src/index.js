import http from "http"
import fs from "fs/promises"
import dotenv from "dotenv"
dotenv.config()
import frontEnd from "./Routes/FrontEndRoute.js"

http.createServer((req, res) => {
    let url = req.url
    if( url[0] === "/" ) url.split("").splice(0, 1).join("")
    if(url.split("/")[0] !== "api") frontEnd(req, res)
    else {
        // route the api
    }
}).listen(process.env.DEVELOPMENT_PORT, () => {
})