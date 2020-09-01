var cp  = require('child_process');

cp.exec('echo hello,wangkly',function(err,res){
    console.log('exec==>',res)
})

cp.execFile('test.js',{encoding:'utf-8'},function(error,stdout,stderr){
    console.log('execFile====>',stdout)
})

cp.execFile('node',['--version'],function(err,stdout,stderr){
    console.log('===>',stdout)
})


cp.execFile('echo',['hello','world'],function(error,stdout,stderr){
    console.log('execFile====>',stdout)
})

var cat  = cp.spawn('cat',['spawn.txt'])
var sort = cp.spawn('sort')
var uniq =cp.spawn('uniq')
cat.stdout.pipe(sort.stdin)
sort.stdout.pipe(uniq.stdin)
uniq.stdout.pipe(process.stdout)
console.log(process.stdout)




