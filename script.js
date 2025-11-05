document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const keypadButtons = document.querySelectorAll(".angka, .operator");
    const clearButton = document.getElementById("clean"); // sesuaikan ID dengan HTML
    const backspaceButton = document.getElementById("backspace");
    const resultButton = document.getElementById("result");

    // Event untuk tombol angka & operator
    keypadButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.value;
            inputField.value += value;
        });
    });

    // Event untuk tombol AC (hapus semua)
    clearButton.addEventListener("click", function () {
        inputField.value = "";
    });

    // Event untuk tombol CE (hapus satu karakter)
    backspaceButton.addEventListener("click", function () {
        inputField.value = inputField.value.slice(0, -1);
    });

    // Event untuk tombol "=" (hasil)
    resultButton.addEventListener("click", function () {
        try {
            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = "Error";
        }
    });
});
