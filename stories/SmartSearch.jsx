import React from 'react';
import { storiesOf } from '@storybook/react';
import SmartSearch from '../src/components/Search/SmartSearch';

storiesOf('SmartSearch', module)
  .add('Default', () => (
    <SmartSearch />
  ));
