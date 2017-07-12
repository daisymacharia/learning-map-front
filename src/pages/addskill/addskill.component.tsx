import * as React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import {Button} from 'react-toolbox/lib/button';
import './addskill.scss';

class AddSkillForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { active: false};
  }
  private handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  private actions = [
    { label: 'Cancel', onClick: this.handleToggle },
    { label: 'Submit', onClick: this.handleToggle },
  ];

  public render() {
    return (
      <div>
        <Button label="Contribute a new skill" onClick={this.handleToggle} raised primary />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          type="large"
          title="Contribute a New Skill"
        >
          <p>Skill inputfield</p>
          <p>Paths dropdown input</p>
          <p>Reason for implementing this skill</p>
          <ul>
            <li>Output accordion</li>
            <li>Knowledge units accordion</li>
            <li>Behaviours accordion</li>
            <li>Beliefs accordion</li>
          </ul>
        </Dialog>
      </div>
    );
  }
}

export default AddSkillForm;
