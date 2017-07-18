import * as React from 'react';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import Dialog from 'react-toolbox/lib/dialog';
import AddResourceForm from '../../components/resources/AddResource.component';
import { IHomeProps } from '../../interfaces/home.d';
import { IHomeState } from '../../interfaces/home.d';

// styling
import './HomePage.scss';

/**
 * Home Component
 *
 * Landing page for The Learning Map
 */

export class HomeComponent extends React.Component<IHomeProps, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };

    this.toggleDialog = this.toggleDialog.bind(this);
  }

  /**
   * Render the home page
   *
   * @return {object} JSX for homepage component
   */
  public render() {
    return (
      <Router>
        <div id="landing">
          <div id="search-area">
            <form action="" method="post" >
              <label id="logo-bar"></label>
              <input type="text" id="search-bar" placeholder="What can you be today? Let's find out!" />
            </form>
          </div>
          <div id="landing-body">
            <span id="calm-abbreviation">C.A.L.M</span>
            <br />
            <span id="calm">The Collective Andela Learning Map</span>
            <div className="dropdown">
              <a className="btn" id="btn-contribute">
                <div id="contribute-button">CONTRIBUTE</div>
              </a>
              <div className="dropdown-content">
                <br />
                <Link to="/resource"><div>ADD A RESOURCE</div></Link>
                <Link to="/idea"><div>ADD AN IDEA</div></Link>
                <Link to="/skill"><div>ADD AN OKBB</div></Link>
              </div>
            </div>
             <Route path="/resource" render={({history}) => (
                <Dialog
                  active={this.state.active}
                  className="dialog"
                  onEscKeyDown={() => {
                    history.push('/');
                  }}
                  onOverlayClick={() => {
                    history.push('/');
                  }}
                  type="fullscreen"
                >
                   <AddResourceForm toggle={this.toggleDialog} />
                </Dialog>)
              } />
          </div>
          <div id="btn-all-contribute">
            <a href="/contributions" className="btn btn-all-contribute">ALL CONTRIBUTIONS</a>
          </div>
        </div>
      </ Router>
    );
  }

  public toggleDialog = () => {
    this.setState((prevState) => ({active: !prevState.active}), () => {
      if (!this.state.active) {
        this.props.history.push('/');
        location.reload();
      }
    });
  }
}
