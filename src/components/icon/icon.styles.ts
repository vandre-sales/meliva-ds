import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    fill: currentColor;
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
