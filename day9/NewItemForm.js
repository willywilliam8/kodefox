// @flow
import React, {Component} from 'react';

type Props = {
  onAddItem: (content: string) => void,
  inputValue: string,
  onTextChange: () => void,
};

class NewItemForm extends Component<Props> {
  render() {
    let {onTextChange, inputValue, onAddItem} = this.props;

    return (
      <div>
        <input type="text" value={inputValue} onChange={onTextChange} />
        <button onClick={() => onAddItem(inputValue)}>Submit</button>
      </div>
    );
  }
}

export default NewItemForm;
