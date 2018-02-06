import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import GridBuilder from '../src/components/Grid/GridBuilder';

const maxColumns = [
  "6",
  "4",
  "3",
  "2",
  "1"
];

const maxColumnsDefault = 6;

const col6Widths = [
    "equal",
    "1-3-1-3-1-3",
    "3-1-3-1-3-1",
    "1-1-4-4-1-1",
    "1-4-1-1-4-1"
];

const col4Widths = [
  "equal",
  "2-4-4-2",
  "4-2-2-4"
];

const col3Widths = [
    "equal",
    "2-8-2",
    "1-10-1"
];

const col2Widths = [
    "equal",
    "4-8",
    "8-4",
    "3-9",
    "9-3",
    "2-10",
    "10-2"
];

const defaultCol6Width = "equal";
const defaultCol4Width = "equal";
const defaultCol3Width = "equal";
const defaultCol2Width = "equal";

const mediaQueries = [
    "none",
    "S",
    "M",
    "L",
    "XL"
];

const mQTo6Default = "XL";
const mQTo4Default = "XL";
const mQTo3Default = "L";
const mQTo2Default = "M";
const mQTo1Default = "S";

storiesOf('GridBuilder', module)
.addDecorator(withKnobs)
  .add('Default', () => (
    <GridBuilder  
      columnsInRowOnLargestScreen = {select('Columns in row on largest screen:', maxColumns, maxColumnsDefault)}
      breakTo6Columns = {{ mediaQuery: select('Break to 6 columns on screensize:', mediaQueries, mQTo6Default), columnWidths: select('Widths of the 6 columns:', col6Widths, defaultCol6Width) }} 
      breakTo4Columns = {{ mediaQuery: select('Break to 4 columns on screensize:', mediaQueries, mQTo4Default), columnWidths: select('Widths of the 4 columns:', col4Widths, defaultCol4Width) }} 
      breakTo3Columns = {{ mediaQuery: select('Break to 3 columns on screensize:', mediaQueries, mQTo3Default), columnWidths: select('Widths of the 3 columns:', col3Widths, defaultCol3Width) }} 
      breakTo2Columns = {{ mediaQuery: select('Break to 2 columns on screensize:', mediaQueries, mQTo2Default), columnWidths: select('Widths of the 2 columns:', col2Widths, defaultCol2Width) }}  
      breakTo1Column = {{ mediaQuery: select('Break to 1 column on screensize:', mediaQueries, mQTo1Default) }}  />
  ));