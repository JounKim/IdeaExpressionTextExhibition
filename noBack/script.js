const urls = [
  "https://kmb3322.github.io/letters-project/",
  "https://simplylovely1.github.io/letters-project/",
  "https://nghi-oo0.github.io/letters_project/",
  "https://channghyunpark.github.io/letters_project/",
  "https://delta0417.github.io/2.Letters/",
  "https://wooyoungkang.github.io/letters/",
  "https://jqpz.github.io/Letters/",
  "https://dav1dtsoy.github.io/letters-DavidTsoy/",
  "https://lnnew.github.io/ID202_LP4U/",
  "https://yjj8895-git.github.io/letters-JaeJunYoun/",
  "https://ronin-bominkim.github.io/Introduction-of-how-to-brush-my-teeth/"
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

