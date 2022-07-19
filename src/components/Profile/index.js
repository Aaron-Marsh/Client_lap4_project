import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./styles.css";
import { LoginFooter } from "../LoginFooter";

export const Profile = () => {
  let { username } = useParams();
  const [userData, setUserData] = useState({
    has_read: [{ title: "test" }],
    wants_to_read: [{ title: "test" }],
  });
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
      setUserData(await data);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    fetchUserOnLoad();
  }, []);

  return (
    <main className="main-profile">
      <div className="intro-wrapper">
        <h2 className="profile-title">Hey there! I'm {username}!</h2>
        <p className="about-me">{userData.about_me}</p>
      </div>

      <div className="shelf-user-wrapper">
        <div className="bookshelf">
          <h3>My Library</h3>
          <div className="shelf">
            <h3>Read Books</h3>
            {userData.has_read.map((book) => (
              <div
                className={
                  book.favourited
                    ? "shelf-favourited-book"
                    : "shelf-unfavourited-book"
                }
              >
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
          </div>

          <div className="shelf">
            <h3>Books I want to Read</h3>
            {userData.wants_to_read.map((book) => (
              <div>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
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
      </div>
    </main>
  );
};
