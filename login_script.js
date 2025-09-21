// Tab buttons
const studentTab = document.getElementById("studentTab");
const counsellorTab = document.getElementById("counsellorTab");

// Forms
const studentForm = document.getElementById("studentForm");
const counsellorForm = document.getElementById("counsellorForm");

// Switch to Student Login
studentTab.addEventListener("click", () => {
  studentForm.classList.remove("hidden");
  counsellorForm.classList.add("hidden");
  studentTab.classList.add("active");
  counsellorTab.classList.remove("active");
});

// Switch to Counsellor Login
counsellorTab.addEventListener("click", () => {
  counsellorForm.classList.remove("hidden");
  studentForm.classList.add("hidden");
  counsellorTab.classList.add("active");
  studentTab.classList.remove("active");
});

// Dummy login handling (you can replace with real authentication later)
document.getElementById("studentLoginBtn").addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "student");
  window.location.href = "student.html";
});

document.getElementById("counsellorLoginBtn").addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "counsellor");
  window.location.href = "counsellor.html";
});
