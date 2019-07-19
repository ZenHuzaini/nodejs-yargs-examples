const yargs = require('yargs')
const note = require('./yargfunction')

//EXAMPLE TO WRITE 
yargs.command({
    command: 'add', // set the command
    describe: 'to add data', //give description
    builder: { //set the builder -- it contains the key to sore the value
        title: {
            demandOption: true, //required?
            type: 'string',
            describe: 'this is the title'
        },
        content: {
            type: 'string',
            demandOption: true,
            describe: 'this is the content'

        }
    },
    handler: function (argv) { //handler is the place we can put function
        console.log(`title: ${argv.title}, conten: ${argv.content}`)
    }
})

//EXAMPLE 2 - TO WRITE
yargs.command({
    command: 'mymessage',
    describe: 'maybe you need to say hello first',
    builder: {
        message: {
            type: 'string',
            demandOption: 'required'
        }
    },
    handler: function (argv) {
        if (argv.message == "hello") {
            console.log(`oh you say ${argv.message} ? hiiiii :*`)
        } else {
            console.log(`why you don't say hello first ??`)

        }
    }

})

// EXAMPLE 3 CREATE and UPDATE JSON FILE USING FS and Yargs
yargs.command({
    command: 'addJSONFile',
    describe: 'function to add json file',
    builder: {
        title: {
            type: 'string',
            describe: 'this is the title'
        },
        content: {
            type: 'string',
            describe: 'this is the content'
        }
    },
    handler: function (argv) {
        note.addNote(argv.title, argv.content)
    }
})

//Update JSON
yargs.command({
    command: 'updateJSONFile',
    describe: 'this is to update existing json file',
    builder: {
        thefilename: {
            type: 'string',
            demandOption: true,
            describe: 'this is the filename'
        },
        updatedTitle: {
            type: 'string',
            demandOption: true,
            describe: 'this is the titile'
        },
        updatedContent: {
            type: 'string',
            demandOption: true,
            describe: "this is the content content"
        }
    },
    handler: function (argv) {
        note.updateNote(argv.thefilename, argv.updatedTitle, argv.updatedContent)
    }
})

yargs.parse() // to parse the result