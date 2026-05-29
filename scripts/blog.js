// Adds a "copy" button to every <pre> block inside .article-content.
// Reuse on any blog post by including this script.

document.addEventListener('DOMContentLoaded', () => {
  const pres = document.querySelectorAll('.article-content pre');
  if (!pres.length || !navigator.clipboard) return;

  pres.forEach((pre) => {
    pre.style.position = 'relative';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.textContent = 'copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    button.addEventListener('click', async () => {
      const codeNode = pre.querySelector('code') || pre;
      const text = codeNode.innerText;

      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'copied';
        button.classList.add('is-copied');
        setTimeout(() => {
          button.textContent = 'copy';
          button.classList.remove('is-copied');
        }, 1500);
      } catch (err) {
        button.textContent = 'failed';
        setTimeout(() => {
          button.textContent = 'copy';
        }, 1500);
      }
    });

    pre.appendChild(button);
  });
});
