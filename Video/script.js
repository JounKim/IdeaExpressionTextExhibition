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

// 자동재생 + 소리 ON + 최소 UI
const YT_PARAMS = "?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0";

videoUrls.forEach((url, index) => {
  const li = document.getElementById(`p${index + 1}`);
  if (li) {
    li.addEventListener("click", () => {
      projectList.classList.add("hidden");
      // 클릭 이벤트 안에서 iframe.src를 설정하면 브라우저가 허용함
      iframe.src = url + YT_PARAMS;
      setTimeout(() => {
        iframeContainer.classList.add("active");
      }, 300);
    });
  }
});

backBtn.addEventListener("click", () => {
  iframeContainer.classList.remove("active");
  iframe.src = "";
  setTimeout(() => {
    projectList.classList.remove("hidden");
  }, 500);
});
