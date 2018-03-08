import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={`${
              process.env.PUBLIC_URL
            }/images/scramn_clash_clear_background-white.png`}
            className="App-logo"
            alt="logo"
          />
        </header>

        <div className="wrapper">
          <img
            src={`${
              process.env.PUBLIC_URL
            }/images/scramn-atlanta-music-hip-hop-rap.jpg`}
            className="mainImage"
          />

          <p className="socialLinks">
            <a href="http://scramn.bigcartel.com/" target="_blank">
              <i className="fab fa-shopping-cart" /> Shop Merch
            </a>
            <a
              href="https://open.spotify.com/artist/4MNOkLcT6OFd5C5HyLEruo"
              target="_blank"
            >
              <i className="fab fa-spotify" /> Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/artist/scramn/1103941090"
              target="_blank"
            >
              <i className="fab fa-apple" /> Apple
            </a>
            <a
              href="https://play.google.com/store/music/artist/Scramn?id=A7a4nguohd7tdk7fszy3ab7xqam"
              target="_blank"
            >
              <i className="fab fa-google" /> Google Play
            </a>
            <a
              href="https://www.amazon.com/s/ref=ntt_srch_drd_B01E8SAFEA?ie=UTF8&field-keywords=Scramn&index=digital-music&search-type=ss"
              target="_blank"
            >
              <i className="fab fa-amazon" /> Amazon
            </a>
            <a href="https://www.instagram.com/scramn13/" target="_blank">
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a href="https://www.facebook.com/SCRAMN13/" target="_blank">
              <i className="fab fa-facebook" /> Facebook
            </a>
          </p>

          <hr />

          <p className="App-intro">
            <a href="https://play.google.com/store/music/album/Scramn_Otw_Home_feat_Fish_Scales_Jozepi_Starfire?id=Bnujj2plmigtkqcykz6a6fnpbee">
              New Single - OTW Home
            </a>
          </p>

          <a href="https://play.google.com/store/music/album/Scramn_Otw_Home_feat_Fish_Scales_Jozepi_Starfire?id=Bnujj2plmigtkqcykz6a6fnpbee">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/scramn-otw-home-fishscales-nappy-roots-jozepistarfire.jpg`}
              className="mainImage"
            />
          </a>

          <hr />

          <p className="App-intro">
            <a href="https://fanlink.to/scramn-paydirt">New Album - Paydirt</a>
          </p>

          <a href="https://fanlink.to/scramn-paydirt">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/Scramn-Paydirt-newsouth.jpg`}
              className="mainImage"
            />
          </a>

          <h3>
            Highly anticipated new album from Scramn, executive produced by
            Bubba Mathis (Sparxxx)!
          </h3>

          <p>
            Features include: Bubba Mathis (Sparxxx), Rico Wade, Nappy Roots (
            Fish Scales + Big V ), Jabba Jaw, Attitude, Bizarre, Jarren Benton,
            Bonecrusher, Sketch McGuinney & Grip Plyaz.
          </p>

          <p>
            Producers + DJ's: DJ Chris Crisis, Insane Beatz, Organized Noize,
            Vitallaz, Ribah on the Beat, Phivestarr, Mr. Enok, Skapezilla, Mike
            "BB Swing" Ownens & DJ KO.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
