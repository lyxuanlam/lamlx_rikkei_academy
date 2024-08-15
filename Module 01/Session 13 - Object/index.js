//Bài 1

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
  if (!users.length) return
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
      <td class="remove-column">
        <a class="remove-btn" onclick="removeUser(${i})">
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
        </a>
      </td>
    </tr>`;
  }

  let tableHtml = `
    <table>
      <tr>
        <th>STT</th>
        <th>Họ tên</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Xóa</th>
      </tr>
      ${trHTml}
    </table>`;

  table.innerHTML = tableHtml;
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

removeUser = (key) => {
  users.splice(key, 1);
  console.log(users);
  getUser();
}
