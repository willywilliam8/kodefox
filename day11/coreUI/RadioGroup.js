//@flow
import React, {Children} from 'react';

type GroupProps = {
  name: string,
  children?: Array<React$Element<*>>,
};

let groupName;

export function RadioGroup(props: GroupProps) {
  let {name, children, ...otherProps} = props;
  groupName = name;
  return <div {...otherProps}>{children}</div>;
}

type ItemProps = {
  children?: Array<React$Element<*>>,
};

export function RadioItem(props: ItemProps) {
  let {children, ...otherProps} = props;

  return (
    <div {...otherProps}>
      <input name={groupName} type="radio" />
      <span>{children}</span>
    </div>
  );
}
