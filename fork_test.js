var cp = require('child_process')
var child = cp.fork('child.js')

child.on("message",function(msg){
    console.log('get a message from child'+msg)

    child.disconnect()
})

child.send("this is a meassage from parent")