const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const adminPassword = "admin123";
  const userPassword = "user123";

  if(role === "admin" && password === adminPassword){
    loginSuccess(username, "Admin");
  }
  else if(role === "user" && password === userPassword){
    loginSuccess(username, "User");
  }
  else{
    message.style.color = "red";
    message.innerText = "Password Salah!";
  }
});

function loginSuccess(username, role){
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  alert("Selamat Datang " + username + " (" + role + ")");
}

function logout(){
  location.reload();
}

function showSection(sectionId){

  const sections = document.querySelectorAll(".section");

  sections.forEach(section=>{
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
}

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}