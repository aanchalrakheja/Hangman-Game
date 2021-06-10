import {randomWord} from "./word.js";
var wordDiv=document.getElementById("word");
var keypad=document.getElementById("keypad");
var alphabets=document.getElementsByClassName("alphabets");
var letter=document.getElementsByClassName("letter");
var score=document.getElementById("scoreNumber");
var lives=document.getElementById("livesNumber");
var resultPage=document.getElementById("resultPage");
var result=document.getElementById("result");
var restart=document.getElementById("restart");
var scoreCard=document.getElementById("scoreCard");
var finalScore=document.getElementById("finalScore");
var hint=document.getElementById("hint");
var hintText=document.getElementById("hintText");
const c = document.getElementById("hangman");
const ctx = c.getContext("2d");
var wordObject=randomWord();
var word=wordObject.word;

hintText.style.visibility="hidden";
resultPage.style.visibility="hidden";
// lives of the game
var gameLives=10; 
// score of the game
var gameScore=0;
// to check whether the game is complete or not
var complete=0;
// to check what part of hangman to draw
var x=0;
// to check whether a letter entered by user lies in the word to be guessed
var flag=0;

// fetching word
// var arr=["happy","sad","content"];


// functions to draw the hangman
function drawStandVertical()
{
    ctx.beginPath();
    ctx.moveTo(30,10);
    ctx.strokeStyle="red";
    ctx.lineTo(30,140);
    ctx.stroke();
}

function drawStandBottom()
{
    ctx.beginPath();
    ctx.moveTo(10,130);
    ctx.strokeStyle="white";
    ctx.lineTo(280,130);
    ctx.stroke();
}

function drawstandHorizontal()
{
    ctx.beginPath();
    ctx.moveTo(10,20);
    ctx.lineTo(280,20);
    ctx.stroke();
}

function drawRope()
{
    ctx.beginPath();
    ctx.moveTo(150,20);
    ctx.lineTo(150,35);
    ctx.stroke();
}

function drawFace()
{
    ctx.beginPath();
    ctx.arc(150, 45, 10, 0, 2* Math.PI,true);
    ctx.stroke();
}

function drawBody()
{
    ctx.beginPath();
    ctx.moveTo(150,55);
    ctx.lineTo(150,100);
    ctx.stroke();
}

function drawLeg1()
{
    ctx.beginPath();
    ctx.moveTo(150,100);
    ctx.lineTo(120,120);
    ctx.stroke();
}
function drawLeg2()
{
    ctx.beginPath();
    ctx.moveTo(150,100);
    ctx.lineTo(180,120);
    ctx.stroke();
}

function drawHand1()
{
    ctx.beginPath();
    ctx.moveTo(150,75);
    ctx.lineTo(100,70);
    ctx.stroke();
}

function drawHand2()
{
    ctx.beginPath();
    ctx.moveTo(150,75);
    ctx.lineTo(200,70);
    ctx.stroke();
}


// function to darw boxes depending on the length of the word to be guessed
// var word=arr[1];
function drawBoxes()
{
    for(var i=0;i<word.length;i++)
    {
        var box=document.createElement("div");
        var text=document.createTextNode("_");
        box.classList.add("letter");
        box.appendChild(text);
        wordDiv.appendChild(box);
    }
}


// function to draw hangman whenever the player loses a life
function drawHangman()
{
        gameLives--;
        lives.innerHTML=gameLives;
        x++;
        switch(x)
        {
            case 1:drawStandBottom();break;
            case 2:drawStandVertical();break;
            case 3:drawstandHorizontal();break;
            case 4:drawRope();break;
            case 5:drawFace();break;
            case 6:drawBody();break;
            case 7:drawLeg1(); break;
            case 8:drawLeg2();break;
            case 9:drawHand1();break;
            case 10:drawHand2();break;
        };
}

// function to check win
function checkWin()
{
    console.log("u win");
    result.innerHTML="Yayy!! You won.";
    c.style.zIndex=0;
    finalScore.innerHTML=gameScore;
    resultPage.style.visibility="visible";
    restart.addEventListener("click",function()
    {
        window.location="index.html";
    });
}

// function to check loosing condition
function gameOver()
{
    console.log("u lost");
    result.innerHTML="Oops! You lost.";
    c.style.zIndex=0;
    finalScore.innerHTML=gameScore;
    resultPage.style.visibility="visible";
    restart.addEventListener("click",function(){
        window.location="index.html";
    });
}

// function to display hint
hint.addEventListener("click",function()
{
    hintText.innerHTML=wordObject.hint;
    hintText.style.visibility="visible";
    setTimeout(closeHint,4000);
});

// function to close the hint displayed after 4 mins of displaying
function closeHint()
{
    hintText.style.visibility="hidden";
}

// function to manage the functioning of the game
function gamePlay()
{
    for(var j=0;j<alphabets.length;j++)
    {
    alphabets[j].addEventListener("click",function(e)
    {
        if(e.target.classList.contains("disable")===false)
        {
        var checkLetter=e.target.innerHTML;
        flag=0;
        for(var i=0;i<word.length;i++)
        {
            if(word[i]===checkLetter.toLowerCase())
            {
                gameScore++;
                score.innerHTML=gameScore;
                letter[i].innerHTML=checkLetter;
                flag=1;
                complete++;
            }
        }
        if(complete===word.length)
        {
            checkWin();
        }
        if(flag===0)
        {
            drawHangman();
            if(gameLives===0)
            {
                gameOver();
            }
        }
    }
    e.target.classList.add("disable");
    });
}
}

gamePlay();
drawBoxes();