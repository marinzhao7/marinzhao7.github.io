function readingTime() {
  const text = document.querySelector("article").innerText;
  const wpm = 400;
  const chinese = Array.from(text).filter(ch => /[\u4e00-\u9fa5]/.test(ch)).length;
  const english = Array.from(text).map(ch => /[a-zA-Z0-9\s]/.test(ch) ? ch : ' ').join('').split(/\s+/).filter(s => s).length
  const words = chinese + english;
  const time = Math.ceil(words / wpm);

  const timeElement = document.querySelector("span#readingTime");
  timeElement.innerHTML = "<small> | </small>" + time + timeElement.innerHTML;
}
readingTime();
