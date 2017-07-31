const contributions = [
  {
    Category: 'Resources',
    Date_created_at: 'Dec 11 1707',
    contribution_id: '5655',
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
    contribution_id: '34',
    contributor: 'John Doe',
    contributor_id: '55',
    created_at: '2015-08-05T08:40:51.620Z',
    img_url: 'https://i.vimeocdn.com/portrait/4900311_640x640',
    status: 'approved',
    title: 'Dancing',
  },
  {
    Category: 'Ideas',
    Date_created_at: 'Jan 1 1203',
    contribution_id: '67683',
    contributor: 'Amaka Matt',
    contributor_id: '23',
    created_at: '2015-08-05T08:40:51.620Z',
    img_url: 'http://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg',
    status: 'rejected',
    title: 'Hair braiding',
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
