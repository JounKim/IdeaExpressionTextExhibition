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

const projectList = document.getElementById("project-list");
const iframeContainer = document.getElementById("iframe-container");
const iframe = iframeContainer.querySelector("iframe");
const backBtn = document.getElementById("back-btn");

// 프로젝트 클릭 시 iframe 전환
urls.forEach((url, index) => {
  const li = document.getElementById(`p${index + 1}`);
  if (li) {
    li.addEventListener("click", () => {
      // 목록이 사라지고 iframe 올라옴
      projectList.classList.add("hidden");
      iframe.src = url;
      setTimeout(() => {
        iframeContainer.classList.add("active");
      }, 200);
    });
  }
});

// 뒤로가기 클릭 시 다시 목록으로
backBtn.addEventListener("click", () => {
  iframeContainer.classList.remove("active");
  iframe.src = "";
  setTimeout(() => {
    projectList.classList.remove("hidden");
  }, 400); // 전환 타이밍 맞춤
});
