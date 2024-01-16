 window.onload=function(){
    var btnref = document.querySelectorAll(".cel")
    var messwind = document.querySelector(".wind");
    var newgame = document.getElementById("new");
    var restartebtn=document.querySelector("#restart");
    var messages = document.getElementById("ms");

    var WinningPat = [
        [0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]]
    
    var Xfirst = true;
    var count = 0;

    function disablebut(){
        btnref.forEach((element) => (element.disabled = true));
        messwind.classList.remove("hide");
    };

    function enablebutton(){
        btnref.forEach((element) =>{
            element.innerText ="";
            element.disabled = "false";
        });
        messwind.classList.add("hide");
    }

    function winFunc(letter){
        disablebut();
        if (letter == "X") {
            messages.innerHTML = "&#x1F389; <br> 'X' Wins";
        } else {
            messages.innerHTML = "&#x1F389; <br> 'O' Wins";
        }
    };

    function drawFunc(){
        disablebut();
        messages.innerHTML = "&#x1F60E; <br> It's a Draw";
        
    };
    newgame.addEventListener("click",() => {
        count = 0;
        enablebutton();
        Xfirst=true;
    })

    restartebtn.addEventListener("click", () => {
        count = 0;
        enablebutton();
        Xfirst=true
    })


    function winChecker(){
        for(let i of WinningPat){
            let [element1, element2, element3] = [
                btnref[i[0]].innerText,
                btnref[i[1]].innerText,
                btnref[i[2]].innerText,
            ];
            if(element1 != "" && element2 != "" && element3 != ""){
                if((element1 == element2) && (element2 == element3)) {
                    winFunc(element1);
                }

            }
        }
    }

    btnref.forEach((element) => {
    element.addEventListener("click",() => {
        if(Xfirst){
            Xfirst = false;
            element.innerText = "X";
            element.disabled = false;
        }
        else{
            Xfirst = true;

            element.innerText = "O";
            element.disabled = true;
        }
         
        count += 1;
        if (count == 9) {
            drawFunc();
        }
        winChecker();
    });
    
   });
 }