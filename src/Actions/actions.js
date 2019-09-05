export const operations={
        onClick,
        calculate,
        reset,
        backspace
}
function onClick(button,result){
    return {type:"Click" , button,result}
}
function calculate(result){
    return {type:"Calculate",result}
}
function reset(result){
    return {type:"Reset",result}
}
function backspace(result){
    return {type:"Backspace",result}
}