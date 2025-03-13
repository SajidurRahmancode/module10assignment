function calculateSum() {
  const num1 = parseInt(document.getElementById("vala").value);
  const num2 = parseInt(document.getElementById("valb").value);
  let x = num1 + num2;
  console.log("Sum:", x);
  return x;
}

function isEven() {
  const num = parseInt(document.getElementById("evenodd").value);
  const result = num % 2 === 0;
  console.log("Is Even:", result);
  return result;
}

function findMax() {
  const inputString = document.getElementById("findMax").value;
  const stringArray = inputString.split(",");
  const processedArray = stringArray
    .map((item) => {
      const trimmedItem = item.trim();
      if (!isNaN(trimmedItem) && trimmedItem !== "") {
        return parseFloat(trimmedItem);
      }
      return NaN;
    })
    .filter((item) => !isNaN(item));

  if (processedArray.length === 0) {
    console.log("No valid numbers entered.");
    return null;
  }

  let max = processedArray[0];
  for (let index = 1; index < processedArray.length; index++) {
    if (processedArray[index] > max) {
      max = processedArray[index];
    }
  }
  console.log("Maximum value:", max);
  return max;
}

function filterOddNumbers() {
  const inputString = document.getElementById("filterOddNumbersInput").value;
  const stringArray = inputString.split(",");
  const processedArray = stringArray
    .map((item) => {
      const trimmedItem = item.trim();
      if (!isNaN(trimmedItem) && trimmedItem !== "") {
        return parseFloat(trimmedItem);
      }
      return NaN;
    })
    .filter((item) => !isNaN(item));

  if (processedArray.length === 0) {
    console.log("No valid numbers entered.");
    return [];
  }

  const oddNumbers = processedArray.filter((num) => num % 2 !== 0);
  console.log("Odd numbers:", oddNumbers);
  return oddNumbers;
}

function countWords() {
  const inputString = document.getElementById("countWordsInput").value;
  if (inputString.trim() === "") {
    console.log("Word count: 0");
    return 0;
  }
  const words = inputString.trim().split(/\s+/);
  const wordCount = words.length;
  console.log("Word count:", wordCount);
  return wordCount;
}

function removeDuplicates() {
  const inputString = document.getElementById("removeDuplicatesInput").value;
  const inputArray = inputString.split(",");
  const trimmedArray = inputArray.map((item) => item.trim());
  const uniqueArray = [...new Set(trimmedArray)];
  console.log("Unique array:", uniqueArray);
  return uniqueArray;
}
