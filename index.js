var title=["H","A","N","G","M","A","N"];
var alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var boxes=document.getElementsByClassName("title");
var start=document.getElementById("start");
var rules=document.getElementById("rules");
var rulePage=document.getElementById("rulePage");
var heading=document.getElementById("heading");
var buttons=document.getElementById("startButton");
var continueButton=document.getElementById("continue");
rulePage.style.visibility="hidden";
var i=0,j=25,k=0,l=0,m=0;  

 function loadH()
    {
        boxes[0].innerHTML=alphabets[i].toUpperCase();
        if(boxes[0].innerHTML!=="H")
        {
                i++;
                setTimeout(loadH,100);
        }
     }

function loadA()
    {
        boxes[1].innerHTML=alphabets[j].toUpperCase();
        boxes[5].innerHTML=alphabets[j].toUpperCase();
        if(boxes[1].innerHTML!=="A")
            {
                j--;
                setTimeout(loadA,70);
            }
    }

function loadN()
    {
        boxes[2].innerHTML=alphabets[k].toUpperCase();
        boxes[6].innerHTML=alphabets[k].toUpperCase();
        if(boxes[2].innerHTML!=="N")
            {
                k++;
                setTimeout(loadN,100);
            }
    }

function loadG()
    {
        boxes[3].innerHTML=alphabets[l].toUpperCase();
        if(boxes[3].innerHTML!=="G")
            {
                l++;
                setTimeout(loadG,100);
            }
    }

function loadM()
    {
        boxes[4].innerHTML=alphabets[m].toUpperCase();
        if(boxes[4].innerHTML!=="M")
            {
                m++;
                setTimeout(loadM,100);
            }
    }

// setTimeout(loadTitle,2000);
loadH();
loadA();
loadM();
loadG();
loadN();

start.addEventListener("click",function(){
    window.location="hangman.html";
});

rules.addEventListener("click",function(){
    buttons.style.opacity="0.5";
    heading.style.opacity="0.5";
    rulePage.style.visibility="visible";
});

continueButton.addEventListener("click",function(){
    window.location="index.html";
});