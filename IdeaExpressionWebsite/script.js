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

