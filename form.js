const formdangnhap = document.querySelector(".formdangnhap"),
    formdangky = document.querySelector(".formdangky"),
    dangnhap = document.querySelector(".dangnhap"),
    dangky = document.querySelector(".dangky"),
    form = document.querySelector("form"),
    submit = document.querySelector("#submit");

dangky.addEventListener("click",function(){
    formdangnhap.classList.add("hidden")
    dangky.classList.add("hidden")
    formdangky.classList.remove("hidden")
    dangnhap.classList.remove("hidden")
})

dangnhap.addEventListener("click",function(){
    formdangky.classList.add("hidden")
    dangnhap.classList.add("hidden")
    formdangnhap.classList.remove("hidden")
    dangky.classList.remove("hidden")
})

function showError(input,classError){
    input.value = input.value.trim();
    if(input.value.length < 6){
        classError.innerHTML = "Nhập ít nhất 6 kí tự !";
    }else{
        classError.innerHTML = "";
    }
}

function checkEmail(input,classError){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
    if(!regexEmail.test(input.value)){
        classError.innerHTML = "Email nhập không hợp lệ !";
    }
    else{
        classError.innerHTML = "";
    }
}

const emailDangNhap = document.querySelector("#emailDangNhap");
const loiEmailDangNhap = document.querySelector(".loiEmailDangNhap span");
emailDangNhap.addEventListener("keyup",function(){
    checkEmail(emailDangNhap,loiEmailDangNhap);
})


const passwordDangNhap = document.querySelector("#passwordDangNhap");
const loiPasswordDangNhap = document.querySelector(".loiPasswordDangNhap span");
passwordDangNhap.addEventListener("keyup",function(){
    showError(passwordDangNhap,loiPasswordDangNhap);
})


const emailDangky = document.querySelector("#emailDangky");
const loiEmailDangKy = document.querySelector(".loiEmailDangKy span");
emailDangky.addEventListener("keyup",function(){
    checkEmail(emailDangky,loiEmailDangKy);
})


const password = document.querySelector("#password");
const loiPasswordDangKy = document.querySelector(".loiPasswordDangKy span");
password.addEventListener("keyup",function(){
    showError(password,loiPasswordDangKy);
})


const confirmpassword = document.querySelector("#confirmpassword");
const loiCfPasswordDangNhap = document.querySelector(".loiCfPasswordDangNhap span");
confirmpassword.addEventListener("keyup",function(){
    showError(confirmpassword,loiCfPasswordDangNhap);
    if(confirmpassword.value != password.value){
        loiCfPasswordDangNhap.innerHTML = "Mật khẩu không trùng khớp !";
    }
    else{
        loiCfPasswordDangNhap.innerHTML = "";

    }
})

