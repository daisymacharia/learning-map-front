import * as React from 'react';
import { Link } from 'react-router-dom';

// notifications
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

// configurations
import { config } from '../../config';

// styles
import 'react-toastify/dist/ReactToastify.min.css';
import '../../../assets/css/font.scss';
import './login.scss';

/**
 * Home Component
 *
 * Landing page for The Learning Map
 */
export class LoginComponent extends React.Component<{}, {}> {
  /**
   * Render the login page
   *
   * @return {object} JSX for login component
   */
  public render() {
    const options = {
      autoClose: 3,
      hideProgressBar: true,
    };
    const loginError = localStorage.getItem('error');

    // Display Login Error
    if (loginError) {
      toast(
        <div id="toaster">
          {loginError}
        </div>,
        options);
      localStorage.clear();
    }

    return (
      <div id="landing">
        <div id="landing-body">
          <span id="calm-abbreviation">C.A.L.M</span>
          <br />
          <span id="calm">The Collective Andela Learning Map</span>
            <a className="btn" id="btn-login"
               href={`${config.ANDELA_API_BASE_URL}/login?redirect_url=${config.BASE_URL}`}>
              <div id="login-button">login to contribute</div>
            </a>
          <div id="toast-container">
            <ToastContainer />
          </div>
        </div>
      </div>
    );
  }
}
