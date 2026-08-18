(() => {
  const button = document.querySelector(".citation-copy");
  const citation = document.querySelector(".citation-block code");

  if (!button || !citation) return;

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  button.addEventListener("click", async () => {
    try {
      await copyText(citation.textContent.trim());
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1800);
  });
})();
