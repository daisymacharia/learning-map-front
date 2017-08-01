import * as React from 'react';
import { render } from 'react-dom';

import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import IdeaForm from '../../components/contributions/ideaForm/IdeaForm.component';

import '../../../assets/css/font.scss';
import './FormsPage.scss';

const formDisplayed = {
  idea: <IdeaForm />,
};

/**
 * @class FormsPage
 * @extends {React.Component<any, any>}
 */

export class ContributionFormPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      formToDisplay: 'idea',
    };
  }

  /**
   * @memberof ContributionPage
   */
  public componentDidMount() {
  }

  /**
   * @returns
   * @memberof FormsPage
   */
  public render() {
    return (
      <div className="forms-page">
        <div className="go-back">
          {'<  GO BACK'}
        </div>
        <div className="contribute-new-header">
        </div>
        {formDisplayed[this.state.formToDisplay]}
      </div>
    );
  }
}
