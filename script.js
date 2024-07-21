document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hello feng");
  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({ username: username.value, password: password.value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({ username: username.value, password: password.value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});
