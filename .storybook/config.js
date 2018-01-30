import { configure } from '@storybook/react';
import '../bundles/main.css';

import './storybook-style.css';

function loadStories() {
  require('../stories/Breadcrumb');
  require('../stories/FooterMenu');
}

configure(loadStories, module);