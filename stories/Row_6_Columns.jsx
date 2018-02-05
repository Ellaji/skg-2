import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import Row_6_Columns from '../src/components/Grid/Row_6_Columns';

const col6Widths = [
    "equal",
    "1-3-1-3-1-3",
    "3-1-3-1-3-1",
    "1-1-4-4-1-1",
    "1-4-1-1-4-1"
]

const defaultCol6Width = "equal";

const col3Widths = [
    "equal",
    "2-8-2",
    "1-10-1"
]

const defaultCol3Width = "equal";

const col2Widths = [
    "equal",
    "4-8",
    "8-4",
    "3-9",
    "9-3",
    "2-10",
    "10-2"
];

const defaultCol2Width = "equal";

const MQ3 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const MQ2 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const MQ1 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

storiesOf('Row_6_Columns', module)
.addDecorator(withKnobs)
  .add('Default', () => (
    <Row_6_Columns /*NOG DOEN image={{url: select('Image', imageSources, defaultImageSource)}}*/ />
  ));