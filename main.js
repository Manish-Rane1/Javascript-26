let obj={
    languages:['JavaScript','python','Ruby','Go'],
    isChallenging:true,
    isRewarding:true,
    difficulty:7,
    isFun:true,
}
showcase(obj)
function showcase(obj){
    obj.languages.forEach((val)=> console.log(val))
    Object.keys(obj).forEach((val)=> console.log(val))
    Object.values(obj).forEach((val)=>console.log(val))
}