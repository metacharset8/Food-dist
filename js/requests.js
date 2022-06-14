// Отправка данных формы на server.php
// const form1 = document.forms[0];
// const form2 = document.forms[1];

// function retrieveFormValue(){

//   const formData = new FormData(form1, form2);
//   const values = Object.fromEntries(formData.entries())

//   console.log(values);
// }

// form1.addEventListener("submit", retrieveFormValue)
// form2.addEventListener("submit", retrieveFormValue)


const values = {
    name: "Yura",
    age: 18,
};
const request = "php/server.php";
// const request = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();

xhr.open("POST", request);
xhr.responseType = "json";
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => {
  console.log(xhr.response);
};

xhr.send(JSON.stringify(values));
