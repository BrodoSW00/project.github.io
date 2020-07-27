const contactR = document.querySelector('.contactR');
const contactInfo =document.querySelector('.contactInfo');
const contactForm = document.querySelector('.contactForm')

console.log(contactInfo);

if(window.innerWidth<=1000){
    contactInfo.append(contactR);
    contactR.style.display="inline" ;
}
    

window.addEventListener("resize",function(){
    if(window.innerWidth<=1000){
        contactInfo.append(contactR);
        
        
    }
    
    if(window.innerWidth > 1000)
    {
        contactForm.append(contactR);
    }

    if(window.innerWidth>1300)
        contactR.display='none';

        
});


const sideBar= document.querySelector(".sideBar");
const checkBox= document.querySelector("#menu");

checkBox.addEventListener("click",function(){
    if(sideBar.classList.contains("hide")){
        sideBar.classList.remove("hide")
    }
    else
        sideBar.classList.add("hide");
});