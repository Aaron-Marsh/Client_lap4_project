import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { NavLink } from "react-router-dom";
import { setUser } from "../../actions";
import { ChildLoginModal } from "../ChildLogin";

export const BookModal = ({ modalData, open }) => {
  const [show, setShow] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const [wantsToRead, setWantsToRead] = useState(false);
  const [userHasReadBool, setUserHasReadBool] = useState(false);
  const [userWantsToReadBool, setUserWantsToReadBool] = useState(false);
  const [starBool, setStarBool] = useState(false);
  const [changeStar, setChangeStar] = useState(false);
  const [liveRating, setLiveRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [hasRatedBool, setHasRatedBool] = useState(false);
  const [correctBook, setCorrectBook] = useState(null);

  const isMounted = useRef(false);

  const loggedIn = useSelector((state) => state.loggedIn);
  const username = useSelector((state) => state.user.data.username);
  const userHasReadBooks = useSelector((state) => state.user.data.has_read);
  const userWantsToReadBooks = useSelector(
    (state) => state.user.data.wants_to_read
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isMounted.current) {
      setUserHasReadBool(false);
      setHasRead(false);
      if (loggedIn && show) {
        userHasReadBooks.map((book) => {
          if (book.ISBN === modalData.ISBN) {
            setUserHasReadBool(true);
            document.querySelectorAll(".read-button").forEach((btn) => {
              btn.classList.add("correct-hover");
            });
          }
        });
      }
    }
  }, [hasRead, show]);

  useEffect(() => {
    if (isMounted.current) {
      setUserWantsToReadBool(false);
      setWantsToRead(false);

      if (loggedIn && show && !userHasReadBool) {
        userWantsToReadBooks.map((book) => {
          if (book.ISBN === modalData.ISBN) {
            setUserWantsToReadBool(true);
            document
              .querySelector(".wants-read-button")
              .classList.add("correct-hover");
          }
        });
      }
    }
  }, [wantsToRead, show]);

  useEffect(() => {
    if (isMounted.current) {
      if (loggedIn && show) {
        userHasReadBooks.map((book) => {
          if (book.ISBN === modalData.ISBN) {
            if (book.favourited != starBool) {
              setStarBool((prev) => !prev);
            }
          }
        });
      }
    }
  }, [changeStar, show]);

  useEffect(() => {
    console.log(correctBook);
    if (isMounted.current) {
      if (loggedIn && show && userHasReadBool) {
        userHasReadBooks.map((book) => {
          if (book.ISBN === modalData.ISBN) {
            setCorrectBook(book);
          }
        });
      }
    }
  }, [hasRated, show]);

  useEffect(() => {
    setLiveRating(0);
    if (isMounted.current) {
      setShow(true);
    } else {
      isMounted.current = true;
    }
  }, [open]);

  const handleClose = () => setShow(false);

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
        setHasRead(true);
        setWantsToRead(true);
        setChangeStar((prev) => !prev);
        setHasRated(true);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const addToHasRead = async (isbn, title, author) => {
    try {
      const sendData = {
        method: "add_to_read",
        ISBN: isbn,
        title: title,
        author: author,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.patch(
        `https://read-herring.herokuapp.com/users/${username}`,
        JSON.stringify(sendData),
        options
      );
      fetchUser();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const addToWantsToRead = async (isbn, title, author) => {
    try {
      const sendData = {
        method: "add_to_wants_to_read",
        ISBN: isbn,
        title: title,
        author: author,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.patch(
        `https://read-herring.herokuapp.com/users/${username}`,
        JSON.stringify(sendData),
        options
      );
      fetchUser();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const clickedStar = async (isbn) => {
    try {
      const sendData = {
        method: "edit_favourite_status",
        ISBN: isbn,
        set_favourited: !starBool,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.patch(
        `https://read-herring.herokuapp.com/users/${username}`,
        JSON.stringify(sendData),
        options
      );
      fetchUser();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const rating = async (e, isbn) => {
    let currentBook = {};

    userHasReadBooks.map((book) => {
      if (book.ISBN === modalData.ISBN) {
        currentBook = book;
      }
    });
    try {
      const sendData = {
        method: "add_rating",
        username: username,
        new_rating: parseInt(e.target.id),
        old_rating: currentBook.personal_rating,
      };

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.patch(
        `https://read-herring.herokuapp.com/books/${modalData.ISBN}`,
        JSON.stringify(sendData),
        options
      );
      setLiveRating(data.rating);
      fetchUser();
    } catch (err) {
      throw new Error(err.message);
    }
  };
  let arr = [1, 2, 3, 4, 5];
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        {userHasReadBooks.map((book) => {
          if (modalData && book.ISBN === modalData.ISBN) {
            return arr.map((item) => {
              if (item <= book.personal_rating) {
                return (
                  <img
                    onClick={(e) => {
                      rating(e);
                    }}
                    id={item}
                    className="popover-fish"
                    alt="Rate the book in fish"
                    src={require("../../imgs/fish_enabled.png")}
                  />
                );
              } else {
                return (
                  <img
                    onClick={(e) => {
                      rating(e);
                    }}
                    id={item}
                    className="popover-fish"
                    alt="Rate the book in fish"
                    src={require("../../imgs/fish_disabled.png")}
                  />
                );
              }
            });
          }
        })}
      </Popover.Body>
    </Popover>
  );

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div class="modal-header-book">
          <Modal.Title>{modalData && modalData.title} &nbsp; </Modal.Title>
          <input
            id="star1"
            class="star"
            type="checkbox"
            checked={!starBool}
            disabled={!loggedIn || !userHasReadBool}
            title="bookmark page"
            onClick={() => {
              clickedStar(modalData.ISBN);
            }}
          />
        </div>
      </Modal.Header>

      <Modal.Body className="modal-wrapper">
        <div className="modal-description">
          {modalData && modalData.description}
        </div>
        <div className="modal-container">
          <img
            alt={modalData && modalData.title}
            src={modalData && modalData.images.thumbnail}
            className="modal-img"
          />
          <p>{modalData && modalData.author}</p>
          <p>
            Rating:{" "}
            {modalData
              ? liveRating == 0
                ? modalData.rating.toFixed(2)
                : liveRating.toFixed(2)
              : "Loading..."}
            {modalData && modalData.num_ratings < 1 && (
              <p>Be the first to rate this book!</p>
            )}{" "}
            {modalData && modalData.num_ratings > 0 && modalData.num_ratings
              ? `from ${modalData.num_ratings} reader${
                  modalData.num_ratings > 1 ? "s" : ""
                }`
              : ""}
          </p>
          <OverlayTrigger
            classname="overlay-button"
            trigger="click"
            placement="left"
            overlay={popover}
          >
            <button
              disabled={!userHasReadBool || hasRatedBool}
              className="dark-light-button"
            >
              Rate
            </button>
          </OverlayTrigger>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <NavLink className="dark-light-button-wide forum-link" to="/forums">
          Go Discuss!
        </NavLink>

        <button
          className="orange-button-wide read-button"
          onClick={() =>
            addToHasRead(modalData.ISBN, modalData.title, modalData.author)
          }
          disabled={!loggedIn || userHasReadBool}
        >
          ReadShelf it!
        </button>
        <button
          className="orange-button-wide read-button wants-read-button"
          onClick={() =>
            addToWantsToRead(modalData.ISBN, modalData.title, modalData.author)
          }
          disabled={!loggedIn || userWantsToReadBool || userHasReadBool}
        >
          NextShelf it!
        </button>
      </Modal.Footer>
    </Modal>
  );
};
