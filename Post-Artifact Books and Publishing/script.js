document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("text-container");
  const words = textContainer.innerText.split(/\s+/); // 단어별로 분리
  textContainer.innerHTML = ""; // 기존 텍스트 제거

  // 각 단어를 span으로 감싸기
  words.forEach((word) => {
    const span = document.createElement("span");
    span.cl