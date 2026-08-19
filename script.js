// ===============================
// SLIDER BANNER OTOMATIS
// ===============================

const hero = document.querySelector(".hero");

const gambar = [
    "images/banner.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg"
];

let index = 0;

function gantiBanner() {

    index++;

    if (index >= gambar.length) {
        index = 0;
    }

    hero.style.background =
        `url('${gambar[index]}') center center / cover no-repeat`;

}

setInterval(gantiBanner, 5000);

// ===============================
// ANIMASI SCROLL
// ===============================

const objek = document.querySelectorAll(
".box, .card, .tentang"
);

function tampilkanObjek(){

    objek.forEach(item=>{

        const posisi=item.getBoundingClientRect().top;

        const tinggi=window.innerHeight;

        if(posisi < tinggi-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

objek.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(50px)";
    item.style.transition="0.8s";

});

window.addEventListener("scroll", tampilkanObjek);

tampilkanObjek();

// ===============================
// MENU AKTIF
// ===============================

const menu = document.querySelectorAll("nav ul li a");

menu.forEach(link=>{

    link.addEventListener("click",function(){

        menu.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ===============================
// TOMBOL KEMBALI KE ATAS
// ===============================

const tombol = document.createElement("button");

tombol.innerHTML="⬆";

document.body.appendChild(tombol);

tombol.style.position="fixed";
tombol.style.right="20px";
tombol.style.bottom="20px";
tombol.style.width="50px";
tombol.style.height="50px";
tombol.style.border="none";
tombol.style.borderRadius="50%";
tombol.style.background="#1565c0";
tombol.style.color="white";
tombol.style.fontSize="22px";
tombol.style.cursor="pointer";
tombol.style.display="none";
tombol.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        tombol.style.display="block";

    }else{

        tombol.style.display="none";

    }

});

tombol.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});