const showBtn = document.getElementById("btn");
const changeText = document.getElementById("text");
showBtn.addEventListener("click", () => {
  //h2のテキストを変更する
  changeText.textContent = "ボタンをクリックしました";
});
