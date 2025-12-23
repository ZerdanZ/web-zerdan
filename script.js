function hai() {
    alert("Halo Semuanya! Selamat datang di website Zerdan 🎉")
}

function info() {
     alert("Ini adalah website Zerdan")
}

function salam() {
    alert("Assalamualaikum!!")
}

// Ambil mode yang tersimpan saat halaman dibuka
window.onload = function () {
    let mode = localStorage.getItem("mode");

    if (mode === "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.add("dark");
    }
};

// Tombol ganti mode
function toggleMode() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("mode", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("mode", "dark");
    }
}