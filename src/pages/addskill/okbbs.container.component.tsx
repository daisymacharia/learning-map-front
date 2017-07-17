// src/pages/addskill/okbbs.container.component.tsx

/*
* okbbs container component
* */

import * as React from 'react';
import { connect } from 'react-redux';

class OkbbsContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.addOutputItem = this.addOutputItem.bind(this);
    this.addKnowledgeUnitItem = this.addKnowledgeUnitItem.bind(this);
    this.addBehaviourItem = this.addBehaviourItem.bind(this);
    this.addBeliefItem = this.addBeliefItem.bind(this);
  }

  private addOutputItem(event) {
    // add Output item
  }

  private addKnowledgeUnitItem(event) {
    // add KnowledgeItem
  }

  private addBehaviourItem(event) {
    // add BehaviourItem
  }

  private addBeliefItem(event) {
    // add BehaviourItem
  }
  public render() {
    return(
      <div>
        OKBBs Accordion
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OkbbsContainer);

