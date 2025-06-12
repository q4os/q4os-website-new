var price = 10; // Default initial value
var ownPrice = false;

function select(object) {
    console.log("select func for:", object ? object.id : 'null');
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    const opt3 = document.getElementById("opt3");
    const opt4 = document.getElementById("opt4"); // The "Other" option container
    const sendPriceButt = document.getElementById("sendPriceButt");
    const ownPriceInput = document.getElementById("ownPrice");

    if (opt1) opt1.classList.remove("selected");
    if (opt2) opt2.classList.remove("selected");
    if (opt3) opt3.classList.remove("selected");
    if (opt4) opt4.classList.remove("selected");

    if (sendPriceButt) {
        sendPriceButt.classList.remove("disabled");
        sendPriceButt.disabled = false;
        sendPriceButt.innerText = "Donate";
    }

    ownPrice = false;
    if (object && opt4 && object !== opt4 && ownPriceInput) {
        ownPriceInput.value = "";
    }

    if (object) {
      object.classList.add("selected");
    }

    if (object && object.id === "opt1") window.price = 1;
    else if (object && object.id === "opt2") window.price = 12;
    else if (object && object.id === "opt3") window.price = 50;
    // Price for 'opt4' (Other) is set by updateOwnPrice via onkeyup
}

function updateOwnPrice(inputElement) { // inputElement is the input field for "Other" amount
    console.log("updateOwnPrice func for value:", inputElement ? inputElement.value : 'null');
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    const opt3 = document.getElementById("opt3");
    const opt4 = document.getElementById("opt4"); // The "Other" option container
    const sendPriceButt = document.getElementById("sendPriceButt");

    if (opt1) opt1.classList.remove("selected");
    if (opt2) opt2.classList.remove("selected");
    if (opt3) opt3.classList.remove("selected");
    if (opt4) opt4.classList.add("selected");

    ownPrice = true; // Global variable indicating custom price is active

    if (sendPriceButt) {
        if (inputElement.value === "0") {
            sendPriceButt.innerText = "Get free";
        } else {
            sendPriceButt.innerText = "Donate";
        }

        if (inputElement.value === "" || parseInt(inputElement.value) < 0 || isNaN(parseInt(inputElement.value)) ) {
            sendPriceButt.classList.add("disabled");
            sendPriceButt.disabled = true;
        } else {
            sendPriceButt.classList.remove("disabled");
            sendPriceButt.disabled = false;
            window.price = parseInt(inputElement.value); // Set global price here
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sendPriceButt = document.getElementById("sendPriceButt");
    if (sendPriceButt) {
        const selectedOption = document.querySelector('.paySystem .opt.selected');
        const ownPriceInput = document.getElementById("ownPrice");

        if (selectedOption && selectedOption.id !== 'opt4') {
             sendPriceButt.disabled = false;
             sendPriceButt.classList.remove("disabled");
             // Initialize price based on pre-selected option
             if(selectedOption.id === 'opt1') window.price = 1;
             else if(selectedOption.id === 'opt2') window.price = 12;
             else if(selectedOption.id === 'opt3') window.price = 50;
        } else if (ownPriceInput && ownPriceInput.value !== "" && !isNaN(parseInt(ownPriceInput.value)) && parseInt(ownPriceInput.value) >= 0) {
            // If "Other" has a valid pre-filled value
            sendPriceButt.disabled = false;
            sendPriceButt.classList.remove("disabled");
            window.price = parseInt(ownPriceInput.value);
            // Ensure opt4 is marked selected and button text is correct
            if(document.getElementById('opt4')) document.getElementById('opt4').classList.add('selected');
            if (ownPriceInput.value === "0") sendPriceButt.innerText = "Get free";
            else sendPriceButt.innerText = "Donate";
        } else {
            // Default: button disabled if no selection and "Other" is empty or invalid
            sendPriceButt.disabled = true;
            sendPriceButt.classList.add("disabled");
        }
    }
    // Ensure onlick for submit button uses the global price
    const donateButton = document.getElementById('sendPriceButt');
    if(donateButton) {
        donateButton.onclick = function() {
            const amountInput = document.getElementById('amount');
            if (amountInput) {
                amountInput.value = window.price;
            }
            // The form submission will proceed as defined in HTML
        };
    }
});
