const users = [];
let errorMessage = document.querySelectorAll('.message.error')[0];

function User(fullName, email, phoneNumber) {
  this.fullName = fullName;
  this.email = email;
  this.phoneNumber = phoneNumber;
}

addUser = () => {
  let fullName = document.getElementById("full-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;

  if (fullName == "") {
    errorMessage.innerHTML = "Mời bạn nhập tên";
  } else if (email == "") {
    errorMessage.innerHTML = "Mời bạn nhập email";
  } else if (isEmailExists()) {
    errorMessage.innerHTML = "Đã tồn tại email trong hệ thống";
  } else {
    if (phoneNumber == "") {
      phoneNumber = "-";
    }

    errorMessage.innerHTML = "";
    let userInfo = new User(fullName, email, phoneNumber);
    users.push(userInfo);
    getUser();
  }
}

let addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addUser);

resetForm = () => {
  errorMessage.innerHTML = "";
}

let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", resetForm)

getUser = () => {
  let emptyState = document.querySelectorAll(".empty-state")[0];
  emptyState.classList.add("inactive");
  let table = document.getElementById("users-table");
  let trHTml = "";

  for (let i = 0; i < users.length; i++) {
    trHTml += `
    <tr>
      <td>${i + 1}</td>
      <td>${users[i].fullName}</td>
      <td>${users[i].email}</td>
      <td>${users[i].phoneNumber}</td>
      <td class="edit-column">
        <a class="icon-btn" onclick="openEditModal(${i})">
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"/><path fill="currentColor" d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2z"/></svg>
        </a>
      </td>
      <td class="remove-column">
        <a class="icon-btn" onclick="removeUser(${i})">
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
        </a>
      </td>
    </tr>`;
  }

  let tableHtml = `
    <table>
      <tr id="table-title">
        <th>STT</th>
        <th>Họ tên</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th class="edit-column">Sửa</th>
        <th class="remove-column">Xóa</th>
      </tr>
      ${trHTml}
    </table>`;

  table.innerHTML = tableHtml;

  if (!users.length) {
    document.getElementById("table-title").style.display = "none";
    emptyState.classList.remove("inactive");
  }
}

getUser();

isEmailExists = () => {
  let email = document.getElementById("email").value;
  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email) {
      return true;
    }
  }
  return false
}

removeUser = (index) => {
  users.splice(index, 1);
  getUser();
}

//Sửa thông tin modal
let modal = document.querySelector(".modal");

openEditModal = (index) => {
  document.getElementById("full-name-e").value = users[index].fullName;
  document.getElementById("email-e").value = users[index].email;
  document.getElementById("phone-number-e").value = users[index].phoneNumber;

  let editButton = document.getElementById("edit-btn");
  editButton.setAttribute("onclick",`updateUser(${index})`);
  editButton.setAttribute("disabled", "");

  let fullName = document.getElementById("full-name-e");
  let phoneNumber = document.getElementById("phone-number-e");
  fullName.setAttribute("onkeyup",`enabaleEditButton(${index})`);
  phoneNumber.setAttribute("onkeyup",`enabaleEditButton(${index})`);

  modal.classList.add("active");
}

updateUser = (index) => {
  let fullName = document.getElementById("full-name-e").value;
  let phoneNumber = document.getElementById("phone-number-e").value;

  users[index].fullName = fullName;
  if(!phoneNumber){
    users[index].phoneNumber = "-";
  }else{
    users[index].phoneNumber = phoneNumber;
  }
 
  closeModal();
  getUser();

  let toast = document.querySelector(".toast");
  toast.classList.add("active");
}

closeModal = () => {
  modal.classList.remove("active");
}

document.querySelector(".close-icon-btn").addEventListener("click", closeModal);
document.getElementById("close-btn").addEventListener("click", closeModal);

closeToast = () =>{
  let toast = document.querySelector(".toast");
  toast.classList.remove("active");
}

document.querySelector(".toast__close-btn").addEventListener("click", closeToast);

enabaleEditButton = (index) => {
  let fullName = document.getElementById("full-name-e").value;
  let phoneNumber = document.getElementById("phone-number-e").value;
  let editButton = document.getElementById("edit-btn");

  if(fullName==users[index].fullName){
    editButton.setAttribute("disabled","");
  }else{
    editButton.removeAttribute("disabled");
  }
}
