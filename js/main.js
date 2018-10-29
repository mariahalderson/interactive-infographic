var clickme = document.querySelector(".clickme"),
    whalefact = document.querySelector("#whale-info"),
    strawsLeft = document.querySelector("#straw-left"),
    strawsRight = document.querySelector("#straw-right"),
    strawcounter = document.querySelector("#straw-counter"),
    strawnum = 0;

    function strawcount(){
        console.log("counted");
        // strawnum ++;
        // if(strawnum >= 57){
        //     counter = null;
        // }else{
        //     setTimeout(function(){
        //         addcount();
        //     }, 200);
        // }
    }


    function showitem(){
        whalefact.style.opacity="1";
        var whaleLink = document.querySelector("#whale-img p");
        whaleLink.style.opacity="0";
        //clickme.style.opacity="0";
       // strawsin();
        
        strawcount();
        
    }

    //function strawsin(){
        //strawLeft.style.width="100%";
        //strawRight.style.width="100%";
        //strawsLeft.style.transform = "translateX(0px)";
        //strawsRight.style.transform = "translateX(0px)";
    //}

    function addcount(){
        strawcounter.innerHTML = strawnum + " million";
    }

    


    clickme.addEventListener('click', showitem);
    