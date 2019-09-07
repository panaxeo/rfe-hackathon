import { addParameters, configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}
addParameters({ options: { showPanel: false } });

configure(loadStories, module);
