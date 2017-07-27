/**
 * Add skill form (a modal/dialog for adding a skill)
 * base UI for add skill
 *
 * receives addskill actions
 */

import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import './addskill.scss';
import Okbbs from './okbbs.component';

class AddSkillForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      actions: [
        { label: 'Submit', onClick: this.props.onSubmit},
      ],
      active: false,
      name: '',
      reason: '',
    };
    this.showDialog = this.showDialog.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputReason = this.handleInputReason.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateReason = this.updateReason.bind(this);
  }

  public showDialog() {
    // show or hide dialog state
    this.setState({ active : !this.state.active});
  }

  public handleInputName(data) {
    this.setState({
      name: data,
    });
  }

  public handleInputReason(data) {
    this.setState({
      reason: data,
    });
  }

  public updateName() {
    this.props.addSkillItem('name', this.state.name);
  }

  public updateReason() {
    this.props.addSkillItem('reasonForImplementation', this.state.reason);
  }

  public render() {
    return (
      <div>
        <Button label="Contribute a Skill" onClick={this.showDialog} />
        <Dialog
          actions={this.state.actions}
          active={this.state.active}
          onEscKeyDown={this.showDialog}
          onOverlayClick={this.showDialog}
          title="Suggest a skill"
          className="overflow-wrapper"
        >
          <Input type="text" value={this.state.name} label="skill name"
                 onChange={this.handleInputName} onBlur={this.updateName} />
          <Input type="text" value={this.state.reason} multiline label="Add a reason for implementation"
                 onChange={this.handleInputReason}
                 onBlur={this.updateReason} />
          <Okbbs />
        </Dialog>
      </div>
    );
  }
}

export default AddSkillForm;
