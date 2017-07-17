import * as React from 'react';

// styling
import './home.scss';

/**
 * Home Component
 *
 * Landing page for The Learning Map
 */
export class HomeComponent extends React.Component <{}, {}> {
    /**
     * Render the home page
     *
     * @return {object} JSX for homepage component
     */
    public render() {
        return (
            <div id="landing">
              <div id="search-area">
                <form action="" method="post" >
                <label id="logo-bar"></label>
                <input type="text" id="search-bar" placeholder="What can you be today? Let's find out!"/>
                </form>
              </div>
              <div id="landing-body">
                  <span id="calm-abbreviation">C.A.L.M</span>
                  <br/>
                  <span id="calm">The Collective Andela Learning Map</span>
                  <div id="contribute-button">
                      <a href="#" className="btn btn-contribute">CONTRIBUTE</a>
                  </div>
              </div>
            </div>
        );
    }
}
