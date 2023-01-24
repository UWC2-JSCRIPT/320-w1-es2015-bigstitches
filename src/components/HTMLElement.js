// Define class here
export default class HTMLElement {
  // constructor variables
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    // use template literal to return element with content
    return (`<${this.tag}>${this.content}</${this.tag}>`);
  }
}
