const contributions = [
  {
    category: 'resource',
    contribution_id: '5655',
    contributor: 'Anne Jane',
    contributor_id: '24',
    created_at: '2015-08-05T08:40:51.620Z',
    date_created: 'Dec 11 1707',
    status: 'pending',
    title: 'Favourite language',
  },
  {
    category: 'skill',
    contribution_id: '34',
    contributor: 'John Doe',
    contributor_id: '55',
    created_at: '2015-08-05T08:40:51.620Z',
    date_created: 'July 4 1502',
    status: 'approved',
    title: 'Dancing',
  },
  {
    category: 'idea',
    contribution_id: '67683',
    contributor: 'Amaka Matt',
    contributor_id: '23',
    created_at: '2015-08-05T08:40:51.620Z',
    date_created: 'Jan 1 1203',
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
