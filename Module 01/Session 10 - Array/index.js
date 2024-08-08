//Số nguyên trong mảng
let array1 = [];
let array2 = [];
pushNumberToArray = () => {
  let value = document.getElementById("value-1");
  let messageInfo1 = document.querySelectorAll('.message.info')[0];
  let messageInfo2 = document.querySelectorAll('.message.info')[1];
  let messageError = document.querySelectorAll('.message.error')[0];

  if (value.value == "") {
    messageError.innerHTML = 'Mời bạn nhập giá trị';
  } else {
    array1.push(value.value);
    messageError.innerHTML = "";
    messageInfo1.innerHTML = `Mảng A gồm các giá trị: ${array1.join(", ")}`
    if (array2 == "") {
      messageError.innerHTML = 'Trong mảng không tồn tại số nguyên';
    }
    if (!isNaN(value.value)) {
      array2.push(value.value);
      messageError.innerHTML = '';
      messageInfo2.innerHTML = `Số nguyên trong mảng là: ${array2.join(", ")}`
    }
  }
}

let addBTN1 = document.getElementById("add-btn-1");
addBTN1.addEventListener("click", pushNumberToArray);

resetArray = () => {
  array1 = [];
  array2 = [];
  document.querySelectorAll('.message.info')[0].innerHTML = "";
  document.querySelectorAll('.message.info')[1].innerHTML = "";
  document.querySelectorAll('.message.error')[0].innerHTML = "";
}

let resetBTN1 = document.getElementById("reset-btn-1");
resetBTN1.addEventListener("click", resetArray);

//Tìm kiếm phần tử trong mảng
let animals = ["Whale", "Lion", "Tiger", "Elephant", "Shark", "Chicken", "Duck", "Turtle", "Bear", "Pig", "Cat", "Dog", "Eagle", "Rabbit", "Camel", "Zebra", "Fox", "Horse", "Cheetal", "Cow", "Frog", "Hamster", "Deer", "Sheep", "Mouse", "Owl", "Snake", "Monkey", "Dolphin"];

searchAnimal = () => {
  let keyword = document.getElementById("animal-keyword").value;
  let animalNames = animals.filter(item => item.includes(keyword)); //lọc các phần tử trong mảng rồi trả lại với điều kiện

  if (keyword == 0) {
    document.querySelectorAll('.message.error')[1].innerHTML = "Mời bạn nhập từ khóa";
  } else {
    document.querySelectorAll('.message.error')[1].innerHTML = "";
    document.querySelectorAll(".message.info")[2].innerHTML = `Có ${animalNames.length} kết quả tìm kiếm với từ khóa ${keyword}. ${animalNames.join(", ")}`;
  }
}

let searchBTN = document.getElementById("search-btn");
searchBTN.addEventListener("click", searchAnimal);

resetSearchAnimal = () => {
  document.querySelectorAll('.message.error')[1].innerHTML = "";
  document.querySelectorAll(".message.info")[2].innerHTML = "";
}

let resetBTN2 = document.getElementById("reset-btn-2");
resetBTN2.addEventListener("click", resetSearchAnimal);

//Đếm số lần xuất hiện của phần tử
let arrayB = [1, 2, 3, 4, 5];
const counter = {};

countNumber = () => {
  const el = document.getElementById("number-1")
  const val = Number(el.value);
  if (arrayB.includes(val)) counter[val] = (counter[val] || 0) + 1;
  console.log(counter[val]);
}

let confirmBtn1 = document.getElementById('confirm-btn-1');
confirmBtn1.addEventListener("click", countNumber);
