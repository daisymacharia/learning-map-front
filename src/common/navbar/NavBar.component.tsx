import * as React from 'react';
import Avatar from 'react-toolbox/lib/avatar';

import './NavBar.scss';

export class NavBar extends React.Component <any, any> {

  /**
   * @returns div
   * @memberof NavBar
   */
  public render() {
    const image = '/Andela-logo-condensed-blue.png';
    return (
      <div className="nav-bar">
        <div className="container">
          <div className="left-controls">
            <a className="menu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </a>
            <div className="logo">
              {
                (image) ? <img src={image}/>
                : <h1>CALM</h1>
              }
            </div>
          </div>
          <div className="controls">
            <div className="more">
              <div className="more-circle">
              </div >
              <div className="more-circle">
              </div>
              <div className="more-circle">
              </div>
            </div>
            <div className="vertical-line">
            </div>
            <div className="add-icon">
              <div className="vertical-line">
              </div>
              <div className="horizontal-line">
              </div>
              <div className="thrid-line">
              </div>
            </div>
            <div className="alert">
              <i className="material-icons">notifications_none</i>
            </div>
            <div className="profile-pic">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
