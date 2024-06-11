import { css } from 'lit';

export default css`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;

    display: inline-block;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    fill: currentColor;

    .fa-primary {
      color: var(--primary-color);
      opacity: var(--primary-opacity);
    }

    .fa-secondary {
      color: var(--secondary-color);
      opacity: var(--secondary-opacity);
    }
  }

  /* Normal width */
  :host(:not([fixed-width])) {
    max-width: auto;
    height: 1em;

    svg {
      width: auto;
      height: 1em;
    }
  }

  /* Fixed width */
  :host([fixed-width]) {
    width: 1em;
    height: 1em;

    svg {
      width: 1em;
      height: 1em;
    }
  }
`;
