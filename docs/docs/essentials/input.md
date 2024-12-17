---
title: Form Inputs
tags: essentials
---

## Forms

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;" class="wa">

<label for="input-text">Input (text)</label>
<input type="text" id="input-text" placeholder="placeholder">

<wa-input label="WA Input (text)" type="text" placeholder="placeholder"></wa-input>

<label for="input-number">Input (number)</label>
<input type="number" id="input-number">

<wa-input label="WA Input (number)" type="number"></wa-input>

<label for="input-password">Input (password)</label>
<input type="password" id="input-password" required>

<wa-input label="WA Input (password)" type="password" required></wa-input>

<label for="input-datetime-local">Input (datetime-local)</label>
<input type="datetime-local" id="input-datetime-local"></input>

<wa-input label="WA Input (datetime-local)" type="datetime-local"></wa-input>

<label for="input-email">Input (email)</label>
<input type="email" id="input-email">

<wa-input label="WA Input (email)" type="email"></wa-input>

<label for="input-search">Input (search)</label>
<input type="search" id="input-search">

<wa-input label="WA Input (search)" type="search"></wa-input>

<label for="input-tel">Input (tel)</label>
<input type="tel" id="input-tel">

<wa-input label="WA Input (tel)" type="tel"></wa-input>

<label for="input-url">Input (url)</label>
<input type="url" id="input-url">

<wa-input label="WA Input (url)" type="url"></wa-input>

<input type="checkbox" id="input-checkbox"></input>
<label for="input-checkbox">Input (checkbox)</label>

<wa-checkbox>WA Checkbox</wa-checkbox>

<label for="input-color">Input (color)</label>
<input type="color" id="input-color"></input>

<wa-color-picker label="WA Color Picker"></wa-color-picker>

<label for="input-date">Input (date)</label>
<input type="date" id="input-date"></input>

<wa-input label="WA Input (date)" type="date"></wa-input>

<label for="input-time">Input (time)</label>
<input type="time" id="input-time"></input>

<wa-input label="WA Input (time)" type="time"></wa-input>

<fieldset>
  <legend>Radio Group:</legend>
  <input type="radio" id="radio-1" name="radio" value="radio-1" checked />
  <label for="radio-1">Radio 1</label>
  <input type="radio" id="radio-2" name="radio" value="radio-2" />
  <label for="radio-2">Radio 2</label>
  <input type="radio" id="radio-3" name="radio" value="radio-3" />
  <label for="radio-3">Radio 3</label>
</fieldset>

<fieldset>
  <wa-radio-group label="WA Radio Group:" name="wa-radio" value="radio-1">
    <wa-radio value="radio-1">Radio</wa-radio>
    <wa-radio value="radio-2">Radio</wa-radio>
    <wa-radio value="radio-3">Radio</wa-radio>
  </wa-radio-group>
</fieldset>

<label for="input-range">Input (range)</label>
<input type="range" id="input-range">

<wa-range label="WA Range"></wa-range>

<div>
  <label for="textarea">Textarea</label>
  <textarea id="textarea"></textarea>
</div>

<wa-textarea label="WA Textarea"></wa-textarea>

<div>
<label for="select">Select</label>
  <select id="select">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </select>
</div>

<wa-select label="WA Select">
  <wa-option value="option-1">Option 1</wa-option>
  <wa-option value="option-2">Option 2</wa-option>
  <wa-option value="option-3">Option 3</wa-option>
</wa-select>


</div>

