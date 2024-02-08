const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})
const send = document.getElementById("send-message");
const contactForm = document.getElementById("contactForm");
send.addEventListener("click", function (){
    if ( contactForm.elements['name'].value && contactForm.elements['email'].value && contactForm.elements['message'].value
    ) {
        contactForm.submit();
        alert("問い合わせありがとうございました。")
    }
})