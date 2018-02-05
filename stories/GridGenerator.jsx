import React from 'react';
import { storiesOf } from '@storybook/react';
import Main2Column6_6 from '../src/components/Main/GridGenerator';
import Main3Column4_4_4 from '../src/components/Main/GridGenerator';

storiesOf('GridGenerator', module)
  .add('Default', () => (
        <Main2Column6_6/>
        <Main3Column4_4_4/>
  ));
