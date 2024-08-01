function maskPassword(pass) {
  let str = "";
  for (let index = 0; index < pass.length; index++) {
    str += "*";
  }
  return str;
}

function copyText(txt) {
  navigator.clipboard.writeText(txt).then(
    () => {
      // clipboard successfully set
      document.getElementById("alert").style.display = "inline";
      setTimeout(() => {
        document.getElementById("alert").style.display = "none";
      }, 2000);
    },
    () => {
      // clipboard write failed
      alert("Clipboard copying failed");
    }
  );
}

const deletePassword = (website) => {
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((e) => {
    return e.website != website;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
  alert(`Successfully deleted ${website}'s password`);
  showPasswords();
};

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hello feng");
  console.log(username.value, password.value);

  // Mask the password
  let maskedPassword = maskPassword(password.value);
  console.log("Masked password: ", maskedPassword);

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
