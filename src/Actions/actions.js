export const operations={
        onClick,
        calculate,
        reset,
        backspace
}
function onClick(button){
    return {type:"Click" , button}
}
function calculate(){
    return {type:"Calculate"}
}
function reset(){
    return {type:"Reset"}
}
function backspace(){
    return {type:"Backspace"}
}