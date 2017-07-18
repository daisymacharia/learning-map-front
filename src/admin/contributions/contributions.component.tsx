import * as React from 'react';

// styling
import './contributions.scss';

/**
 * Render all the contributions
 *
 * @return {object} JSX for contributions component
 */
export class ContributionsComponent extends React.Component  <{}, {}> {
  public render() {
    return (
      <div id="contributions">
        Admin Contributions
      </div>
    );
  }
}
