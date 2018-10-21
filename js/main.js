var clickme = document.querySelector(".clickme"),
    whalefact = document.querySelector("#whale-info");

    function showitem(){
        whalefact.style.opacity="1";
        clickme.style.opacity="0";
    }

    clickme.addEventListener('click', showitem);