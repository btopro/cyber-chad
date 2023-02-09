import { html } from 'lit';
import '../src/cyber-chad.js';

export default {
  title: 'CyberChad',
  component: 'cyber-chad',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <cyber-chad
      style="--cyber-chad-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </cyber-chad>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
