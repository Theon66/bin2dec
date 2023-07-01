const readline = require("readline").createInterface(
  process.stdin,
  process.stdout
);

readline.question("Input binary:", (binary) => {
  if (is8DigitsBinary(binary)) {
      console.log('equivalent decimal: ', bin2dec(binary));
  } else {
    console.log("Please input a binary under 8 digits");
  }
  readline.close();
});

function bin2dec(binary) {
  let dec = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
        dec = dec + Math.pow(2, binary.length - i - 1);
    }
  }
  return dec;
}

// 检查输入
function is8DigitsBinary(binary) {
  if (binary.length > 8) return false;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== "0" & binary[i] !== "1") {
      return false;
    }
  }
  return true;
}
