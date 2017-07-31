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
