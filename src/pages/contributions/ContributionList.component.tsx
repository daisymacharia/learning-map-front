import * as React from 'react';
import ContributionsCard from './ContributionsCard';

const ContributionList = ({contributions}) => {
    if (contributions.contributions) {
      return (
        <div className="container">
          {
            contributions.contributions.map((contribution) => {
              return <ContributionsCard key={contribution.contribution_id}
                  contributions={contribution}/>;
            })
          }
        </div>
      );
    }
    return <div></div>;
};

export default ContributionList;
