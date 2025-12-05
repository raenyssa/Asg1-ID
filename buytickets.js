let count = 1;
let price = 20;

const countDisplay = document.getElementById("ticketCount");
const totalDisplay = document.getElementById("totalPrice");

document.getElementById("plus").addEventListener("click", () => {
    count++;
    updateUI();
});

document.getElementById("minus").addEventListener("click", () => {
    if (count > 1) {
        count--;
        updateUI();
    }
});

function updateUI() {
    countDisplay.textContent = count;
    totalDisplay.textContent = count * price;
}

document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(
        "Thank you, " + name +
        "!\nYou purchased " + count +
        " ticket(s).\nA confirmation will be sent to: " + email
    );
});
