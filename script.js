let besar = true;

function ubahLuas() {
    const tanah = document.getElementById("tanah1");
    const luas = document.getElementById("luas");

    if (besar) {
        tanah.style.width = "120px";
        tanah.style.height = "100px";
        luas.innerText = "120";
    } else {
        tanah.style.width = "180px";
        tanah.style.height = "140px";
        luas.innerText = "200";
    }
    besar = !besar;
}
