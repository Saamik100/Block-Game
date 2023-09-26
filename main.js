var charactered = document.getElementById("character");
var enemyggg = document.getElementById("enemy");
var enemyedggg = document.getElementById("enemyed");
var test=0
var started=0
var score=0
var enemys = 0

function load(){
if(Math.floor(Math.random() * 2) + 1==1){
     enemys=2
    document.getElementById("enemysh").style.display="none";
    document.getElementById("enemysh").style.display="none";
 
}else{
    enemys=1

    document.getElementById("enemyedsh").style.left="1100px"
    document.getElementById("enemyedsh").style.width="1px"
    document.getElementById("enemyedsh").style.height="1px"
    document.getElementById("enemyedd").style.width="1px"
    document.getElementById("enemyedd").style.height="1px"
   
}
}
document.addEventListener("click",jump);
function jump(){
    if(started==1){
    if(test==0){
        test=1
    document.getElementById("character").classList.add("jump")
    setTimeout(removeJump,1500);
    setTimeout(done,1500) 
}
}};
function removeJump(){
    document.getElementById("character").classList.remove("jump")
}
function done(){
test=0
}

document.addEventListener("click",hello);
function hello (){
    if(started==0){
        load();
        enemy()
        
started++
    start()
    }
}
function start(){
setTimeout(scored, 100);
}
function scored(){
    score++
    start()
    document.getElementById("Score").innerHTML="Score = "+score
}
function Switch (location){
    var change=location
    console.log(Location)
    window.location.href = change
    load();
    }

    function enemy(){
        if(enemys==1){
            document.getElementById("enemysh").style.display="block";
document.getElementById("enemysh").classList.add("enemies");
setTimeout(dead,2000) ;
        
    }
    if(enemys==2){
        document.getElementById("enemyedsh").style.display="block";
        document.getElementById("enemyedsh").style.width="170px"
        document.getElementById("enemyedsh").style.height="30px"
        document.getElementById("enemyedd").style.width="170px"
        document.getElementById("enemyedd").style.height="30px"
        document.getElementById("enemyedsh").style.marginTop="550px"
        document.getElementById("enemyedsh").classList.add("bozos")
        setTimeout(dead,1000) ;
    }
}
    function dead(){
        document.getElementById("enemysh").classList.remove("enemies");
        document.getElementById("enemyedsh").classList.remove("bozos");
        load();
        setTimeout(enemy, 100)
    }

    function bot(){
         charactered = document.getElementById("character");
         enemyggg = document.getElementById("enemysh");
         enemyedggg = document.getElementById("enemyedsh");
         enemyLeft = parseInt(window.getComputedStyle(enemyggg).getPropertyValue("left"));
         characterTop = parseInt(window.getComputedStyle(charactered).getPropertyValue("top"));
         enemyedLeft = parseInt(window.getComputedStyle(enemyedggg).getPropertyValue("left"));
        if(enemys==1 && characterTop<1 && -40<characterTop && enemyLeft<105 && -77<enemyLeft){
            document.getElementById("enemysh").style.display="none"
            document.getElementById("enemysh").style.animation="none"
            alert ("You Lose. " + "Your score was " + score )
            Switch(location='index.html')
        }
        if(enemys==2 && characterTop<-2 && -128<characterTop && enemyedLeft<97 && -139<enemyedLeft){
            document.getElementById("enemysh").style.display="none"
            document.getElementById("enemysh").style.animation="none"
            alert ("You Lose. " + "Your score was " + score )
            Switch(location='index.html')
        }
    
    }
setInterval(bot, 10)