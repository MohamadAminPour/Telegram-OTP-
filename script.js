let PhoneNumber_countryCode = document.querySelector(
  ".PhoneNumber-countryCode"
);
let massage = document.querySelector(".massage");
let massage_text = document.querySelector(".massage-text");
let massage_code = document.querySelector(".massage-code");
let PhoneNumber = document.querySelector(".PhoneNumber");
let OTP_box = document.querySelector(".OTP-box");
let PhoneNumber_box__CountryCode = document.querySelector(
  ".PhoneNumber-box__CountryCode"
);
let PhoneNumber_box__PhoneNumber = document.querySelector(
  ".PhoneNumber-box__PhoneNumber"
);
let SendCodeBtn = document.querySelector(".SendCodeBtn");
let OTP_box__number = document.querySelector(".OTP-box__number");
let OTP_box__input = document.querySelector(".OTP-box__input");
let OTP_box_btn = document.querySelector(".OTP-box_btn");
let OTP_box__not_receive = document.querySelector(".OTP-box__not-receive");

PhoneNumber_countryCode.addEventListener("change", (e) => {
  console.log(e.target.value);
  PhoneNumber_box__CountryCode.value = "";
  PhoneNumber_box__CountryCode.value = e.target.value;
});

let send = false;
let limit = 0;

SendCodeBtn.addEventListener("click", () => {
  if (
    PhoneNumber_box__CountryCode.value &&
    PhoneNumber_box__PhoneNumber.value
  ) {
    send = true;
    limit++;

    let randomCode = Math.floor(Math.random() * 99999);
    massage_code.innerHTML = randomCode;

    if (send) {
      SendCodeBtn.style.backgroundColor = "var(--black2)";
      SendCodeBtn.innerHTML = '<span class="loader"></span>';
      massage.style.left = "0";
      OTP_box__input.value=''

      setTimeout(() => {
        massage.style.left = "-20rem";
        send = false;
      }, 3000);

      setTimeout(() => {
        PhoneNumber.style.opacity = "0";
        PhoneNumber.style.visibility = "hidden";
      }, 4000);

      setTimeout(() => {
        OTP_box.style.opacity = "1";
        OTP_box.style.visibility = "visible";
        OTP_box.style.top = "10rem";
        OTP_box__number.innerHTML = PhoneNumber_box__PhoneNumber.value;
      }, 5000);

      setTimeout(() => {
        PhoneNumber.style.opacity = "0";
        PhoneNumber.style.visibility = "hidden";
        PhoneNumber.style.display = "none";
      }, 6000);
    }

    if (limit > 3) {
      massage_text.innerHTML = "You have tried too much";
      setTimeout(() => {
        massage_text.innerHTML = `Your facebook code is : ${randomCode}`;
        limit = 0;
      }, 10000);
    }
  }
});

let currectPassword = 0;
function SubmitCode() {
  if (OTP_box__input.value === massage_code.innerHTML) {
    setTimeout(() => {
      OTP_box__input.style.border = "3px solid var(--green)";
      massage.style.left = "0";
      massage_text.innerHTML = `Welcome to your account!`;

      setTimeout(() => {
        massage.style.left = "-20rem";
      }, 5000);
    }, 1000);
  } else {
    OTP_box__input.style.border = "1.7px solid #e63946";
    OTP_box__input.classList.add("active");
    currectPassword++;
    setTimeout(() => {
      OTP_box__input.classList.remove("active");
      OTP_box__input.value = "";
    }, 600);

    if (currectPassword > 3) {
      OTP_box_btn.innerHTML = "You have tried too much";
      OTP_box_btn.setAttribute('disabled' ,'true')
    }
  }
}

OTP_box_btn.addEventListener("click", SubmitCode);
