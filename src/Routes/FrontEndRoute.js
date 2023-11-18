import fs from "fs/promises"
import mime from "mime"
import { fileURLToPath } from 'url'
import path from 'path'

export default function frontEnd(req, res) {
    console.log("Front-end request")
    if (req.url === "/") {
        console.log("here")
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        console.log(__dirname)
        console.log(__filename)
        console.log(path.join(__dirname, "../Views/index.html"))
        fs.readFile(path.join(__dirname, "../Views/index.html")).then(
            (html) => {
                res.setHeader("Content-Type", "text/html")
                res.statusCode = 200
                res.end(html)
            },
            (err) => {
                console.log(err)
                res.setHeader("Content-Type", "text/html")
                res.statusCode = 500
                res.write("Error in the server, we're working on it.")
                res.end()
            }
        )
    }
    else {
        let updatedURL = req.url
        if (updatedURL[0] === "/") updatedURL.split("").splice(0, 1).join("")
        fs.readFile(`./src/Views/${updatedURL}`).then(
            (file) => {
                res.statusCode = 200
                res.setHeader("Content-Type", mime.getType(req.url.split(".").pop()))
                res.end(file)
            },
            (err) => {
                console.log(err)
                res.statusCode = 500
                res.end("Error in the server, we're working on it.")
            }
        )
    }
}