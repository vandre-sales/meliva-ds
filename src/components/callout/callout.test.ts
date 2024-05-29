import { expect, fixture, html } from '@open-wc/testing';
import type WaCallout from './callout.js';

it('Should properly render callout variants', async () => {
  const variants = ['brand', 'success', 'neutral', 'warning', 'danger'];

  for (const variant of variants) {
    const callout = await fixture<WaCallout>(html`<wa-callout variant="${variant}">I am a callout</wa-callout>`);
    const base = callout.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base).to.have.class(`callout--${variant}`);
    await expect(callout).to.be.accessible();
  }
});
