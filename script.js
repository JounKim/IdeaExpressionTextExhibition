const projects = [
  { name: "Tsoy David", url: "https://dav1dtsoy.github.io/letters-DavidTsoy/" },
  { name: "Minbeom Kim", url: "https://kmb3322.github.io/letters-project" },
  { name: "Annik Petke", url: "https://jqpz.github.io/Letters/" },
  { name: "Jihyun Yoo", url: "https://lnnew.github.io/ID202_LP4U/" },
  { name: "Dongheon Kim", url: "https://asterisk0532.github.io/ID202_Letters/" },
  { name: "Chaewon Seo", url: "https://seochaewon1.github.io/Letters_Project/" },
  { name: "Thanh Nghi Le", url: "https://nghi-oo0.github.io/letters_project/" },
  { name: "Chang Hyun Park", url: "https://channghyunpark.github.io/letters_project/" },
  { name: "Wooyoung Kang", url: "https://wooyoungkang.github.io/letters/" },
  { name: "Bomin Kim", url: "https://ronin-bominkim.github.io/Introduction-of-how-to-brush-my-teeth/" },
  { name: "Jaejun Youn", url: "https://yjj8895-git.github.io/letters-JaeJunYoun/" },
  { name: "Naeun Kim", url: "https://wooeekim.github.io/Cake/" },
  { name: "Lavitanea Luthfiardhani Delphinanto", url: "https://lavitanea.github.io/letters-projects/" },
  { name: "Amanda Zeline Pranoto", url: "https://azel2ne.github.io/zeline-Letters/" },
  { name: "Sooyoung Heo", url: "https://prnagn.github.io/letters/" },
  { name: "Sungwon Cho", url: "https://sensible-life.github.io/ID202/" },
  { name: "Gloria Junha Kim", url: "https://gloriakaist.github.io/lettewrs-project/" },
  { name: "Jeongwon Moon", url: "https://simplylovely1.github.io/letters-project/" }
];

const iframe = document.querySelector("iframe");

function forceFocus() {
  iframe.focus();
  iframe.contentWindow?.focus();
}

projects.forEach((project, index) => {
  const li = document.getElementById(`p${index + 1}`);
  if (!li) return;

  li.addEventListener("click", () => {
    if (!project.url) {
      alert(`${project.name}의 프로젝트 링크가 없습니다.`);
      return;
    }

    // ① 클릭 즉시 포커스 시도
    forceFocus();

    // ② src 변경
    iframe.src = project.url;

    // ③ 로딩 중/직후 포커스 2단계 보정
    setTimeout(forceFocus, 250);
    setTimeout(forceFocus, 500);

    // ④ 완전히 로드된 뒤 재확인
    iframe.onload = () => {
      setTimeout(forceFocus, 100);
      setTimeout(forceFocus, 400);
    };
  });
});
