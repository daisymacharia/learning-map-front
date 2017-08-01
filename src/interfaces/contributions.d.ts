import * as types from '../types';

/**
 * @interface IContributions
 */
interface IContributions {
  category?: string;
  date_created?: string;
  contribution_id?: string;
  contributor?: string;
  contributor_id?: string;
  created_at?: string;
  img_url?: string;
  status?: string;
  title?: string;
}

/**
 * @interface IContributionsPageProps
 */
interface IContributionsPageProps {
  Skill?: IContributions;
  Resources?: IContributions;
  Ideas?: IContributions;
  loadContributions?: () => void;
  dispatch?: (x) => void;
}

/**
 * @interface IContributionsActionProps
 */
interface IContributionsActionProps {
  contributions?: IContributions;
  type: types.LOAD_CONTRIBUTIONS_SUCCESS;
}

/**
 * @interface IContributionsPageState
 */
interface IContributionsPageState {
  contributions?: IContributions[];
}
