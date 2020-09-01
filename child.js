process.on('message',function(msg){
    console.log('child get a message:'+msg)
    process.send('child response:lalalalala')
})