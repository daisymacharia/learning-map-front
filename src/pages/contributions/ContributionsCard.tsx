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
      <div className="row" id="card-row">
        <Card className="card-main">
          <CardTitle className="main-title"
            avatar={contributions.img_url}
            title={contributions.contributor}
            subtitle={contributions.status}
          />
          <CardMedia className="card-media"
            aspectRatio="wide"
            image={image}
          />
          <CardTitle className="card-title"
            title={contributions.Category}
            subtitle={title}
          />
        </Card>
      </div>
  );
};

export default ContributionsCard;
