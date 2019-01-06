const express = require("express")
const path = require("path")

const port = process.env.PORT || 8080
const app = express()

app.use(express.static(path.resolve(__dirname, "build")))

app.get("*", (req, res) => {
    console.log("Req:", req.method, req.url , new Date().toUTCString())
    res.sendFile(path.resolve(__dirname, "build/index.html"))
})


app.listen(port, () => {
    console.log("App started on port %s", port)
})