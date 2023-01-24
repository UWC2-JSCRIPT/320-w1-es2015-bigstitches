// Import HTMLElement here
import HTMLElement from './HTMLElement';
// Define class here
export default class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }
}
