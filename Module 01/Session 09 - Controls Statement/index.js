//Bạn sinh năm bao nhiêu
validateYear = () =>{
        let birthday = document.getElementById("birthday");
        let message = document.querySelectorAll('.message')[0];
       
        if(isNaN(birthday.value)){
            birthday.classList.add("error");
            message.classList.add("error");
            message.innerHTML = 'Giá trị không hợp lệ';
        }else if(birthday.value>2024){
            birthday.classList.add("error");
            message.classList.add("error");
            message.innerHTML = 'Bạn đến từ tương lai?';
        }else if(birthday.value>0 && birthday.value<1900){
            birthday.classList.add("error");
            message.classList.add("error");
            message.innerHTML = 'Bạn đến từ quá khứ?';
        }else if(birthday.value==""){
            birthday.classList.add("error");
            message.classList.add("error");
            message.innerHTML = 'Xin mời bạn nhập ngày sinh';
        }else{
            window.location.href = "./success.html";
        }
    }
    
    let confirmBtn1 = document.getElementById("confirm-btn1");
    confirmBtn1.addEventListener("click", validateYear);
    
    resetForm1 = () =>{
        let birthday = document.getElementById("birthday");
        birthday.classList.remove("error");
        document.querySelectorAll('.message')[0].innerHTML = "";
    }
    
    let resetBtn1 = document.getElementById("reset-btn1");
    resetBtn1.addEventListener("click", resetForm1);
    
    // Kiểm tra số chẵn lẻ
    checkNumber = () =>{
        let number = document.getElementById("number");
        let message = document.querySelectorAll('.message')[1];
       
        if(number.value == ""){
            number.classList.add("error");
            message.classList.remove("info");
            message.classList.add("error");
            message.innerHTML = 'Xin mời bạn nhập số';
        }
        else if(number.value%2 == 0){
            message.classList.add("info");
            number.classList.remove("error");
            message.innerHTML = 'Đây là số chẵn nha';
        }else{
            message.classList.add("info");
            number.classList.remove("error");
            message.innerHTML = 'Đây là số lẻ nha bạn';
        }
    }
    
    let confirmBtn2 = document.getElementById("confirm-btn2");
    confirmBtn2.addEventListener("click", checkNumber);
    
    resetForm2 = () =>{
        let number = document.getElementById("number");
        number.classList.remove("error");
        document.querySelectorAll('.message')[1].innerHTML = "";
    }
    
    let resetBtn2 = document.getElementById("reset-btn2");
    resetBtn2.addEventListener("click", resetForm2);
    
    // Thứ mấy?
    checkDay = () =>{
        let day = document.getElementById("day");
        let message = document.querySelectorAll('.message')[2];
    
        switch(day.value){
            case "2":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Monday";
                break;
            case "3":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Tuesday";
                break;
            case "4":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Wednesday";
                break;
            case "5":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Thursday";
                break;
            case "6":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Friday";
                break;
            case "7":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Saturday";
                break;
            case "8":
                day.classList.remove("error");
                message.classList.add("info");
                message.innerHTML = "Sunday";
                break;
            case "":
                day.classList.add("error");
                message.classList.remove("info");
                message.classList.add("error");
                message.innerHTML = "Xin mời bạn nhập số";
                break;  
            default:
                day.classList.add("error");
                message.classList.remove("info");
                message.classList.add("error");
                message.innerHTML = "Không có thứ này";
        }
    }
    
    let confirmBtn3 = document.getElementById("confirm-btn3");
    confirmBtn3.addEventListener("click", checkDay);
    
    resetForm3 = () =>{
        let day = document.getElementById("day");
        day.classList.remove("error");
        document.querySelectorAll('.message')[2].innerHTML = "";
    }
    
    let resetBtn3= document.getElementById("reset-btn3");
    resetBtn3.addEventListener("click", resetForm3);
    
    // Số âm hay số dương?
    checkYinYang = () =>{
        let number = document.getElementById("number2").value;
        message = document.querySelectorAll('.message')[3];
    
        message.innerHTML = number=="" ? "Xin mời bạn nhập số" :
                                number>=0 ? "Đây là số dương nha" : "Đây là số âm nha";
           
    }
    
    let confirmBtn4 = document.getElementById("confirm-btn4");
    confirmBtn4.addEventListener("click", checkYinYang);
    
    resetForm4 = () =>{
        document.querySelectorAll('.message')[3].innerHTML = "";
    }
    
    let resetBtn4= document.getElementById("reset-btn4");
    resetBtn4.addEventListener("click", resetForm4);
    
    // Từ 1 đến số?
    displayListNumber = () => {
        let number = document.getElementById("number3");
        let message = document.querySelectorAll('.message')[4];
        let array = [];
       
        if(number.value<1){
            message.classList.remove("info");
            number.classList.add("error");
            message.classList.add("error");
            message.innerHTML = "Giá trị nhập vào phải lớn hơn 1"
        }
        else if(number.value>100){
            message.classList.remove("info");
            number.classList.add("error");
            message.classList.add("error");
            message.innerHTML = "Chỉ nên nhập tối đa đến 100 thôi, nhiều quá lag đấy";
        }
        else{
            number.classList.remove("error");
            message.classList.remove("error");
            message.classList.add("info");
            for(let i = 1 ; i<= number.value ; i++){
                array.push(i);
            }
           
            message.innerHTML = array.join(", ");
        }
    }
    
    let confirmBtn5 = document.getElementById("confirm-btn5");
    confirmBtn5.addEventListener("click", displayListNumber);
    
    resetForm5 = () => {
        let number = document.getElementById("number3");
        number.classList.remove("error");
        document.querySelectorAll('.message')[4].innerHTML = "";
    }
    
    let resetBtn5 = document.getElementById("reset-btn5");
    resetBtn5.addEventListener("click", resetForm5);
    
    // Tính giai thừa
    calculateFactorial = () =>{
        let number = document.getElementById("number4");
        let message = document.querySelectorAll('.message')[5];
    
        if(number.value == ""){
            message.classList.remove("info");
            number.classList.add("error");
            message.classList.add("error");
            message.innerHTML = "Xin mời bạn nhập số";
        }else if(number.value > 100){
            message.classList.remove("info");
            number.classList.add("error");
            message.classList.add("error");
            message.innerHTML = "Chỉ nên nhập tối đa đến 100 thôi, nhiều quá lag đấy";
        }else{
            number.classList.remove("error");
            message.classList.remove("error");
            message.classList.add("info");
            let factorial = 1;
    
            for(let i = 1; i<= number.value; i ++){
                factorial *= i; //factorial = factorial*i
            }
    
            message.innerHTML = "Giai thừa của " + number.value + " là " + factorial;
        }
    }
    
    let confirmBtn6 = document.getElementById("confirm-btn6");
    confirmBtn6.addEventListener("click", calculateFactorial);
    
    resetForm6 = () => {
        let number = document.getElementById("number4");
        number.classList.remove("error");
        document.querySelectorAll('.message')[5].innerHTML = "";
    }
    
    let resetBtn6 = document.getElementById("reset-btn6");
    resetBtn6.addEventListener("click", resetForm6);
    
    //Chia hết cho 3 và 5
    divisibleThreeAndFive = () =>{
        let number = document.getElementById("number5");
        let message = document.querySelectorAll(".message")[6];
    
        let three = number.value%3;
        let five = number.value%5
    
        if(number.value == ""){
            message.classList.remove("info");
            number.classList.add("error");
            message.classList.add("error");
            message.innerHTML = "Xin mời bạn nhập số";
        }
        else if(three == 0 && five !== 0){
            number.classList.remove("error");
            message.classList.remove("error");
            message.classList.add("info");
            message.innerHTML = "Fizz, chia hết cho 3 nha";
        } else if (five == 0 && three !== 0){
            number.classList.remove("error");
            message.classList.remove("error");
            message.classList.add("info");
            message.innerHTML = "Buzz, chia hết cho 5 nha";
        } else if(three == 0 && five == 0){
            number.classList.remove("error");
            message.classList.remove("error");
            message.classList.add("info");
            message.innerHTML = "FizzBuzz, chia hết cho 3 và 5 nha";
        }else{
            message.classList.remove("info");
            number.classList.add("error");
            message.classList.add("error");
            message.innerHTML = "Số bạn nhập không chia hết cho 3 và 5";
        }
    }
    
    let confirmBtn7 = document.getElementById("confirm-btn7");
    confirmBtn7.addEventListener("click", divisibleThreeAndFive);
    
    resetForm7 = () => {
        let number = document.getElementById("number5");
        number.classList.remove("error");
        document.querySelectorAll('.message')[6].innerHTML = "";
    }
    
    let resetBtn7 = document.getElementById("reset-btn7");
    resetBtn7.addEventListener("click", resetForm7);
    
    // Chia hết cho b trong khoảng từ 1 đến a
    divisibleB = () => {
        let numberA = document.getElementById("number-a");
        let numberB = document.getElementById("number-b");
        let messageA = document.querySelectorAll(".message")[7];
        let messageB = document.querySelectorAll(".message")[8];
    
        let array = [];
    
        for (let i = 1; i<=numberA.value; i++){
            if(i%numberB.value == 0){
                array.push(i);
            }
        }
    
        if(numberA.value == ""){
            numberB.classList.remove("error");
            messageB.innerHTML = "";
            numberA.classList.add("error");
            messageA.classList.add("error");
            messageA.innerHTML = "Xin mời bạn nhập số";
        }
        else if(numberB.value == ""){
            numberA.classList.remove("error");
            messageB.classList.remove("info");
            messageA.innerHTML = "";
            numberB.classList.add("error");
            messageB.classList.add("error");
            messageB.innerHTML = "Xin mời bạn nhập số";
        }
        else if(numberA.value%numberB.value !== 0){
            messageB.classList.remove("error");
            messageB.classList.add("info");
            messageB.innerHTML = "Không có số nào chia hết cho "+numberB.value+" trong khoảng từ 1 đến "+numberA.value;
        }else{
            numberA.classList.remove("error");
            numberB.classList.remove("error");
            messageA.innerHTML = "";
            messageB.classList.add("info");
            messageB.innerHTML = "Số chia hết cho "+numberB.value+" trong khoảng từ 1 đến "+numberA.value+" là: "+array.join(", ");
        }
    }
    
    let confirmBtn8 = document.getElementById("confirm-btn8");
    confirmBtn8.addEventListener("click", divisibleB);
    
    resetForm8 = () => {
        let numberA = document.getElementById("number-a");
        let numberB = document.getElementById("number-b");
        numberA.classList.remove("error");
        numberB.classList.remove("error");
        document.querySelectorAll('.message')[7].innerHTML = "";
        document.querySelectorAll('.message')[8].innerHTML = "";
    }
    
    let resetBtn8 = document.getElementById("reset-btn8");
    resetBtn8.addEventListener("click", resetForm8);