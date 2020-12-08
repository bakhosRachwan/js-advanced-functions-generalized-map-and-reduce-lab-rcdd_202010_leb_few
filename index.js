function map(arr, fun) {

  let s = arr.map(elemet => 
    (fun(elemet))
  )
  return s
}


function reduce(src, cb, startpoint){
  
    return src.reduce((acc, val) => {cb}(acc, val)+startpoint})
    

}  