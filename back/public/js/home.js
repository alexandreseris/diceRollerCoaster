document.getElementById("newUserSwitch").addEventListener("click", function(event) {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("newUser").classList.remove("hidden");
  document.getElementById("newUserSwitch").classList.add("currentSwitcher");
  document.getElementById("loginSwitch").classList.remove("currentSwitcher");
  document.getElementById("userContainer").classList.remove("login");
  document.getElementById("userContainer").classList.add("newuser");
});
document.getElementById("loginSwitch").addEventListener("click", function(event) {
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("newUser").classList.add("hidden");
  document.getElementById("newUserSwitch").classList.remove("currentSwitcher");
  document.getElementById("loginSwitch").classList.add("currentSwitcher");
  document.getElementById("userContainer").classList.add("login");
  document.getElementById("userContainer").classList.remove("newuser");
});

document.querySelectorAll(".flashMessageContainer *").forEach(function(elem) {
  elem.addEventListener("click", function(event) {
    event.target.parentNode.removeChild(event.target);
  })
})

