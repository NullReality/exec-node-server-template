const express = require(`express`)
const app = express()
const port = 3000

const { exec } = require(`child_process`);

const consoleCommandToRun = `ls`

app.get(`/`, (req, res) => {
    exec(consoleCommandToRun, (error, stdout, stderr) => {
        if(error) {
            console.log(`error: ${error.message}`)
            return
        }

        if(stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }

        console.log(`stdout: ${stdout}`)
    })
})

app.listen(port, () => {
    console.log(`bubbleapp listening on port: ${port}`)
})