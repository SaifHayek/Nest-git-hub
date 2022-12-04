/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import modalStyle from "../../styles/Modal.module.css";
import styles from "../../styles/UserModal.module.css";
import { setOpen } from "./userModalSlice";
import { setOpen as setReqOpen } from "../ReqModal/reqModalSlice";
import { setCurrentPulls, setCurrentRepo, setError } from "../SearchForm/UserSlice";
import { useTranslation } from "next-i18next";

const UserModal = () => {
  const isOpen = useSelector((state) => state.userModal.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { info: userInfo, repos } = useSelector((state) => state.user.value);

  const getPullsRequests = async (repo) => {
    try {
      const { data } = await axios.get(repo.url + "/pulls");
      dispatch(setCurrentPulls(data));
      dispatch(setCurrentRepo(repo));
      dispatch(setReqOpen(true));
    } catch (err) {
      dispatch(setError("Something went wrong"));
    }
  };
  return (
    <div
      className={`${styles["user-modal"]} ${modalStyle.modal} ${
        isOpen ? modalStyle.open : modalStyle.close
      }`}
    >
      <span
        className={modalStyle["close-modal"]}
        onClick={() => dispatch(setOpen(false))}
      >
        x
      </span>
      {userInfo && (
        <div className={styles["user-info"]}>
          <p>{userInfo.name}</p>
          <img
            src={userInfo.avatar_url}
            alt="user-avatar"
            width="50"
            height="50"
          />
          <p>
            {t("user.followers")}
            {userInfo.followers}
          </p>
          <p>
            {t("user.following")}
            {userInfo.following}
          </p>
          {repos.length && (
            <div>
              <p>{t("repo.all repo")}</p>
              <ol className={styles["repos-list"]}>
                {repos.map((repo) => (
                  <li
                    key={repo.id}
                    style={{ direction: "ltr" }}
                    onClick={() => getPullsRequests(repo)}
                  >
                    {repo.name}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserModal;
