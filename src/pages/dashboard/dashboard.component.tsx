import * as jwtDecode from 'jwt-decode';
import * as React from 'react';
import { Link } from 'react-router-dom';

// pages
import ContributionPage from '../contributions/ContributionPage.component';

// notifications
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

// styles
import 'react-toastify/dist/ReactToastify.min.css';
import '../../../assets/css/font.scss';
import './dashboard.scss';

/**
 * Dashboard Component
 *
 * Dashboard for The Learning Map
 */
export class DashboardComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {authorised: true};
  }

  public componentWillMount() {
    const cookie = document.cookie;
    this.authorizeUser(cookie);
  }

  /**
   * Authenticate the user
   *
   * Validate the user token
   */
  public authorizeUser(cookie) {
    const token = cookie.split('jwt-token=');
    if (token.length === 2) {
      const jwtToken = token[1];
      const decodedToken = jwtDecode(jwtToken);
      const role = (decodedToken.UserInfo.roles);

      if (!role || !role.Andelan) {
        document.cookie = '';
        localStorage.setItem('error', 'Unauthorised Access, Please Log in with your Andela Email');
        this.setState({authorised: false});
      }
    } else {
      this.setState({authorised: false});
    }
  }

  /**
   * Render the Learning map Dashboard
   *
   * @return {object} JSX for dashboard component
   */
  public render() {
    if (!this.state.authorised) {
      window.location.href = '/login';
      return;
    }
    return (
      <div>
        <ContributionPage />
      </div>
    );
  }
}
