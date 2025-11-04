document.getElementById("openPopupBtn").addEventListener("click", () => {
  const popupWidth = 720;
  const popupHeight = 580;

  // 화면 가운데 정렬
  const left = (screen.width / 2) - (popupWidth / 2);
  const top = (screen.height / 2) - (popupHeight / 2);

  // 팝업 옵션 정의
  const popupOptions = `
    width=${popupWidth},
    height=${popupHeight},
    left=${left},
    top=${top},
    resizable=no,
    scrollbars=yes,
    status=no,
    toolbar=no,
    menubar=no
  `;

  // 팝업 열기
  window.open("https://audth517.github.io/letter-project/", "LetterProjectPopup", popupOptions);
});
