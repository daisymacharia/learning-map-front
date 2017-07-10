import * as React from 'react';
import {render} from 'react-dom';

import Contributions from './contributions.componenet';

import res from './mockdata';

class ContributionsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      res: null,
    };
  }

  public componentDidMount() {
    this.setState({res});
  }

  public render() {
    return (
      <Contributions contributions={this.state.res} />
    );
  }
}

export default ContributionsPage;
