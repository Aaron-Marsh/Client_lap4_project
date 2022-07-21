import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../actions";
import { Bookcase } from "..";

export const Profile = () => {
  let { username } = useParams();

  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data.username);

  const aboutMe = useSelector((state) => state.user.data.about_me);

  const loggedIn = useSelector((state) => state.loggedIn);

  const userHasReadBooks = useSelector((state) => state.user.data.has_read);
  const userWantsToReadBooks = useSelector(
    (state) => state.user.data.wants_to_read
  );

  let profile;

  // edit
  const [isEditShown, setIsEditShown] = useState(false);

  const [currentAboutMe, setCurrentAboutMe] = useState("");

  useEffect(() => {
    setCurrentAboutMe(aboutMe);
  }, [aboutMe]);

  const handleEditButton = () => {
    handleEditShown();
  };

  const handleEditShown = () => setIsEditShown((current) => !current);

  // Edit Comment **********************************************
  const handleEditEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `https://read-herring.herokuapp.com/users/${username}`,
        data: {
          method: "edit_about_me",
          about_me: currentAboutMe,
        },
      });
      fetchUser();
    } catch (err) {
      throw new Error(err.message);
    }
    handleEditButton();
  };

  const fetchUser = async () => {
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
        throw new Error(data.error);
      } else {
        dispatch(setUser(data));
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Edit Reply Input Handler
  const handleEditAboutMe = (e) => setCurrentAboutMe(e.target.value);

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

  // if (error) {
  //   profile = (
  //     <div className="profile-error">
  //       <p>No user exists with this name</p>
  //       <Link className="dark-light-button" to="/">
  //         Home
  //       </Link>
  //     </div>
  //   );
  // } else if (user === username) {
  //   profile = (
  //     <main className="main-profile">
  //       <div className="intro-wrapper">
  //         <div className="intro-container">
  //           <h2 className="profile-title">Welcome back, {username}!</h2>
  //         </div>
  //         <div className="about-container">
  //           <div>Profile image goes here</div>
  //           <div className="about-section">
  //             {!isEditShown && <p className="about-me">{currentAboutMe}</p>}
  //             {!isEditShown && (
  //               <button
  //                 className="white-button edit-about-button"
  //                 onClick={setIsEditShown}
  //               >
  //                 Edit
  //               </button>
  //             )}
  //             {isEditShown && (
  //               // EDIT MESSAGE FORM
  //               <form className="about-form" onSubmit={handleEditEvent}>
  //                 <label htmlFor="edit"></label>
  //                 <textarea
  //                   type="text"
  //                   id="edit"
  //                   rows="4"
  //                   name="edit"
  //                   className="white-input"
  //                   value={currentAboutMe}
  //                   onChange={handleEditAboutMe}
  //                 />
  //                 <input
  //                   type="submit"
  //                   value="Save"
  //                   className="white-button save-about-button"
  //                   disabled={!loggedIn}
  //                 ></input>
  //               </form>
  //             )}
  //           </div>
  //         </div>
  //         {/* ********** Edit Button ********** */}
  //       </div>
  //       {/* ********** bookshelves ************** */}
  //       <div className="shelf-user-wrapper">
  //         <div className="bookshelf-container">
  //           <div>
  //             <h3 className="bookshelf-title">Books I've Read</h3>
  //           </div>
  //           <Bookcase data={userHasReadBooks} />
  //         </div>
  //         <div className="bookshelf-container">
  //           <h3 className="bookshelf-title">Books to read</h3>
  //           <Bookcase data={userWantsToReadBooks} />
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  // //Another users profile
  // else {
  //   profile = (
  //     <main className="main-profile">
  //       <div className="intro-wrapper">
  //         <div className="intro-container">
  //           <h2 className="profile-title">
  //             Check out {username}'s collection!
  //           </h2>
  //         </div>
  //         <div className="about-container">
  //           <div>Profile image goes here</div>
  //           <div className="about-section">
  //             <p className="about-me">
  //               {userData.about_me ==
  //               "This is where I can write a little something about myself!"
  //                 ? "Welcome to my page!"
  //                 : userData.about_me}
  //             </p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="shelf-user-wrapper">
  //         <div className="bookshelf-container">
  //           <h3 className="bookshelf-title">Books I've Read</h3>
  //           <Bookcase data={userData.has_read} />
  //         </div>
  //         <div className="bookshelf-container">
  //           <h3 className="bookshelf-title">Books to read</h3>
  //           <Bookcase data={userData.wants_to_read} />
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  return error ? (
    <div className="profile-error">
      <p>No user exists with this name</p>
      <Link className="dark-light-button" to="/">
        Home
      </Link>
    </div>
  ) : user === username ? (
    <main className="main-profile">
      <div className="intro-wrapper">
        <div className="intro-container">
          <h2 className="profile-title">Welcome back, {username}!</h2>
        </div>
        <div className="about-container">
          <div>Profile image goes here</div>
          <div className="about-section">
            {!isEditShown && <p className="about-me">{currentAboutMe}</p>}
            {!isEditShown && (
              <button
                className="white-button edit-about-button"
                onClick={setIsEditShown}
              >
                Edit
              </button>
            )}
            {isEditShown && (
              // EDIT MESSAGE FORM
              <form className="about-form" onSubmit={handleEditEvent}>
                <label htmlFor="edit"></label>
                <textarea
                  type="text"
                  id="edit"
                  rows="4"
                  name="edit"
                  className="white-input"
                  value={currentAboutMe}
                  onChange={handleEditAboutMe}
                />
                <input
                  type="submit"
                  value="Save"
                  className="white-button save-about-button"
                  disabled={!loggedIn}
                ></input>
              </form>
            )}
          </div>
        </div>
        {/* ********** Edit Button ********** */}
      </div>
      {/* ********** bookshelves ************** */}
      <div className="shelf-user-wrapper">
        <div className="bookshelf-container">
          <div>
            <h3 className="bookshelf-title">Books I've Read</h3>
          </div>
          <Bookcase data={userHasReadBooks} />
        </div>
        <div className="bookshelf-container">
          <h3 className="bookshelf-title">Books to read</h3>
          <Bookcase data={userWantsToReadBooks} />
        </div>
      </div>
    </main>
  ) : (
    <main className="main-profile">
      <div className="intro-wrapper">
        <div className="intro-container">
          <h2 className="profile-title">Check out {username}'s collection!</h2>
        </div>
        <div className="about-container">
          <div>Profile image goes here</div>
          <div className="about-section">
            <p className="about-me">
              {userData.about_me ==
              "This is where I can write a little something about myself!"
                ? "Welcome to my page!"
                : userData.about_me}
            </p>
          </div>
        </div>
      </div>

      <div className="shelf-user-wrapper">
        <div className="bookshelf-container">
          <h3 className="bookshelf-title">Books I've Read</h3>
          <Bookcase data={userData.has_read} />
        </div>
        <div className="bookshelf-container">
          <h3 className="bookshelf-title">Books to read</h3>
          <Bookcase data={userData.wants_to_read} />
        </div>
      </div>
    </main>
  );
};
