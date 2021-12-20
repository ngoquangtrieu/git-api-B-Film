// Hieuungloading
setTimeout(function(){
    const loading = document.querySelector(".loading");
    loading.classList.add("none");
},2000)
// End Hieuungloading


// Hieuungsearch
const input = document.querySelector("input")
const nuthuyen = document.querySelector(".nuthuyen")
const nutsac = document.querySelector(".nutsac")

input.addEventListener("focus",function(){
    nuthuyen.classList.add("nuthuyendichuyen")
    nutsac.classList.add("nutsacdichuyen")
})

input.addEventListener("focusout",function(){
    nuthuyen.classList.remove("nuthuyendichuyen")
    nutsac.classList.remove("nutsacdichuyen")
    input.value = ""
})

// End Hieuungsearch

// Hieuung menu
const iconmenu = document.querySelector(".iconmenu i"),
    menu = document.querySelector(".menu"),
    thanhmenu = document.querySelector(".thanhmenu"),
    menunenmo = document.querySelector(".menu-nenmo"),
    phimtinhcam = document.querySelector(".phimtinhcam"),
    phimhanhdong = document.querySelector(".phimhanhdong"),
    tvshow = document.querySelector(".tvshow"),
    phimhoathinh = document.querySelector(".phimhoathinh"),
    phimcotrang = document.querySelector(".phimcotrang");

iconmenu.addEventListener("click",function(){
    menu.classList.add("hienra");
    thanhmenu.classList.add("keosang");
})

menunenmo.addEventListener("click",function(){
    menu.classList.remove("hienra");
    thanhmenu.classList.remove("keosang");
})

// End Hieuung menu

// Hieuung Navbar
const theloai = document.querySelector(".theloai")
const phim1 = document.querySelector(".phim1")
const phim2 = document.querySelector(".phim2")
const phim3 = document.querySelector(".phim3")
const phim4 = document.querySelector(".phim4")
const phimbo = document.querySelector(".phimbo")

theloai.addEventListener("click",function(){
    phimbo.classList.add("phimbocd")
    phim2.classList.add("phim2cd")
    phim3.classList.add("phim3cd")
    phim1.classList.add("phim1cd")
    phim4.classList.add("phim4cd")
    setTimeout(function(){
        phim1.classList.add("transs")
        phim2.classList.add("transs")
        phim3.classList.add("transs")
        phim4.classList.add("transs")
        theloai.classList.add("transs")
        phimbo.classList.add("transs")
    },1500)
})

// End Hieuung Navbar

