// src/pages/addskill/addskillpage.tsx

/**
 * Addskill component
 * main container for adding a new skill object
 */

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import './addskill.scss';
import AddSkillForm from './addskillform.component';

class AddSkillPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false,
      errors: [],
      // skill initial state: empty fields
      skill: {
        name: '',
        okbbs: {
          behaviours: [],
          beliefs: [],
          knowledgeUnits: [],
          outputs: [],
        },
        reasonForImplementation: '',
      },
    };

    this.addSkill = this.addSkill.bind(this);
    this.aggregateSkillObject = this.aggregateSkillObject.bind(this);
    this.showDialog = this.showDialog.bind(this);
  }

  public showDialog() {
    // show or hide dialog state
    this.setState({ active : !this.state.active});
  }

  public aggregateSkillObject(event) {
    // aggregate skill object for posting
  }

  public addSkill(event) {  // receive new skill object
    /*
    * if object State is valid (minimum data provided)
    * trigger saving current state of skill object to backend
    * */

  }

  public render() {
    return (
      <AddSkillForm active={this.state.active} showDialog={this.showDialog} skill={this.state.skill} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // currently no state is needed
  };
}

export default connect(mapStateToProps)(AddSkillPage);
