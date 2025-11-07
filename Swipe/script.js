let player = null; // YouTube Player 객체

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

const videoIds = [
  "7mUhhZDwLWc", "LFR0N02L0_c", "vdYJpoTUwWQ",
  "1nUQCp8T_bs", "-tYDPdmNqMA", "JGeeeMiD7R4",
  "aAckiP1JPFI", "k1YFgJUlWx0", "kBsM6uN62mY",
  "n5bjF6jh5O8", "8kRsg47xctA"
];

const projectList = document.getElementById("project-list");
const workspace = document.getElementById("workspace");
const webFrame = document.getElementById("web-frame");
const backBtn = document.getElementById("back-btn");
const switchBtn = document.getElementById("switch-btn");

// YouTube API 로드 후 호출되는 함수
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "",
    playerVars: {
      autoplay: 0,
      mute: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
  });
}

// 프로젝트 클릭 → 웹+비디오 로드
pageUrls.forEach((url, i) => {
  const li = document.getElementById(`p${i + 1}`);
  if (li) {
    li.addEventListener("click", () => {
      projectList.classList.add("hidden");
      webFrame.src = pageUrls[i];
      if (player) {
        player.loadVideoById(videoIds[i]);
        player.pauseVideo(); // 처음엔 정지 상태
      }
      setTimeout(() => {
        workspace.classList.add("active");
        workspace.classList.remove("video-front");
      }, 300);
    });
  }
});

// Switch 버튼으로 전환
switchBtn.addEventListener("click", () => {
  const isVideoFront = workspace.classList.toggle("video-front");
  if (player) {
    if (isVideoFront) player.playVideo();
    else player.pauseVideo();
  }
});

// 뒤로가기 버튼
backBtn.addEventListener("click", () => {
  workspace.classList.remove("active", "video-front");
  webFrame.src = "";
  if (player) player.stopVideo();
  setTimeout(() => {
    projectList.classList.remove("hidden");
  }, 500);
});
