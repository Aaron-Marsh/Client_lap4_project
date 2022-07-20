import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Bookcase } from "..";

export const Profile = () => {
  let { username } = useParams();

  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const user = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.loggedIn);

  let profile;

  const fetchUserOnLoad = async () => {
    try {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://read-herring.herokuapp.com/users/${username}`,
        options
      );
      if (data.error) {
        setError(data.error);
      } else {
        setUserData(data);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    fetchUserOnLoad();
  }, []);

  if (error) {
    profile = (
      <div className="profile-error">
        <p>No user exists with this name</p>
        <Link className="dark-light-button" to="/">
          Home
        </Link>
      </div>
    );
  } else if (user === username) {
    profile = (
      <main className="main-profile">
        <div className="intro-wrapper">
          <h2 className="profile-title">Welcome back, {username}!</h2>
          <p className="about-me">{userData.about_me}</p>
        </div>

        <div className="shelf-user-wrapper">
          <div className="bookshelf-container">
            <h3>Books I've Read</h3>
            <Bookcase data={userData.has_read} />
          </div>
          <div className="bookshelf-container">
            <h3>Books to read</h3>
            <Bookcase data={userData.has_read} />
          </div>
        </div>
      </main>
    );
  }

  //Another users profile
  else
    profile = (
      <main className="main-profile">
        <div className="intro-wrapper">
          <h2 className="profile-title">Hey there! I'm {username}!</h2>
          <p className="about-me">{userData.about_me}</p>
        </div>

        <div className="shelf-user-wrapper">
          <div className="bookshelf-container">
            <h3>Read Books</h3>
            <Bookcase data={userData.has_read} />
          </div>
        </div>

        {/* <div className='following-wrapper'>
					<h3>Followers</h3>

					<div className='following-users'>
						<div className='image-container'>
							<img alt='' src='https://www.placecage.com/c/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.placecage.com/g/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.placecage.com/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.placecage.com/gif/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.fillmurray.com/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.fillmurray.com/g/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.stevensegallery.com/200/300' />
						</div>
						<div className='image-container'>
							<img alt='' src='https://www.stevensegallery.com/g/200/300' />
						</div> */}
        {/* </div> */}
        {/* </div> */}
      </main>
    );

  return <>{profile}</>;
};
