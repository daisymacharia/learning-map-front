import * as React from 'react';
import ContributionsCard from './ContributionsCard';

const ContributionList = ({ contributions }) => {
  if (contributions) {
    return (
      <div className="row">
        {
          contributions.map((contribution) => {
            return <ContributionsCard key={contribution.contribution_id}
              contributions={contribution} />;
          })
        }
      </div>
    );
  }

  return <div></div>;
};

export default ContributionList;
