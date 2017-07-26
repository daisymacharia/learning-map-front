// src/pages/addskill/addskillpage.tsx

/**
 * Addskill component
 * main container for adding a new skill object
 */

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as React from 'react';
import * as Interfaces from '../../interfaces/skills';
import './addskill.scss';
import AddSkillForm from './addskillform.component';

class AddSkillPage extends React.Component<Interfaces.IProps, any> {
  constructor(props: Interfaces.IProps) {
    super(props);
    this.state = {
      active: false,
    };
    this.showDialog = this.showDialog.bind(this);
  }

  public showDialog() {
    // show or hide dialog state
    this.setState({ active : !this.state.active});
  }

  public render() {
    return (
      <AddSkillForm
        active={this.state.active}
        showDialog={this.showDialog}
        name={this.props.name}
        reason={this.props.reason}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    name: state.newSkill.name,
    reason: state.newSkill.reasonForImplementation,
  };
}

export default connect(mapStateToProps)(AddSkillPage);
