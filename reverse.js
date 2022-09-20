function revStr(string) {
  let goodArr = "";
  let splitArr = string.split("");
  for (let i = splitArr.length - 1; i >= 0; i--) {
    splitArr[i] == " " ? (goodArr += "\n") : (goodArr += string[i]);
  }
  console.log(goodArr);
}

revStr("Hello people!");
