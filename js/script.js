$(document).ready(function() {
    $('.gallery_block').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $("#phone").mask("+375 (99) 999-99-99");
});

window.onload = function() {

    // valadation form 
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let text = document.querySelector("#text");
    let chbox = document.querySelector("#checkbox_1");
    let btn = document.querySelector(".button");

    // function checkingForSymbol() {
    //     let symbol = phone.value.substring(0,1);
    //     if (symbol == "+") {
    //         let res = phone.value.substr(1);
    //         return res;
    //     }
    //     return phone.value; 
    // }
    // console.log(checkingForSymbol()); 

    
    // function checkingForNumber() {
    //     phoneArr = checkingForSymbol().split("");
    //     let phoneNumber = [];
    //     for (let i = 0; i < phoneArr.length; i++) {
    //         if (!isNaN(phoneArr[i])) {
    //             phoneNumber[i] = true;
    //         }
    //         else {
    //             phoneNumber[i] = false;
    //         }
    //     }
    //     return phoneNumber;
    // }

    // console.log(checkingForNumber());

    // let otvet = true;
    // for (let i = 0; i < checkingForNumber().length; i++) {
    //     if (checkingForNumber()[i] != true) {
    //         otvet = false;
    //         break;
    //     }
    // }

    // console.log(otvet);



    btn.addEventListener('click', function(event) {
        if (name.value == "" || email.value == "" || phone.value == "" || text.value == "" || chbox != true || otvet != true) {
            event.preventDefault();

            let errorMessage = "";

            if (name.value == "") {
                errorMessage = "Enter your name";
                name.style.border = "1px solid #fc5757";
                document.querySelector("#error-name").innerHTML = errorMessage;
                document.querySelector("#error-name").classList.add("error");
            } else {
                name.style.border = "";
                document.querySelector("#error-name").innerHTML = "";
                document.querySelector("#error-name").classList.remove("error");
            }

            if (email.value == "") {
                errorMessage = "Enter your e-mail";
                email.style.border = "1px solid #fc5757";
                document.querySelector("#error-email").innerHTML = errorMessage;
                document.querySelector("#error-email").classList.add("error");
            } else {
                email.style.border = "";
                document.querySelector("#error-email").innerHTML = "";
                document.querySelector("#error-email").classList.remove("error");
            }

            if (phone.value == "") {
                errorMessage = "Enter your phone";
                phone.style.border = "1px solid #fc5757";
                document.querySelector("#error-phone").innerHTML = errorMessage;
                document.querySelector("#error-phone").classList.add("error");
            } 
            else if (otvet == false) {
                errorMessage = "Phone is not correct";
                phone.style.border = "1px solid #fc5757";
                document.querySelector("#error-phone").innerHTML = errorMessage;
                document.querySelector("#error-phone").classList.add("error");
            }
            else {
                phone.style.border = "";
                document.querySelector("#error-phone").innerHTML = "";
                document.querySelector("#error-phone").classList.remove("error");
            }
            


            if (text.value == "") {
                errorMessage = "Enter text";
                text.style.border = "1px solid #fc5757";
                document.querySelector("#error-text").innerHTML = errorMessage;
                document.querySelector("#error-text").classList.add("error");
            } else {
                text.style.border = "";
                document.querySelector("#error-text").innerHTML = "";
                document.querySelector("#error-text").classList.remove("error");
            }
            if (chbox.checked != true) {
                errorMessage = "Confirm that you are a human";
                document.querySelector("#error-checkbox").innerHTML = errorMessage;
                document.querySelector("#error-checkbox").classList.add("error");
            } else {
                document.querySelector("#error-checkbox").innerHTML = "";
                document.querySelector("#error-checkbox").classList.remove("error");
            }
        }
    });
    // validation form end

    //media menu
    let menuBtn = document.getElementById("menu-btn");
    let navMenu = document.getElementById("navigation");

    menuBtn.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle("menu-active");
        navMenu.classList.toggle("menu-active");
    });
    // media menu end

}