// src/starwind.layout.presence.js
function defineElement(tagName, elementClass) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, elementClass);
  }
}
var SwPresence = class extends HTMLElement {
};
function defineSwPresence() {
  defineElement("sw-presence", SwPresence);
}
export {
  defineSwPresence
};
