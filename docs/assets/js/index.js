(()=>{var _=200,n={status:_};var h=500,u={status:h};var p=async()=>Math.floor(Math.random()*2)===0?n:u;var m=class{constructor(r){this.formRootElem=r,this.nameError=this.formRootElem.querySelector(".js-sign-up__error_name_error"),this.nameInput=this.formRootElem.querySelector(".js-sign-up__input_name_input"),this.surnameError=this.formRootElem.querySelector(".js-sign-up__error_surname_error"),this.surnameInput=this.formRootElem.querySelector(".js-sign-up__input_surname_input"),this.emailError=this.formRootElem.querySelector(".js-sign-up__error_email_error"),this.emailInput=this.formRootElem.querySelector(".js-sign-up__input_email_input"),this.passwordError=this.formRootElem.querySelector(".js-sign-up__error_password_error"),this.passwordInput=this.formRootElem.querySelector(".js-sign-up__input_password_input"),this.submitButton=this.formRootElem.querySelector(".js-sign-up__submit"),this.confirmPasswordInput=this.formRootElem.querySelector(".js-sign-up__input_extra-password_input"),this.bindEvents()}bindEvents(){this.formRootElem.addEventListener("submit",this.handleSumbit.bind(this))}async handleSumbit(r){r.preventDefault(),this.submitButton.classList.remove("sign-in__submit_error");let t=new FormData(this.formRootElem),s=!1;if(t.get("name").length===0?(this.nameError.textContent="Please input your name",this.nameInput.classList.add("sign-up__input_error"),s=!0):(this.nameError.textContent="",this.nameInput.classList.remove("sign-up__input_error")),t.get("surname").length===0?(this.surnameError.textContent="Please input your surname",this.surnameInput.classList.add("sign-up__input_error"),s=!0):(this.surnameInput.classList.remove("sign-up__input_error"),this.surnameError.textContent=""),t.get("email").length===0?(this.emailError.textContent="Please input your email",this.emailInput.classList.add("sign-up__input_error"),this.emailInput.classList.remove("sign-up__input_success"),s=!0):t.get("email").match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?(this.emailError.textContent="",this.emailInput.classList.remove("sign-up__input_error"),this.emailInput.classList.add("sign-up__input_success")):(this.emailError.textContent="Please input correct email",this.emailInput.classList.add("sign-up__input_error"),this.emailInput.classList.remove("sign-up__input_success"),s=!0),t.get("password")!==t.get("confirm password")?(this.passwordError.textContent="Your passwords don't match",this.passwordInput.classList.add("sign-up__input_error"),s=!0):t.get("password").length<8?(this.passwordError.textContent="Your password must be more 8 digits",this.passwordInput.classList.add("sign-up__input_error"),s=!0):t.get("password").match("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")?(this.passwordError.textContent="",this.passwordInput.classList.remove("sign-up__input_error")):(this.passwordError.textContent="Your password must contain at least 1 uppercase alphabetical character,1 numeric character,1 lowercase alphabetical character,at least one special character",this.passwordInput.classList.add("sign-up__input_error"),s=!0),s)this.submitButton.classList.add("sign-in__submit_error");else{let l=await p(),{status:i}=l;i===200?(this.clearForm(),alert("Form successfully submitted")):i===500&&alert("Internal server error!")}}clearForm(){this.formRootElem.reset()}};document.querySelectorAll(".js-sign-up").forEach(e=>{new m(e)});})();
