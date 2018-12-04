// @flow
import React, {Component} from 'react';
import {RadioGroup, RadioItem} from './coreUI/RadioGroup';

type Props = {
  store: Store,
};

function App(props: Props) {
  return (
    <div>
      <RadioGroup name="favColor">
        <RadioItem>Red</RadioItem>
        <RadioItem>Green</RadioItem>
        <RadioItem>Blue</RadioItem>
      </RadioGroup>
      <div style={{height: 20}} />
      <RadioGroup name="favSport">
        <RadioItem>Badminton</RadioItem>
        <RadioItem>Soccer</RadioItem>
        <RadioItem>Basketball</RadioItem>
      </RadioGroup>
    </div>
  );
}

export default App;
