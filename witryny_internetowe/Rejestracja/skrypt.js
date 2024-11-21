function aktywujZakladke(zkladkaId) {
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("main3").style.display = "none";

    document.getElementById(zkladkaId).style.display = "block";
}

function klient() {
    aktywujZakladke("main1");
}

function adres() {
    aktywujZakladke("main2");
}

function kontakt() {
    aktywujZakladke("main3");
}

function zatwierdz() {
}

let postepWartosc = 0;
function aktualizujPostep() {
    if (postepWartosc >= 100) {
        postepWartosc = 100;
    } else {
        postepWartosc += 12;
    }
    document.querySelector("#postep>div").style.width = postepWartosc + "%";


}

document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], input[type="tel"]').forEach(input => {
    input.addEventListener('blur', aktualizujPostep);
})