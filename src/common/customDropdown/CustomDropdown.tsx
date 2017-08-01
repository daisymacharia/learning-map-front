import * as React from 'react';

import Dropdown from 'react-toolbox/lib/dropdown';

import '../../../assets/css/font.scss';
import * as themes from './theme.css';

const CustomDropdown = (props: any) => {
  // const mergedTheme = Object.assign({}, themes, props.theme);
  return <Dropdown {...props} theme={themes} />;
};

export default CustomDropdown;
