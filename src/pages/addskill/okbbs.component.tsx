// src/pages/addskill/okbbs.container.component.tsx

/**
 * okbbs component
 */

import * as React from 'react';
import { connect } from 'react-redux';
import * as skillActions from '../../actions/skills';
import * as Interfaces from '../../interfaces/skills';
import './addskill.scss';
import Panel from './panel.component';

class Okbbs extends React.Component<Interfaces.ISkill, any> {
  constructor(props: Interfaces.ISkill) {
    super(props);
    this.state = {
      activeSection: '',
    };
    this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
    this.removeOkbbItem = this.removeOkbbItem.bind(this);
    this.addSkillItem = this.addSkillItem.bind(this);
  }
  public handleAccordionToggle(activePanel) {
    if (this.state.activeSection === activePanel) {
      // close panel if it's open
      this.setState({
        activeSection: '',
      });
    }else {
      this.setState({
        activeSection: activePanel,
      });
    }
  }
  public removeOkbbItem() {
    this.props.deleteSkillItem('key', 'item');
  }

  public addSkillItem(key, item) {
    this.props.addSkillItem(key, item);
  }
  public render() {
    return(
      <div>
        <h3>Provide OKBBs</h3>
        <Panel
          dataList={this.props.outputs}
          active={this.state.activeSection}
          addItem={this.addSkillItem}
          deleteItem={this.removeOkbbItem}
          handleToggle={this.handleAccordionToggle}
          title="Outputs"
        />
        <Panel
          dataList={this.props.knowledgeUnits}
          active={this.state.activeSection}
          addItem={this.addSkillItem}
          deleteItem={this.removeOkbbItem}
          handleToggle={this.handleAccordionToggle}
          title="Knowledge Units"
        />
        <Panel
          dataList={this.props.behaviours}
          active={this.state.activeSection}
          addItem={this.addSkillItem}
          deleteItem={this.removeOkbbItem}
          handleToggle={this.handleAccordionToggle}
          title="Behaviours"
        />
        <Panel
          dataList={this.props.beliefs}
          active={this.state.activeSection}
          addItem={this.addSkillItem}
          deleteItem={this.removeOkbbItem}
          handleToggle={this.handleAccordionToggle}
          title="Beliefs"
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    behaviours: state.newSkill.behaviours,
    beliefs: state.newSkill.beliefs,
    knowledgeUnits: state.newSkill.knowledgeUnits,
    outputs: state.newSkill.outputs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSkillItem: (key, item) => dispatch(skillActions.addSkillItem(key, item)),
    deleteSkillItem: (key, item) => dispatch(skillActions.deleteSkillItem(key, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Okbbs);
