let inputName = document.getElementById("name");
let inputAuthor = document.getElementById("author");
let inputYear = document.getElementById("year");
let addBTN = document.getElementById("addBook");
let books = [];
let table = document.getElementById("table");
let inputs = document.querySelectorAll("input");
function addBook() {
  if (!inputName.value || !inputAuthor.value || !inputYear.value) {
    // alert('pleas enter cract information');
    let modal = document.querySelector(".modal");
    modal.style.display = "flex";
    setTimeout(function () {
      modal.style.display = "none";
    }, 2000);
  } else {
    let object = {
      name: inputName.value,
      author: inputAuthor.value,
      year: inputYear.value,
    };
    table.innerHTML = "";
    books.push(object);
    console.log(books);
    localStorage.setItem("book", JSON.stringify(books));
    console.log(books);
    creatBook();
    inputName.value = "";
    inputAuthor.value = "";
    inputYear.value = "";
  }
}

function creatBook() {
  books.forEach(function (e) {
    let TRelement = document.createElement("tr");
    let TdTitleElement = document.createElement("td");
    TdTitleElement.innerHTML = e.name;
    let TdauthorElement = document.createElement("td");
    TdauthorElement.innerHTML = e.author;

    let TdYearElement = document.createElement("td");
    TdYearElement.innerHTML = e.year;

    TRelement.append(TdTitleElement);
    TRelement.append(TdauthorElement);
    TRelement.append(TdYearElement);

    table.append(TRelement);
  });
}

function loadHandler() {
  let localStorageValue = localStorage.getItem("book");
  localStorageValue = JSON.parse(localStorageValue);
  console.log(localStorageValue);
  if (localStorageValue) {
    books = localStorageValue;
  } else {
    books = [];
  }

  creatBook();
}

window.addEventListener("load", loadHandler);

addBTN.addEventListener("click", addBook);
