


let news=()=>{
    let a=Number(document.getElementById("num1").value)
    let b=Number(document.getElementById("num2").value)
    heros(a,b)
}
function heros(a,b){
    total=a+b;
    document.getElementById("results").textContent=total
}

let hero =()=>{
    let a=Number(document.getElementById("num1").value)
    let b=Number(document.getElementById("num2").value)
    heros(a,b)
}
function heros(a,b){
    total=a-b;
    document.getElementById("results").textContent=total
}