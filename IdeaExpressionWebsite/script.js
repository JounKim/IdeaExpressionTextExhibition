const urls = [
  "https://channghyunpark.github.io/letters_project/",
  "https://taekyng1205.github.io/letters/",
  "https://dyderks.github.io/Letters---Idea-Expression/",
  "https://simplylovely1.github.io/letters-project/",
  "https://nghi-oo0.github.io/letters_project/",
  "https://kmb3322.github.io/letters-project/",
  "https://azel2ne.github.io/zeline-Letters/",
  "https://wooeekim.github.io/Cake/",
  "https://audth517.github.io/letter-project/",
  "https://psyong0719.github.io/letters-project/"
];

const iframe = document.querySelector("iframe");

function setIframeSrc(index) {
  if (index >= 0 && index < urls.length) {
    iframe.src = urls[index];
    setTimeout(() => {
      iframe.focus();
      iframe.contentWindow?.focus();
    }, 300);
  }
}

// 초기 포커스
iframe.onload = () => {
  setTimeout(() => {
    iframe.focus();
    iframe.contentWindow?.focus();
  }, 100);
};

// 각 프로젝트 버튼 클릭 시 iframe 교체
urls.forEach((url, index) => {
  const element = document.getElementById(`p${index + 1}`);
  if (element) {
    element.addEventListener("click", () => setIframeSrc(index));
  }
});
