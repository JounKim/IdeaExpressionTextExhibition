document.querySelectorAll('.icon-button').forEach(button => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    const width = 800;
    const height = 500;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    const popup = window.open(
      url,
      '_blank',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (popup) popup.focus();
  });
});
