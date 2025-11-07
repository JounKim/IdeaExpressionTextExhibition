const pageUrls = [
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
const workspace = document.getElementById("workspace");
const webFrame = document.getElementById("web-frame");
const videoFrame = document.getElementById("video-frame");
const backBtn = document.getElementById("back-btn");
const switchBtn = document.getElementById("switch-btn");

const YT_PARAMS = "?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0";

pageUrls.forEach((url, i) => {
  const li = document.getElementById(`p${i + 1}`);
  if (li) {
    li.addEventListener("click", () => {
      projectList.classList.add("hidden");
      webFrame.src = pageUrls[i];
      videoFrame.src = videoUrls[i] + YT_PARAMS;
      setTimeout(() => {
        workspace.classList.add("active");
        workspace.classList.remove("video-front");
      }, 300);
    });
  }
});

switchBtn.addEventListener("click", () => {
  workspace.classList.toggle("video-front");
});

backBtn.addEventListener("click", () => {
  workspace.classList.remove("active", "video-front");
  webFrame.src = "";
  videoFrame.src = "";
  setTimeout(() => {
    projectList.classList.remove("hidden");
  }, 500);
});
