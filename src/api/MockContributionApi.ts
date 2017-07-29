const contributions = [
  {
    Category: 'Resources',
    Date_created_at: 'Dec 11 1707',
    contribution_id: '77',
    contributor: 'Anne Jane',
    contributor_id: '24',
    created_at: '2015-08-05T08:40:51.620Z',
    img_url: 'http://www.st2299.com/data/wallpapers/65/wp-image-58225497.jpg',
    status: 'pending',
    title: 'Favourite language',
  },
  {
    Category: 'Skills',
    Date_created_at: 'July 4 1502',
    contribution_id: '56',
    contributor: 'John Doe',
    contributor_id: '55',
    created_at: '2015-08-05T08:40:51.620Z',
    img_url: 'https://i.vimeocdn.com/portrait/4900311_640x640',
    status: 'approved',
    title: 'Dancing',
  },
  {
    Category: 'Ideas',
    Date_created_at: 'July 4 1502',
    contribution_id: '65',
    contributor: 'Joseph Price',
    contributor_id: '55',
    created_at: '2015-08-05T08:40:51.620Z',
    img_url: 'http://www.kicnano.cornell.edu/wp-content/uploads/2010/12/Paszek-CBE-Cornell.jpg',
    status: 'approved',
    title: 'BlackBox',
  },
];

class MockContributionApi {
  public static getAllContributions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], contributions));
      });
    });
  }
}

export default MockContributionApi;
