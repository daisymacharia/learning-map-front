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

class AddSkillPage extends React.Component<Interfaces.ISkill, any> {
  constructor(props: Interfaces.ISkill) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.addSkillItem = this.addSkillItem.bind(this);
  }

  public onSubmit() {
    this.props.addSkill('key', 'name');
  }

  // update skill name or reason
  public addSkillItem(key, item) {
    this.props.addSkillItem(key, item);
  }

  public render() {
    return (
      <AddSkillForm
        name={this.props.name}
        onSubmit={this.onSubmit}
        addSkillItem={this.addSkillItem}
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

function mapDispatchToProps(dispatch) {
  return {
    addSkill: () => dispatch(skillActions.addSkill(this.state)),
    addSkillItem: (key, item) => dispatch(skillActions.addSkillItem(key, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillPage);
