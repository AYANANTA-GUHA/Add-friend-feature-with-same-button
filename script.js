let istatus=document.querySelector("h5")
let btn=document.querySelector("#add")
// let removefriend=document.querySelector("#remove")
let check=0;




btn.addEventListener('click',function(){
    if(check==0){
        istatus.innerHTML='Friends';
        istatus.style.color="green"
        btn.innerHTML="Remove Friends";
        check=1
    }
    else{
        istatus.innerHTML='Stranger';
        istatus.style.color="red"
        btn.innerHTML="Add Friends";
        check=0

    }
  
})
// removefriend.addEventListener("click",function(){
//     istatus.innerHTML='Stranger';
//    istatus.style.color="red"
// })
