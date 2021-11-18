const url = "https://randomuser.me/api/?results=10";
let avatar = document.getElementById("avatar");
let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let city = document.getElementById("city");
let nextQueryBtn = document.getElementById("next-query-btn");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");
let number = document.getElementById("number");
let phone = document.getElementById("phone");
let profiles;
let profNo;

async function fetchNext() {
  var response = await fetch(url);
  profiles = (await response.json()).results;
  profNo = 0;
  updateProfile(profiles[0]);
}
nextQueryBtn.addEventListener("click", fetchNext);

prevBtn.addEventListener("click", function () {
  if (profiles) {
    profNo = (profNo + profiles.length - 1) % profiles.length;
    updateProfile(profiles[profNo]);
  }
});
nextBtn.addEventListener("click", function () {
  if (profiles) {
    profNo = ++profNo % profiles.length;
    updateProfile(profiles[profNo]);
  }
});

function updateProfile(profile) {
  avatar.src = profile.picture.medium;
  fullname.innerHTML = profile.name.first + " " + profile.name.last;
  username.innerHTML = profile.login.username;
  email.innerHTML = profile.email;
  city.innerHTML = profile.location.city;
  number.innerHTML = "Запись:"+(profNo+1) ;
  phone.innerHTML = profile.phone;
}

