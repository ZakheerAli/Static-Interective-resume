const myskill=document.getElementById("skill") as HTMLElement;
const toggleButton=document.getElementById("toggle") as HTMLButtonElement;

toggleButton.addEventListener("click",()=>{
    if(myskill.style.display==="none"){
        myskill.style.display="block"
    }else{
        myskill.style.display="none"
    }
})