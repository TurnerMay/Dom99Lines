let friends = ["Jim", "Sam", "Randy", "Will", "Jordan"];
let Btn = document.createElement("Button");
let BtnText = document.createTextNode("Sing!");
Btn.appendChild(BtnText);
document.body.appendChild(Btn);

Btn.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "friend";
    let newh3 = document.createElement("h3");
    newh3.textContent = friends[i];
    newDiv.appendChild(newh3);
    document.body.appendChild(newDiv);

    for (let j = 99; j >= 1; j--) {
      let para = document.createElement("p");

      if (j > 2) {
        para.textContent =
          [j] +
          " lines of code in the file, " +
          [j] +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          [j - 1] +
          " lines of code in the file";
      } else if (j == 2) {
        para.textContent =
          [j] +
          " lines of code in the file, " +
          [j] +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          [j - 1] +
          " line of code in the file";
      } else if (j == 1) {
        para.textContent =
          [j] +
          " line of code in the file, " +
          [j] +
          " line of code; " +
          friends[i] +
          " strikes one out, clears it all out," +
          " no more lines of code in the file";
      }

      newDiv.appendChild(para);
    }
    document.body.appendChild(newDiv);
  }
});
