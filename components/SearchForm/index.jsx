import axios from "axios";
import React, { useState } from "react";
import styles from "../../styles/SearchForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsLoading, setRepos, setError } from "./UserSlice";
import { setOpen as setUserModalOpen } from "../UserModal/userModalSlice";
import { setOpen as setReqModalOpen } from "../ReqModal/reqModalSlice";
import { useTranslation } from "next-i18next";

const SearchForm = () => {
  const [currentUsername, setCurrentUsername] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const getUser = async (username) => {
    try {
      dispatch(setIsLoading(true));
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      dispatch(setUser(data));

      dispatch(setUserModalOpen(false));
      dispatch(setReqModalOpen(false));
      const { data: repos } = await axios.get(data.repos_url);
      dispatch(setRepos(repos));
    } catch (err) {
      dispatch(setIsLoading(false));
      if (err.response.status === 404) {
        dispatch(setError("User not found"))
      } else {
        dispatch(setError("Something went wrong"))

      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUser(currentUsername);
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder={t("user.search user input")}
        onChange={(e) => setCurrentUsername(e.target.value)}
      />
      <button
        type="submit"
        className={styles["form-btn"]}
        onClick={handleSubmit}
      >
        {t("user.get user btn")}
      </button>
    </form>
  );
};

export default SearchForm;
