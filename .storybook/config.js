import { configure } from '@storybook/react';
import '../bundles/main.css';
import './storybook-style.css';

function loadStories() {
  require('../stories/Breadcrumb');
  require('../stories/FooterMenu');
  require('../stories/GridGenerator');
  require('../stories/SmartSearch');
  require('../stories/Row_6_Columns');
}

configure(loadStories, module);