import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div class='mt-6 bg-gray'>
        <div>Hello, World! I'm {this.getText()}</div>
        <h1>This is a web component h1</h1>
        <h2>This is a web component h2</h2>
        <h3>This is a web component h3</h3>
        <h4>This is a web component h4</h4>
      </div>
    );
  }
}
