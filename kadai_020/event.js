const showBtn = document.getElementById("btn");

showBtn.addEventListener("click", () => {
  //h2の要素をを取得する
  const changeText = document.getElementById("text");
  //h2のテキストを変更する
  changeText.textContent = "ボタンをクリックしました";
});
