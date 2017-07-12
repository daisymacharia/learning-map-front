import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import './addskill.scss';

class SubmitButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Button label="Add skill" accent />
    );
  }
}

export default SubmitButton;
