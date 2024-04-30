function setCopyValue() {
  document.querySelectorAll('.copy-button').forEach(copyButton => {
    const pre = copyButton.closest('pre');
    const code = pre?.querySelector('code');

    if (code) {
      copyButton.value = code.textContent;
    }
  });
}

// Set data for all copy buttons when the page loads
setCopyValue();

document.addEventListener('turbo:load', setCopyValue);
