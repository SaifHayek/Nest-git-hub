/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/User.module.css";
import { setOpen } from "./UserModal/userModalSlice";

const User = ({ username, avatar }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.user} onClick={() => dispatch(setOpen(true))}>
      <img
        className={styles["user-avatar"]}
        src={avatar}
        alt="user-avatar"
        width="50"
        height="50"
      />
      <p>{username}</p>
    </div>
  );
};

export default User;
