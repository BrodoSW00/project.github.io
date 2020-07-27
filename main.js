const nav = document.querySelector('.navbar');
function stickyNav()
{
    
    if (window.scrollY > 2){
        nav.style.backgroundColor="rgba(255, 255, 255, 0.80)";
    }

    else if(window.scrollY <2)
        nav.style.backgroundColor="rgba(255, 255, 255, 0.95)";
    
    
    if(window.innerWidth>800)
    {
        if (window.scrollY > 2)
            nav.classList.add("fixed");
    
        else if (window.scrollY < 5 && nav.classList.contains("fixed")){
            nav.classList.remove("fixed");
            nav.style.backgroundColor="rgba(255, 255, 255, 0.95)";

        }
           
    } 
    
    
}

window.addEventListener('scroll',stickyNav);

window.addEventListener("resize",function(){
    if(window.innerWidth>=600)
     sideBar.classList.add("hide");
});



function displayOptions(i)
{
    
        if( selectList[i].nextElementSibling.classList.contains("inactive") )
        {    
            selectList[i].nextElementSibling.classList.replace("inactive","active");
            selectList[i].nextElementSibling.addEventListener("click", function(){
                selectList[i].nextElementSibling.classList.replace('active','inactive');
                
            }); 
        }

        else if (selectList[i].nextElementSibling.classList.contains("active")){
                
            selectList[i].nextElementSibling.classList.replace("active","inactive");
        };  

        for(let j=0; j<selectList[i].nextElementSibling.children.length; j++)
            selectList[i].nextElementSibling.children[j].addEventListener("click",function(){
                replaceOptionText(i,j);
            })
}

function replaceOptionText(i,j)
{

    selectList[i].innerText=selectList[i].nextElementSibling.children[j].innerText;
}


const selectList = document.querySelectorAll(".new");


for(let i = 0 ; i<selectList.length;i++){

    selectList[i].addEventListener("click",function(){
        displayOptions(i);
    });
}
    
const sideBar= document.querySelector(".sideBar");
const checkBox= document.querySelector("#menu");

checkBox.addEventListener("click",function(){
    if(sideBar.classList.contains("hide")){
        sideBar.classList.remove("hide")
    }
    else
        sideBar.classList.add("hide");
});

