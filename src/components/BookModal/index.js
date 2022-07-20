import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { setUser } from "../../actions";

export const BookModal = ({ modalData, open }) => {
  const [show, setShow] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const [wantsToRead, setWantsToRead] = useState(false);
  const [userHasReadBool, setUserHasReadBool] = useState(false);
  const [userWantsToReadBool, setUserWantsToReadBool] = useState(false);

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
      setShow(true);
    } else {
      isMounted.current = true;
    }
  }, [open]);

  useEffect(() => {
    setUserHasReadBool(false);
    setHasRead(false);
    if (loggedIn && show) {
      userHasReadBooks.map((book) => {
        if (book.ISBN === modalData.ISBN) {
          setUserHasReadBool(true);
        }
      });
    }
  }, [hasRead, show]);

  useEffect(() => {
    setUserWantsToReadBool(false);
    setWantsToRead(false);

    if (loggedIn && show && !userHasReadBool) {
      userWantsToReadBooks.map((book) => {
        if (book.ISBN === modalData.ISBN) {
          setUserWantsToReadBool(true);
        }
      });
    }
  }, [wantsToRead, show]);

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
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <img
          className="popover-fish"
          alt="Rate the book in fish"
          src={require("../../imgs/fish_disabled.png")}
        />
        <img
          className="popover-fish"
          alt="Rate the book in fish"
          src={require("../../imgs/fish_disabled.png")}
        />
        <img
          className="popover-fish"
          alt="Rate the book in fish"
          src={require("../../imgs/fish_disabled.png")}
        />
        <img
          className="popover-fish"
          alt="Rate the book in fish"
          src={require("../../imgs/fish_disabled.png")}
        />
        <img
          className="popover-fish"
          alt="Rate the book in fish"
          src={require("../../imgs/fish_disabled.png")}
        />
      </Popover.Body>
    </Popover>
  );

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
            title="bookmark page"
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
            {modalData && modalData.num_rating < 1 && (
              <p>
                Oh no! This book hasn't been rated yet! Be the first person to
                give this book some love (or hate. We're not gonna judge)
              </p>
            )}{" "}
            {modalData && modalData.num_rating > 0 && modalData.rating}{" "}
            {modalData && modalData.num_rating > 0 && <p>/</p>}
            {modalData && modalData.num_rating > 0 && modalData.num_rating}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button variant="success">Rate🌟</button>
        </OverlayTrigger>

        <button
          className="orange-button-wide"
          onClick={() =>
            addToHasRead(modalData.ISBN, modalData.title, modalData.author)
          }
          disabled={!loggedIn || userHasReadBool}
        >
          Read It!
        </button>
        <button
          className="orange-button-wide"
          onClick={() =>
            addToWantsToRead(modalData.ISBN, modalData.title, modalData.author)
          }
          disabled={!loggedIn || userWantsToReadBool || userHasReadBool}
        >
          Will Read It!
        </button>
      </Modal.Footer>
    </Modal>
  );
};
