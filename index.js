const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const rangeInputs = document.querySelectorAll('input[type="range"]');
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

//slider
sliderValue.innerHTML = sliderValue;
bar1.classList.add("weak");
bar2.classList.add("weak");

slider.oninput = function () {
    sliderValue.innerHTML = this.value;

    // Strenght

    const levelText = document.getElementById("levelText");

    if (slider.value < 7) {
        levelText.innerHTML = "too weak!";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong"); 
        bar1.classList.remove("weak");
        bar1.classList.add("tooWeak");     
    }

    if (slider.value < 9 && slider.value >= 7) {
        levelText.innerHTML = "too weak!";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong"); 
        bar1.classList.remove("weak");
        bar1.classList.add("too");     
    }

    if (slider.value >= 11) {
        levelText.innerHTML = "strong";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong"); 
        bar1.classList.add("strong");
        bar2.classList.add("strong");
        bar3.classList.add("strong");
        bar4.classList.add("strong");     
    }
};

function handleInputChange(e) {
    let target = e.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((var1 - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
});

// copy to clipboard
const copyIcon = document.getElementById("copyIcon");
const copyMsg = document.getElementById("copyMsg");

copyMsg.addEventListener("click", copyField);

function copyField() {
    // Get the text field
    var copText = document.getElementById("fieldText").innerHTML;

    // copy the text inside the text field

    navigator.clipboard.writeText(copText);

    copyMsg.style.display = "initial";
}

// Generate Password

const generation = document.getElementById("generationBtn");
generationBtn.addEventListener("click", generate);
const fieldText = document.getElementById("fieldText");

function generation(Lenght) {
    const uppercase = document.getElementById("IncludeUppercase");
    const lowercase = document.getElementById("IncludeLowercase");
    const numbers = document.getElementById("IncludeNumbers");
    const symbols = document.getElementById("IncludeSymbols");
    const alert = document.getElementById("alert");

    if (
        uppercase.checked === false &&
        lowercase.checked === false && 
        numbers.checked === false &&
        symbols.checked === false
    ) {
        alert.style.display = "block";
    }   else {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numbersChars = "0123456789";
        const symbolsChars = "!@#$%^&*()_+-=?/";

        let chars = "";
        var lenght = slider.value;

        if (uppercase.checked === true){
            chars += uppercaseChars;
        }
        if(lowercase.checked === true){
            chars += lowercaseChars;
        }
        if(numbers.checked === true){
            chars += numbersChars;
        }
        if(symbols.checked === true){
            chars += symbolsChars;
        }

        let password = "";
        let passwordLenght = lenght;
        const array = new Uint32Array(lenght); // create 'unsigned' array
        window.crypto.getRandomValues(array);
        for (let i = 0; i < passwordLength; 1++){
            password += chars[array[i] % chars.length]; // % operator returns
            //reminder of division
        }
        fieldText.innerHTML = password;
        fieldText.style.color = "hsl()";
        copyMsg.style.display = "none";
        alert.style.display = "none";

        return password;
    }
}
