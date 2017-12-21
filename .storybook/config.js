import { configure } from '@storybook/react';
import '../bundles/main.css';

import './storybook-style.css';

function loadStories() {
  require('../stories/Breadcrumb');
}

configure(loadStories, module);