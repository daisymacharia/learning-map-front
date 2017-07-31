import * as React from 'react';

import {Button} from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';

import './Contribution.scss';

let image = '';

const checkCategory = (contributionsCat) => {
  if (contributionsCat === 'Ideas') {
    image = 'https://redpill.net/wp-content/uploads/2016/11/red-pill-resources.jpg';
  } else if (contributionsCat === 'Skills') {
    image = 'http://pmskills.in/yahoo_site_admin/assets/images/Project-Management-Skills-NASA.20474727_std.jpg';
  } else if (contributionsCat === 'Resources') {
    image = 'http://www.gapcap.co.uk/wp-content/uploads/2017/04/43686826_m.jpg';
  }
};

export const ContributionsCard = ({ contributions }) => {
  checkCategory(contributions.Category);

  const title = `Title: ${contributions.title}`;
  return (
    <div className="contribution-card">
      <div className="category">
        <div className="neutral-state">
          <div className="category-type">
            <i className="large material-icons">lightbulb_outlines</i>
          </div>
        </div>

        <div className="hover-state">
          <div className="category-type">
            <i className="large material-icons">lightbulb_outlines</i>
            <span>IDEA</span>
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
        <h4 className="title">Facts and Truths</h4>
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
