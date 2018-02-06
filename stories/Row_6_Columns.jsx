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

const mQTo6 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const mQTo6Default = "XL";

const mQTo3 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const mQTo3Default = "L";

const mQTo2 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const mQTo2Default = "M";

const mQTo1 = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const mQTo1Default = "S"

storiesOf('Row_6_Columns', module)
.addDecorator(withKnobs)
  .add('Default', () => (
    <Row_6_Columns columnWidths={select('Widths of the 6 columns:', col6Widths, defaultCol6Width)} 
        mediaQuery = {select('Break to 1x6 columns on screensize:', mQTo6, mQTo6Default)}
        breakTo2x3Columns = {{ mediaQuery: select('Break to 2x3 columns on screensize:', mQTo3, mQTo3Default), columnWidths: select('Width of the 3 columns:', col3Widths, defaultCol3Width) }} 
        breakTo3x2Columns = {{ mediaQuery: select('Break to 3x2 columns on screensize:', mQTo2, mQTo2Default), columnWidths: select('Width of the 2 columns:', col2Widths, defaultCol2Width) }}  
        breakTo6x1Column = {{ mediaQuery: select('Break to 6x1 column on screensize:', mQTo1, mQTo1Default) }}  />
  ));