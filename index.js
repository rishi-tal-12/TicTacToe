var x='x'
var o='o'
let m=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]
let xm=[x,x,x]
let om=[o,o,o]
let b = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

var gameOver = false;

let p1=false
let p2=false
let xwins=document.getElementById("X")
let owins=document.getElementById("O")
let tie=document.getElementById("TIE")
let b0=document.getElementById("0")
let b1=document.getElementById("1")
let b2=document.getElementById("2")
let b3=document.getElementById("3")
let b4=document.getElementById("4")
let b5=document.getElementById("5")
let b6=document.getElementById("6")
let b7=document.getElementById("7")
let b8=document.getElementById("8")
let r = document.getElementById("reset")
b0.addEventListener("click", () => buttonclick(0))
b1.addEventListener("click", () => buttonclick(1))
b2.addEventListener("click", () => buttonclick(2))
b3.addEventListener("click", () => buttonclick(3))
b4.addEventListener("click", () => buttonclick(4))
b5.addEventListener("click", () => buttonclick(5))
b6.addEventListener("click", () => buttonclick(6))
b7.addEventListener("click", () => buttonclick(7))
b8.addEventListener("click", () => buttonclick(8))
r.addEventListener("click", reset)


function newgame (){
    for (let i=0;i<9;i++){
        if(b[i]!=' '){
            return false
        }
    }
    return true
}

function xoro(n){
    console.log(n)
    var a = newgame()
    if(a){
        b[n]=x;
        p1=true;
    }
    else if(p1==true&&p2==false){
        console.log("It's player 2 chance")
            if(b[n]==x || b[n]==o){
                console.log("Place is already filled")
            }else{
                b[n]=o
                p1=false
                p2=true
            }
    }
    else if (p1==false && p2==true){
        console.log("It's player 1 chance")
        if(b[n]==x || b[n]==o){
            console.log("Place is already filled")
        }else{
            b[n]=x
            p1=true
            p2=false
        }
    }
}

function reset (){
    for (let i=0;i<9;i++){
        b[i]=' '
    }
    update()
    xwins.style.display="none"
    owins.style.display="none"
    tie.style.display="none"
    gameOver = false;
}

function win(){
    console.log(b)
    for (let i=0;i<8;i++){
        var xwin = true
        var owin = true
    
        for (let j=0; j<3; j++){
            if (b[m[i][j]]!=xm[j]){
                xwin = false
            }
            if (b[m[i][j]]!=om[j]){
                owin = false
            }
        }

        if (xwin){
            console.log("x wins")
            xwins.style.display="block"
            gameOver = true;
            return 'x'
        }

        else if (owin){
            console.log("o win")
            owins.style.display="block"
            gameOver = true;
            return 'o'
        }

        else{
            if(b[0]!=' ' && b[1]!= ' '&& b[2]!=' ' && b[3]!=' ' && b[4]!=' ' && b[5]!=' ' && b[6]!=' ' && b[7]!=' ' && b[8]!=' '){
                console.log('tie')
                tie.style.display="block"
                gameOver = true;
                return 't'
            }
            
        }
    }
}

function update(){
    b0.innerText=b[0]
    b1.innerText=b[1]
    b2.innerText=b[2]
    b3.innerText=b[3]
    b4.innerText=b[4]
    b5.innerText=b[5]
    b6.innerText=b[6]
    b7.innerText=b[7]
    b8.innerText=b[8]
}

function buttonclick(n){
    if (!gameOver){
        xoro(n)
        update()
        res = win()
    
        if (res != null){
            console.log(res)
        }    
    }

        
}


