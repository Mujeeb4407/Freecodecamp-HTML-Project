//let userName = "Bro Code";
//userName = userName.slice(0, 3);
//console.log(userName);

let userName;

document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value;
    document.getElementById("sentence").textContent = `Hello ${userName}`
};