module.exports = function check(str, bracketsConfig) {
  let delim=bracketsConfig.map((item) => {
    if(Array.isArray(item)) return item.join('');
  })
  str=str.split('')
  function f(x){
    for (let i=0;i<str.length;i++){
        if(str[i]+str[i+1]==x){
           str.splice(i,2)
           i=-1
           return g();
        }
      }
    return 
  }
  function g(){
    for(let t=0;t<delim.length;t++){
        f(delim[t])
    }
  }
  g() 
  if(str.length==0) return true 
  else return false
}
