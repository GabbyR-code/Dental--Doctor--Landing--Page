
// Language toggle - changes website text between english and spanish
 const languageBtn = document.getElementById("languageBtn");
 const htmlTag = document.getElementById("htmlTag");
 let currentLanguage = "en"
languageBtn.addEventListener("click",function() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";

    htmlTag.setAttribute ("lang", currentLanguage);

    languageBtn.textContent = currentLanguage === "en" ? "ES": "EN";

    document.querySelectorAll("[data-en]").forEach(function(element) {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    })
});
 
//Navigation Bar Effect -added scrolling style to navbar, enhance UI/UX 

const navbar = document.querySelector(".custom-navbar");
window.addEventListener("scroll", function(){
    if(window.scrollY >50){
        navbar.classList.add("navbar-scroll");
    } 
    else{
        navbar.classList.remove("navbar-scroll");
    }
});

// FAQ, accordion open and closes answer, enhance interactivity

const itemFaq = document = document.querySelectorAll(".faq-item");
itemFaq.forEach(function(item){
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function (){
        item.classList.toggle("active");
    });
});

//  Treatment option selection - display selected treatment option, enhance functional scope

const planButtons = document.querySelectorAll(".bth-plan");
const selectedPlan = document.getElementById("selectedPlan");
planButtons.forEach(function(button){
    button.addEventListener("click", function(){
        const planName = button.getAttribute("data-plan");

        if (currentLanguage === "en"){
            selectedPlan.textContent = `Selected option: ${planName}`;
        }
        else{
                selectedPlan.textContent = `Opción seleccionada: ${planName}`;
        }
        
    });
});

//File Upload in message
const uploadFile = document.getElementById("uploadFile");
const nameFile = document/getElementById("nameFile");

uploadFile.addEventListener("change", function(){
    if (uploadFile.files.length > 0) {
        nameFile.textContent = "Selected file: " + uploadFile.files[0].name;
        nameFile.classList.add("show-message");
    }
});

// Message form - display confirmation after basic form submit - formspree, employ as a demo response

const form = document.querySelector(".contact-form");
const formMessage = document.getElementById("formMessage");
form.addEventListener("submit", function(){
    formMessage.textContent = currentLanguage === "en"
    ? "Thank you, your evaluation request has been sent."
    : "Gracias, tu solicitud de evaluaciòn ha sido enviada. ";
    formMessage.classList.add("show-message");
});


