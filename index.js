function receivesAFunction(callback){
    return callback()
  }
 
  function returnsANamedFunction(){
    return function test(){
    }
  }
  
  const returnsAnAnonymousFunction = (fn) => {
    return function () {
      };
}