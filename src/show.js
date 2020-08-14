function* testGenerator(){
  yield 1;
  yield "hello";
  yield "wangkly"
}

module.exports = function (content) {
    window.alert('Hello ' + content);

    let it =  testGenerator();
    console.log('it===>',it.next.value);

  };

// exports.show = function(){
//   console.log('webpack')
// }