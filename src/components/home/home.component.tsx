import * as React from 'react';
import './home.scss';
import AddSkillForm from '../../pages/addskill/addskill.component';

class SubmitButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <AddSkillForm />
    );
  }
}

export default SubmitButton;
