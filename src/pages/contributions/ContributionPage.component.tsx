import { render } from 'react-dom';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'react-toolbox/lib/button';

import * as React from 'react';
import * as contributionsAction from '../../actions/ContributionsAction';
import * as interfaces from '../../interfaces/contributions.d';

import ContributionList from './ContributionList.component';

/**
 * @class ContributionPage
 * @extends {React.Component<any, any>}
 */
@connect((state) => {
  return {
    contributions: state,
  };
})

export class ContributionPage extends React.Component<interfaces.IContributionsPageProps,
interfaces.IContributionsPageState> {
  constructor(props: interfaces.IContributionsPageProps) {
    super(props);
    this.state = {
      contributions: {},
    };
  }

  /**
   * @memberof ContributionPage
   */
  public componentDidMount() {
    this.props.dispatch(contributionsAction.loadContributions());
  }

  /**
   * @param {object} nextProps
   * @memberof ContributionPage
   */
  public componentWillReceiveProps(nextProps) {
    const contributions = nextProps.contributions;
    this.setState({
      contributions,
    });
  }

  /**
   * @returns
   * @memberof ContributionPage
   */
  public render() {
    const contributions = this.state.contributions;
    return (
      <div><ContributionList contributions={contributions}/></div>
    );
  }
}

export default ContributionPage;
