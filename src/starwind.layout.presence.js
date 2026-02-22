/* starwind.layout.presence.js
   Defines the <sw-presence> custom element.

   This element is intentionally behaviorless: Presence is driven by CSS via:
     - sw-presence[data-state="visible|invisible|hidden|absent"]
     - sw-presence[animate~="entry|discrete"]
     - sw-presence[view-transition="presence"]
     - sw-presence[box]

   JS exists so you can:
   - register the element (so tooling/devtools recognize it as a custom element)
   - add behavior later without changing markup (e.g., timed hide, events, etc.)
*/

function defineElement(tagName, elementClass) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, elementClass);
  }
}

class SwPresence extends HTMLElement {}

export function defineSwPresence() {
  defineElement("sw-presence", SwPresence);
}
