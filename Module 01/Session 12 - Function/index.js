//Bài 1
let arrayEx1 = [];
findSmallestNumber = () =>{
  let value = +document.getElementById("value-ex1").value;
  let errorMessage = document.querySelectorAll('.message.error')[0];
  let infoMessage1 = document.querySelectorAll('.message.info')[0];
  let infoMessage2 = document.querySelectorAll('.message.info')[1];

  if(value==""){
    errorMessage.innerHTML = "Xin mời bạn nhập số";
  }else{
    arrayEx1.push(value);
    infoMessage1.innerHTML = `Bạn vừa nhập ${arrayEx1.length} số: ${arrayEx1.join(" ,")}`;
  }

  if(arrayEx1.length>1){
    console.log(arrayEx1);
    let smallestNumber = arrayEx1[0];
    for(let i = 0;i<arrayEx1.length;i++){
      if(smallestNumber>arrayEx1[i]){
        smallestNumber = arrayEx1[i];
      }
    }
    infoMessage2.innerHTML = `Số bé nhất trong mảng là: ${smallestNumber}`;
  }
 
}

let addEx1 = document.getElementById("add-ex1");
addEx1.addEventListener('click', findSmallestNumber);

resetFormEx1 = () =>{
  arrayEx1 = [];
  document.querySelectorAll('.message.error')[0].innerHTML = "";
  document.querySelectorAll('.message.info')[0].innerHTML = "";
  document.querySelectorAll('.message.info')[1].innerHTML = "";
}

let resetEx1 = document.getElementById("reset-ex1");
resetEx1.addEventListener("click", resetFormEx1);