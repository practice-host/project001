const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form2 input"),
    generateBtn = wrapper.querySelector("#generateBtn"),
    qrImg = wrapper.querySelector(".qr-code img"),
    qrType = wrapper.querySelector(".form2 select");




generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    let qrValue2 = qrType.value;
    if (!qrValue) return;
    generateBtn.innerText = "GENERATING QR CODE...";
    qrImg.src = `https://barcodeapi.org/api/${qrValue2}/${qrValue}`;


    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "GENERATE QR CODE";

    })
});


qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})




var icon1 = document.getElementById("icon1");

icon1.onclick = function () {
    document.body.classList.remove("theme1");
    document.body.classList.toggle("theme2");
    if (document.body.classList.contains("theme2")) {
        icon1.src = "icon(sun).png";

    } else {
        document.body.classList.toggle("theme1")
        icon1.src = "icon(moon).png";

    }
}

var Xicon = document.getElementById("clearBtn")

Xicon.onclick = function () {
    qrInput.value = "";
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }

}
