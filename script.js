const charAmount = document.getElementById("charAmount");
const charNum = document.getElementById("charNum");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const passwordDispplay = document.getElementById("passwordDisplay");

const UPPERCASE = arrayFromLowToHigh(65, 90);
const LOWERCASE = arrayFromLowToHigh(97, 122);
const NUMBERCODES = arrayFromLowToHigh(48, 57);
const SYMBOLCODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

charAmount.addEventListener("input", syncChar);
charNum.addEventListener("input", syncChar);

form.addEventListener("submit", e => {
  e.preventDefault();
  const characterAmount = charNum.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLCODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBERCODES)

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array
}

function syncChar(e) {
  const value = e.target.value;
  charAmount.value = value;
  charNum.value = value;
}
