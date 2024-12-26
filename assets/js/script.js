function showPhoneNumber() {
    const phoneNumberDiv = document.getElementById("phone-number");
    if (phoneNumberDiv.style.display === "none" || phoneNumberDiv.style.display === "") {
        phoneNumberDiv.style.display = "block";
        phoneNumberDiv.textContent = "Phone Number: 0358316427";
    } else {
        phoneNumberDiv.style.display = "none";
    }
}
