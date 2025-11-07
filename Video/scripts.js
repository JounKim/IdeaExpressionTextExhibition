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

// 영상 선택 시 재생 화면 전환
videoUrls.forEach((url, index) => {
  const li = document.getElementById(`p${index+1}`);
  if (li) {
    li.addEventListener("click", () => {
      iframe.src = url;
      projectList.style.display = "none";
      iframeContainer.classList.add("active");
    });
  }
});

// 뒤로가기 버튼 클릭 시 목록 복귀
backBtn.addEventListener("click", () => {
  iframe.src = "";
  iframeContainer.classList.remove("active");
  projectList.style.display = "flex";
});
