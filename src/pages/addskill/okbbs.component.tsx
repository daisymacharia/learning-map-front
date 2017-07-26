// src/pages/addskill/okbbs.container.component.tsx

/**
 * okbbs component
 */

import * as React from 'react';
import * as Interfaces from '../../interfaces/skills';
import {connect, dispatch} from 'react-redux';
import './addskill.scss';
import Panel from './panel.component';

class Okbbs extends React.Component<Interfaces.IOkbbs, any> {
  constructor(props: Interfaces.IOkbbs) {
    super(props);
    this.state = {
      activeSection: '',
      // behaviours: ['behaviour-item-1', 'behaviour-item-2'],
      // beliefs: ['belief-item-1', 'belief-item-2'],
      // knowledgeUnits: ['knowledge-item-1', 'knowledge-item-2'],
      // outputs: ['output-item-1', 'output-item-2'],

    };
    this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
    this.addOkbbItem = this.addOkbbItem.bind(this);
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
  public addOkbbItem(title, item) {
    // switch (title) {
    //   case 'Outputs':
    //     const outputs = this.state.outputs.slice();
    //     outputs.push(item);
    //     this.setState({
    //       outputs,
    //     });
    //     break;
    //   case 'Knowledge Units':
    //     const knowledgeUnits = this.state.knowledgeUnits.slice();
    //     knowledgeUnits.push(item);
    //     this.setState({
    //       knowledgeUnits,
    //     });
    //     break;
    //   case 'Behaviours':
    //     const behaviours = this.state.behaviours.slice();
    //     behaviours.push(item);
    //     this.setState({
    //       behaviours,
    //     });
    //     break;
    //   case 'Beliefs':
    //     const beliefs = this.state.beliefs.slice();
    //     beliefs.push(item);
    //     this.setState({
    //       beliefs,
    //     });
    //     break;
    //   default:
    //     return this.state;
    // }

  }
  public render() {
    return(
      <div>
        <h3>Provide OKBBs</h3>
        <Panel dataList={this.props.outputs} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Outputs" />
        <Panel dataList={this.props.knowledgeUnits} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Knowledge Units" />
        <Panel dataList={this.props.behaviours} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Behaviours" />
        <Panel dataList={this.props.beliefs} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Beliefs" />
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

function mapDispatchToProps() {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Okbbs);
