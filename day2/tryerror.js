//readfile : use to only read file
//readsyncfile : synchronus operation , blocks the event loop , operations paused the whole programs stops until
    // the complete file is read, demerit is the app becomes unresponsive until the process going completes 


const fs = require('fs');
//fs.readFile('topics.txt' , 'utf' , (err, data) => {
    try{
        const data = fs.readFileSync('topics.txt', 'utf8')
        //wraps the error prone code
        console.Consolelog(data)
    
    } catch (error){
        //handle the error displays the error 
        console.log(err)
    }

