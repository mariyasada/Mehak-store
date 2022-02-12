const ProfileBtn = document.querySelector("#profile");
const addressBtn = document.querySelector("#address");
const settingBtn = document.querySelector("#settings");
const detailcontainer = document.querySelectorAll(".details");
let profiledetailDiv = detailcontainer[0];
let addressdetailsdiv = detailcontainer[1];
let settingdetailDiv = detailcontainer[2];

ProfileBtn.addEventListener( "click",() => {   
   profiledetailDiv.style.display==="none"? profiledetailDiv.style.display = "block": profiledetailDiv.style.display = "none";
   
})


addressBtn.addEventListener( "click",() => {
    console.log("clicked");
    addressdetailsdiv.style.display==="none"? addressdetailsdiv.style.display = "block": addressdetailsdiv.style.display = "none";

})
settingBtn.addEventListener( "click",() => {
    // console.log("clicked");
   let settingdetailDiv = detailcontainer[2];
   settingdetailDiv.style.display === "none"? settingdetailDiv.style.display = "block": settingdetailDiv.style.display = "none";
})
