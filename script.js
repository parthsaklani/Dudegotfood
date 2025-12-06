
let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let qtyBox = document.getElementById("qty");
let totalBox = document.getElementById("total");

let price = 240;
let qty = 1;

if (plusBtn) {
    plusBtn.addEventListener("click", function () {
        qty++;
        qtyBox.textContent = qty;
        totalBox.textContent = price * qty;
    });
}

if (minusBtn) {
    minusBtn.addEventListener("click", function () {
        if (qty > 1) {
            qty--;
            qtyBox.textContent = qty;
            totalBox.textContent = price * qty;
        }
    });
}

let contactForm = document.getElementById("contactForm");
let successMsg = document.getElementById("successMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        

        contactForm.style.display = "none";
        
        
        successMsg.style.display = "block";
    });
}


