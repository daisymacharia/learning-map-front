// src/pages/addskill/addskill.container.component.tsx

/*
* AddSkill main container component
* */

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import PathDropdown from './dropdown';
import './addskill.scss';

class AddSkillContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { active: false};

    this.addSkill = this.addSkill.bind(this);
    this.addPath = this.addPath.bind(this);
  }

  private addPath(event) {
    // add path
  }

  private addSkill(event) {
    // add skill
  }
  private handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  private actions = [
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
          <Input type="text" label="Skill"/>
          <PathDropdown />
          <Input type="text" multiline label="Why do you think this skill should be implemented?" />
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

function mapStateToProps(state, ownProps) {
  return {
    paths: state.paths,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillContainer);
