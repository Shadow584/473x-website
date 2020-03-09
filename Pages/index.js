window.onload = function() {
    document.getElementById('CanaisParceiros').style.height = '0px';
    setTimeout(() => {
        document.getElementById("sidemenu").style.width = "0";    
    }, 1250);


    var menu = document.getElementById("sidemenu");
    var menuCanais = document.getElementById("CanaisParceiros");
    var canaisParceiros = document.querySelectorAll(".canaisParceiros a");

    for (var item of canaisParceiros) {
        item.addEventListener("click", function(evt) {
            menu.style.width = "0";
            menuCanais.style.height = "0";
        }, false);
    }


    var outsideMenu = document.querySelector(".main .content") || document.querySelector(".contentInfo");

    outsideMenu.addEventListener("click", (evt) => {
        if (menu.style.width != "0") {
            menu.style.width = "0";
        }
    });

}

function showSideMenu() {
    if (document.getElementById("sidemenu").style.width != "250px") {
        document.getElementById("sidemenu").style.width = "250px";
    } else if (document.getElementById("sidemenu").style.width == "250px"){
        document.getElementById("sidemenu").style.width = "0";
    }
}

function abrirCanaisParceiros() {
    if (document.getElementById('CanaisParceiros').style.height == "0px") {
        var height = document.getElementById('CanaisParceiros').children.length * 40 + "px";
        document.getElementById('CanaisParceiros').style.height = height;
    } else {
        document.getElementById('CanaisParceiros').style.height = '0px';
    }
}

function mostrarFeedback() {
    var iframeFeedback = document.getElementById("iframeContainer");

    iframeFeedback.style.display = "block";
    iframeFeedback.style.position = "fixed";
    iframeFeedback.style.zIndex = 9999;
    margin = "auto";

    var closeFrameButton = document.getElementById("fecharFrame");

    closeFrameButton.addEventListener("click", (evt) => {
        fecharFeedback();
    });
}

function fecharFeedback() {
    var iframeFeedback = document.getElementById("iframeContainer");

    iframeFeedback.style.display = "none";

}