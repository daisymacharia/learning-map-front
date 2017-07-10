import * as React from 'react';
import {render} from 'react-dom';

import {Button} from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardText, CardTitle  } from 'react-toolbox/lib/card';

const Contribute = (props: any) => {
  const contribution = props.contribution;
  return (
    <Card style={{width: '350px'}}>
    <CardTitle
      avatar={contribution.contributors_image}
      title={contribution.contributor}
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title={contribution.title}
      subtitle={contribution.created_at}
    />
    <CardActions>
      <Button label="Details" />
    </CardActions>
  </Card>
  );
};

export default Contribute;
