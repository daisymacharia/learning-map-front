import * as React from 'react';

import Input from 'react-toolbox/lib/input';

import * as themes from './theme.css';

const CustomTextInput = (props: any) => {
  // const mergedTheme = Object.assign({}, themes, props.theme);
  return <Input {...props} theme={themes} />;
};

export default CustomTextInput;
