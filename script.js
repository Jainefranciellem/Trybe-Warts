const button = document.getElementById('button');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const inputTextarea = document.querySelector('#textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const formEmail = document.getElementById('input-email');
const formName = document.getElementById('input-name');
const formLastName = document.getElementById('input-lastname');
const formHouse = document.getElementById('house');
const formCheckbox = document.getElementsByClassName('subject');
const formFamily = document.getElementsByClassName('family');
const formRadio = document.getElementsByClassName('radio-input');

submitButton.disabled = true;
submitButton.style.opacity = '80%';

function buttonAlert() {
  button.addEventListener('click', () => {
    if (inputEmail.value === 'tryber@teste.com'
    && inputSenha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
}

function submit() {
  checkbox.addEventListener('click', () => {
    if (submitButton.disabled === true) {
      submitButton.disabled = false;
      submitButton.style.opacity = '100%';
      submitButton.style.backgroundColor = 'rgba(14, 13, 14, 50%)';
    } else {
      submitButton.disabled = true;
      submitButton.style.opacity = '60%';
    }
  });
}

function counterTextarea() {
  inputTextarea.addEventListener('input', () => {
    const number = 500;
    const textArea = inputTextarea.value.length;
    const sub = number - textArea;
    counter.textContent = sub;
  });
}

function findAbility() {
  const ability = [];
  const subject = document.createElement('p');
  formData.appendChild(subject);
  for (let index = 0; index < formCheckbox.length; index += 1) {
    if (formCheckbox[index].checked === true) {
      ability.push(formCheckbox[index].value);
    }
  }
  subject.innerText = `Matérias: ${ability.join(', ')}`;
  return subject;
}

function form1() {
  const name = document.createElement('p');
  const email = document.createElement('p');
  const house = document.createElement('p');
  formData.appendChild(name);
  formData.appendChild(email);
  formData.appendChild(house);
  name.innerText = `Nome: ${formName.value} ${formLastName.value}`;
  email.innerText = `Email: ${formEmail.value}`;
  house.innerText = `Casa: ${formHouse.value}`;
}

function formfamily() {
  const family = document.createElement('p');
  formData.appendChild(family);
  let familyChecked = '';
  for (let index = 0; index < formFamily.length; index += 1) {
    if (formFamily[index].checked === true) {
      familyChecked = formFamily[index].value;
    }
  }
  family.innerText = `Família: ${familyChecked}`;
  return family;
}

function formrate() {
  const rate = document.createElement('p');
  formData.appendChild(rate);
  let formRate = '';
  for (let index = 0; index < formRadio.length; index += 1) {
    if (formRadio[index].checked === true) {
      formRate = formRadio[index].value;
    }
  }
  rate.innerText = `Avaliação: ${formRate}`;
  return rate;
}

function textarea() {
  const comment = document.createElement('p');
  formData.appendChild(comment);
  comment.innerText = `Observações: ${inputTextarea.value}`;
  return comment;
}

function newForm() {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.style.display = 'none';
    form1();
    findAbility();
    formfamily();
    formrate();
    textarea();
  });
}

buttonAlert();
submit();
counterTextarea();
newForm();
