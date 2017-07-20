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
  }

  public actions = [
    { label: 'Submit', onClick: this.props.showDialog },
  ];

  public render() {
    return (
      <div>
        <Button label="Contribute a Skill" onClick={this.props.showDialog} />
        <Dialog
          actions={this.actions}
          active={this.props.active}
          onEscKeyDown={this.props.showDialog}
          onOverlayClick={this.props.showDialog}
          title="Suggest a skill"
          className="overflow-wrapper"
        >
          <Input type="text" label="skill name" />
          <Input type="text" multiline label="Add a reason for implementation" />
          <Okbbs okbb={this.props.skill.okbbs} /> {/*Pass Okbbs object*/}
        </Dialog>
      </div>
    );
  }
}

export default AddSkillForm;
