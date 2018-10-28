var buttons = document.querySelectorAll(".button"),
    textArea = document.querySelector("#infoText");

    function getText(){
        console.log("clicked");

        fetch('info.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

    getText();