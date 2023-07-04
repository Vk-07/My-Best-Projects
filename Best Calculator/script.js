let btns =document.querySelectorAll('button');
let result =document.getElementById("result");
let sbtns =document.querySelectorAll("#btnbox .num2")


btns.forEach( e =>{
    e.onclick = () => {
        result.innerText += e.innerText;
    }
})

sbtns.forEach( e =>{
    e.onclick = () =>{
   if (e.innerText == "AC") {
    result.innerText = "";
    
   } else if(e.innerText =="=") {
     result.innerText =eval(result.innerText);
    
   }else if(e.innerText == "X"){
    result.innerText +="*";
   }else if(e.innerText == "%" ){
    result.innerText =eval(result.innerText/100);
   }else if(e.innerText == "backspace"){
    result.innerText = result.innerText.slice(0, -1);
   }else{
    result.innerText = e.innerText;
   }}
})
