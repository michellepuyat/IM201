var elements = document.querySelectorAll(".directory");
    function listView() {
        Array.from(elements).forEach(item => {
            item.style.display = "flex";
            item.style.flexDirection = "column";
        });
        Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
            if (index === 0) item.classList.add("active");
            else item.classList.remove("active");
        });
    }
    function gridView() {
        Array.from(elements).forEach(item => {
            item.style.display = "grid";
            item.style.gridTemplateColumns = "repeat(3, 1fr)"
        });
        Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
            if (index === 1) item.classList.add("active");
            else item.classList.remove("active");
        });
    }

    var container = document.getElementById("btnContainer");
    var btns = container.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    }