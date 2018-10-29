var buttons = document.querySelectorAll(".button"),
    textArea = document.querySelector("#infoText");

    function getText(e){
        console.log("clicked" + e.target.id);

        fetch('info.json')
        .then((res) => res.json())
        .then((data) => {
            
            var currentInfo = e.target.id;
            console.log(data[currentInfo].info);
            textArea.innerHTML = "<p>" + data[currentInfo].info + "</p>";
        })
    }

    buttons.forEach(button=>button.addEventListener('click', getText));