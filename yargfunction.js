const fs = require('fs')

const addNote = function (title, content) {
    const rawData = {
        title: title,
        content: content
    }
    const toJsonstring = JSON.stringify(rawData)
    fs.writeFileSync('yarg.json', toJsonstring)
}

const updateNote = function (thefilename, title, content) {
    const readFileBuffer = fs.readFileSync(`${thefilename}`)
    const stringIt = readFileBuffer.toString()
    console.log(stringIt)

    const makeItJsonObject = JSON.parse(stringIt)
    console.log(makeItJsonObject)

    //set the change
    makeItJsonObject.title = title
    makeItJsonObject.content = content
    console.log(makeItJsonObject)

    const stringitagain = JSON.stringify(makeItJsonObject)
    console.log(stringitagain)

    fs.writeFileSync(`${thefilename}`, stringitagain)
}

module.exports = { addNote, updateNote }
