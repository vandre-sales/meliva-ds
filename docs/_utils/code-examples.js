import { parse } from 'node-html-parser';
import { v4 as uuid } from 'uuid';

/**
 * Eleventy plugin to turn `<code class="example">` blocks into live examples.
 */
export function codeExamplesPlugin(options = {}) {
  options = {
    container: 'body',
    ...options
  };

  return function (eleventyConfig) {
    eleventyConfig.addTransform('code-examples', content => {
      const doc = parse(content, { blockTextElements: { code: true } });
      const container = doc.querySelector(options.container);

      if (!container) {
        return content;
      }

      // Look for external links
      container.querySelectorAll('code.example').forEach(code => {
        const pre = code.closest('pre');
        const adjacentPre = pre.nextElementSibling?.localName === 'pre' ? pre.nextElementSibling : null;
        const adjacentPreForReact = adjacentPre?.querySelector('code.react') ? adjacentPre.querySelector('code') : null;
        const hasButtons = !code.classList.contains('no-buttons');
        const isOpen = code.classList.contains('open') || !hasButtons;
        const noEdit = code.classList.contains('no-edit');
        const id = `code-example-${uuid().slice(-12)}`;
        let preview = pre.textContent;

        // Run preview scripts as modules to prevent collisions
        const root = parse(preview, { blockTextElements: { script: true } });
        root.querySelectorAll('script').forEach(script => script.setAttribute('type', 'module'));
        preview = root.toString();

        const codeExample = parse(`
          <div class="code-example ${isOpen ? 'open' : ''}">
            <div class="code-example-preview">
              ${preview}
            </div>
            <div class="code-example-source" id="${id}">
              <wa-tab-group>
                <wa-tab slot="nav" panel="html">HTML</wa-tab>
                <wa-tab-panel name="html">${pre.outerHTML}</wa-tab-panel>
                ${
                  adjacentPreForReact
                    ? `
                      <wa-tab slot="nav" panel="react">React</wa-tab>
                      <wa-tab-panel name="react">${adjacentPre.outerHTML}</wa-tab-panel>
                    `
                    : ''
                }
              </wa-tab-group>
            </div>
            ${
              hasButtons
                ? `
                <div class="code-example-buttons">
                  <button
                    class="code-example-toggle"
                    type="button"
                    aria-expanded="${isOpen ? 'true' : 'false'}"
                    aria-controls="${id}"
                  >
                    Code
                    <wa-icon name="chevron-down"></wa-icon>
                  </button>

                  ${
                    noEdit
                      ? ''
                      : `
                        <button class="code-example-pen" type="button">
                          <wa-icon name="pen-to-square"></wa-icon>
                          Edit
                        </button>
                      `
                  }

                `
                : ''
            }
            </div>
          </div>
        `);

        pre.replaceWith(codeExample);
        adjacentPre?.remove();
      });

      return doc.toString();
    });
  };
}
