/// BareSpecifier=@vaadin/vaadin-material-styles/version
class Material extends HTMLElement {
  static get version() {
    return '1.3.2';
  }
}

customElements.define('vaadin-material-styles', Material);

export { Material };