import * as React from 'react';

import './Contribution.scss';

const getCategoryClass = (cardCategory) => {
 return `category category-${cardCategory}`;
};

export const ContributionsCard = ({ contributions }) => {

  const title = `Title: ${contributions.title}`;
  return (
    <div className="contribution-card">
      <div className={getCategoryClass(contributions.category)}>
        <div className="neutral-state">
          <div className="category-type">
            <i className="large material-icons">lightbulb_outlines</i>
          </div>
        </div>

        <div className="hover-state">
          <div className="category-type">
            <i className="large material-icons">lightbulb_outlines</i>
            <span id="category-text">{contributions.category}</span>
          </div>
          <div className="category-row">
            <span className="title">PATH</span>
            <span className="value">Entrepreneur</span>
          </div>
          <div className="category-row">
            <span className="title">LEVEL</span>
            <span className="value">D3+</span>
          </div>
        </div>
      </div>
      <div className="details">
        <a className="bookmark">
          <i className="large material-icons">bookmark</i>
        </a>
        <h4 className="title">{contributions.title}</h4>
        <p>
          Lorem
        </p>
        {/*tags*/}
        <div className="tags">
          <span className="tag">sample</span>
        </div>

        {/*votes*/}
        <div className="footer">
          <div className="vote-count">
            <i className="large material-icons">keyboard_arrow_up</i>
            <span>34</span>
          </div>

          {/*comment count*/}
          <div className="comment-count">
            <i className="large material-icons">chat</i>
            <span>34</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionsCard;