// Content
fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2CQrkSmpdayjUmuQDm2BmuZtaSBm0ol5PoNNEvzxo5UI8AwacyymiJ3B8")
.then(responsive => responsive.json())
.then(datas => {

    // Hien phim luc moi vao
    console.log(datas)
    const ul = document.querySelector(".content ul");
    const navbar = document.querySelector(".navbar");
    const h2 = document.querySelector(".content h2");
    const icontrangchu = document.querySelector(".icontrangchu");
    var phimmoi = datas.phim.phimbo.map(function(element){
        return `
                <li class="content-movie-iteam">
                    <a href="${element.url}">
                        <div class="movie-img">
                            <img src="${element.imageUrl}" alt="">
                        </div>
                        <div class="movie-infor">
                            <div class="movie-name">
                                <p class="movie-name-text">${element.title}</p>
                            </div>
                            <div class="movie-category">
                                <p class="movie-category-text">${element.category}</p>
                            </div>
                        </div>
                    </a>
                </li>`
    })
    for (let i = 0; i < 60; i++) {
        ul.innerHTML += phimmoi[i]
    }
    //End Hien phim luc moi vao 

    
    //Code chung khi click thể loại phim
    function clickNhungTheLoaiPhim(classPhim,nameDanhMuc,mangPhim){
        classPhim.addEventListener("click",function(){
            ul.innerHTML = "";
            icontrangchu.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
            icontrangchu.href = "#";
            const danhmuc = document.querySelector(".content h2");
            danhmuc.innerText = nameDanhMuc;
            mangPhim = [""];
            mangPhim = datas.phim.phimbo.map(function(elementPhim){
                if(elementPhim.category == nameDanhMuc){
                    return`
                    <li class="content-movie-iteam">
                    <a href="${elementPhim.url}">
                            <div class="movie-img">
                                <img src="${elementPhim.imageUrl}" alt="">
                                </div>
                            <div class="movie-infor">
                                <div class="movie-name">
                                    <p class="movie-name-text">${elementPhim.title}</p>
                                </div>
                                <div class="movie-category">
                                <p class="movie-category-text">${elementPhim.category}</p>
                                </div>
                            </div>
                            </a>
                            </li>`
                }
            })
            let sophimhien = 0;
            for (let i = 0; i < mangPhim.length; i++) {
                if(sophimhien < 60){
                    if(mangPhim[i] != undefined ){
                        ul.innerHTML += mangPhim[i]
                        sophimhien++;
                    }
                }
                else{
                    break;
                }
            }
            clickTheA();
            clickTungPhim();
        })
    }
    //End Code chung khi click thể loại phim

    // Chon tung loại phim
    let phimtinhcams;
    clickNhungTheLoaiPhim(phim1,"Phim tình cảm",phimtinhcams);
    let phimhanhdongs;
    clickNhungTheLoaiPhim(phim2,"Phim hành động",phimhanhdongs);
    let phimhoathinhs;
    clickNhungTheLoaiPhim(phim3,"Phim hoạt hình",phimhoathinhs);
    let phimcotrangs;
    clickNhungTheLoaiPhim(phim4,"Phim cổ trang",phimcotrangs);
    let phimtvshows;
    clickNhungTheLoaiPhim(phimbo,"TV SHOW",phimtvshows);

    clickNhungTheLoaiPhim(phimtinhcam,"Phim tình cảm",phimtinhcams);
    clickNhungTheLoaiPhim(phimhanhdong,"Phim hành động",phimhanhdongs);
    clickNhungTheLoaiPhim(phimhoathinh,"Phim hoạt hình",phimhoathinhs);
    clickNhungTheLoaiPhim(phimcotrang,"Phim cổ trang",phimcotrangs);
    clickNhungTheLoaiPhim(tvshow,"TV SHOW",phimtvshows);
    // End chon tung loai phim

    // Chuc Nang Search
    const nutSearch = document.querySelector(".search-box input");
    nutSearch.addEventListener("keyup",function(e){
        h2.classList.remove("none");
        icontrangchu.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        icontrangchu.href = "#";
        navbar.classList.remove("none");
        const danhmuc = document.querySelector(".content h2");
        danhmuc.innerText = "Phim bộ mới";
        ul.innerHTML = "";
        window.scrollTo(0,0);
        if(nutSearch.value != 0){
            var phimsearch = [""];
            phimsearch = datas.phim.phimbo.map(function(data){
                if(data.title.toLowerCase().indexOf(nutSearch.value.toLowerCase()) != -1){
                    return`
                        <li class="content-movie-iteam">
                            <a href="${data.url}">
                                <div class="movie-img">
                                    <img src="${data.imageUrl}" alt="">
                                </div>
                                <div class="movie-infor">
                                    <div class="movie-name">
                                        <p class="movie-name-text">${data.title}</p>
                                    </div>
                                    <div class="movie-category">
                                        <p class="movie-category-text">${data.category}</p>
                                    </div>
                                </div>
                            </a>
                        </li>`
                }
            })
            let sophimhien = 0;
            for (let i = 0; i < phimsearch.length; i++) {
                if(sophimhien < 60){
                    if(phimsearch[i] != undefined ){
                        ul.innerHTML += phimsearch[i]
                        sophimhien++;
                    }
                }
                else{
                    break;
                }
            }
        }
        else{
            for (let i = 0; i < 60; i++) {
                ul.innerHTML += phimmoi[i]
            }
        }
        clickTungPhim();
        clickTheA();
    })
    // End Chuc Nang Search  
    
    
    

    // Click vao tung phim
    function clickTungPhim(){
        const listphim = document.querySelectorAll(".content ul li");
        listphim.forEach(function(tungphim){
            tungphim.addEventListener("click",function(){
                clickTheA();
                icontrangchu.innerHTML = "<i class=\"fas fa-home\"></i>";
                icontrangchu.href = "./index.html";
                h2.classList.add("none");
                navbar.classList.add("none");
                window.scrollTo(0,0);
                ul.innerHTML = `<div class="background">
                                    <div class="img-tungphim">
                                        <img src="${tungphim.querySelector(".movie-img img").src}" alt="">
                                    </div>
                                    <div class="infor-tungphim">
                                        <div class="name-tungphim">
                                            <span>${tungphim.querySelector(".movie-name p").innerHTML}</span>
                                        </div>
                                        <a href="${tungphim.querySelector("a").href}"><span>Xem phim</span></a>
                                        <div class="theloai-tungphim">
                                            <span>${tungphim.querySelector(".movie-category p").innerHTML}</span>
                                        </div>
                                        <p>Quốc gia : America <br>Xuất bản : 20/12/2021 <br>Đạo diễn : Ngô Quang Triều <br>Diễn viên : Trấn Thành , Sơn Tùng M-TP , Binz , Karick , Wowy , L'K... </p>
                                    </div>
                                </div>`;
            })
        })
    }
    // End Click vao tung phim
    function clickTheA(){
        const theA = document.querySelectorAll(".content-movie-iteam a");
        theA.forEach(function(a){
            a.addEventListener("click",function(e){
                e.preventDefault();
            })
        })
    }
    clickTheA();
    clickTungPhim();
});
//End Content