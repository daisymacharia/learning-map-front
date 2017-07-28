// src/pages/addskill/addskillpage.tsx

/**
 * Addskill component
 * main container for adding a new skill object
 */

import * as React from 'react';
import { connect } from 'react-redux';
import * as skillActions from '../../actions/skills';
import * as Interfaces from '../../interfaces/skills';
import './addskill.scss';
import AddSkillForm from './addskillform.component';

class AddSkillPage extends React.Component<Interfaces.IProp, any> {
  constructor(props: Interfaces.IProp) {
    super(props);
    this.state = {
      formActive: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.addSkillItem = this.addSkillItem.bind(this);
    this.handleFormState = this.handleFormState.bind(this);
  }

  public handleFormState() {
    this.setState({ formActive : !this.state.formActive});
  }

  public onSubmit() {
    this.props.addSkill(this.props.skill);
    this.handleFormState();
  }

  // update skill name or reason
  public addSkillItem(key, item) {
    this.props.addSkillItem(key, item);
  }

  public render() {
    return (
      <AddSkillForm
        name={this.props.name}
        active={this.state.formActive}
        onSubmit={this.onSubmit}
        addSkillItem={this.addSkillItem}
        handleFormState={this.handleFormState}
        reason={this.props.reason}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    name: state.newSkill.name,
    reason: state.newSkill.reasonForImplementation,
    skill: state.newSkill,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSkill: (skill) => dispatch(skillActions.addSkill(skill)),
    addSkillItem: (key, item) => dispatch(skillActions.addSkillItem(key, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillPage);
