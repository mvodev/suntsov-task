class SignUpForm {
  constructor(formRootElem) {
    this.formRootElem = formRootElem;
    this.nameError = this.formRootElem.querySelector('.js-sign-up__error_name_error');
    this.nameInput = this.formRootElem.querySelector('.js-sign-up__input_name_input');
    this.surnameError = this.formRootElem.querySelector('.js-sign-up__error_surname_error');
    this.surnameInput = this.formRootElem.querySelector('.js-sign-up__input_surname_input');
    this.emailError = this.formRootElem.querySelector('.js-sign-up__error_email_error');
    this.emailInput = this.formRootElem.querySelector('.js-sign-up__input_email_input');
    this.passwordError = this.formRootElem.querySelector('.js-sign-up__error_password_error');
    this.passwordInput = this.formRootElem.querySelector('.js-sign-up__input_password_input')
    this.bindEvents();
  }

  bindEvents(){
    this.formRootElem.addEventListener('submit',this.handleSumbit.bind(this));
  }

  handleSumbit(event) {
    event.preventDefault();
    const formData = new FormData(this.formRootElem);
    let error = false;
    if (formData.get('name').length === 0) {
      this.nameError.textContent = 'Please input your name';
      this.nameInput.classList.add('sign-up__input_error');
      error = true;
    }
    if (formData.get('surname').length === 0) {
      this.surnameError.textContent = 'Please input your surname';
      this.surnameInput.classList.add('sign-up__input_error');
      error = true;
    }
    if (formData.get('email').length === 0) {
      this.emailError.textContent = 'Please input your email';
      this.emailInput.classList.add('sign-up__input_error');
      error = true;
    } else if (!formData.get('email').match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      this.emailError.textContent = 'Please input correct email';
      this.emailInput.classList.add('sign-up__input_error');
      error = true;
    }
    if (formData.get('password') !== formData.get('confirm password')) {
      this.passwordError.textContent = 'Your passwords don\'t match';
      this.passwordInput.classList.add('sign-up__input_error');
      error = true;
    } else if (formData.get('password').length < 8) {
      this.passwordError.textContent = 'Your password must be more 8 digits';
      this.passwordInput.classList.add('sign-up__input_error');
      error = true;
    }

    if (!error) this.formRootElem.submit();
  }
}

document.querySelectorAll('.js-sign-up').forEach(formRootElem=>{
  new SignUpForm(formRootElem);
})