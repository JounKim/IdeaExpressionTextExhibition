const videoUrls = [
  "https://www.youtube.com/embed/7mUhhZDwLWc",
  "https://www.youtube.com/embed/LFR0N02L0_c",
  "https://www.youtube.com/embed/vdYJpoTUwWQ",
  "https://www.youtube.com/embed/1nUQCp8T_bs",
  "https://www.youtube.com/embed/-tYDPdmNqMA",
  "https://www.youtube.com/embed/JGeeeMiD7R4",
  "https://www.youtube.com/embed/aAckiP1JPFI",
  "https://www.youtube.com/embed/k1YFgJUlWx0",
  "https://www.youtube.com/embed/kBsM6uN62mY",
  "https://www.youtube.com/embed/n5bjF6jh5O8",
  "https://www.youtube.com/embed/8kRsg47xctA"
];

const projectList = document.getElementById("project-list");
const iframeContainer = document.getElementById("iframe-container");
const iframe = iframeContainer.querySelector("iframe");
const backBtn = document.getElementById("back-btn");

// 클릭 시 영상 보여주기
videoUrls.forEach((url, index) => {
  const li = document.getElementById(`p${index + 1}`);
  if (li) {
    li.addEventListener("click", () => {
      projectList.classList.add("hidden"); // 부드럽게 사라짐
      iframe.src = url + "?autoplay=1";
      setTimeout(() => {
        iframeContainer.classList.add("active"); // 위로 슬라이드
      }, 300);
    });
  }
});

// 뒤로가기 버튼
backBtn.addEventListener("click", () => {
  iframeContainer.classList.remove("active");
  iframe.src = "";
  setTimeout(() => {
    projectList.classList.remove("hidden");
  }, 500);
});
