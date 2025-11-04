const openBtn = document.getElementById('openIframeBtn');
const modal = document.getElementById('iframeModal');
const closeBtn = document.getElementById('closeIframeBtn');

// 아이콘 클릭 시 iframe 열기
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// 닫기 버튼 클릭 시 iframe 닫기
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 배경 클릭 시 닫기
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
