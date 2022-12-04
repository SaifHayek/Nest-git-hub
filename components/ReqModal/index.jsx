import { useTranslation } from "next-i18next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import modalStyle from "../../styles/Modal.module.css";
import styles from "../../styles/ReqModal.module.css";
import { setOpen } from "./reqModalSlice";

const ReqModal = () => {
  const isOpen = useSelector((state) => state.reqModal.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentPulls, currentRepo } = useSelector(
    (state) => state.user.value
  );

  return (
    <div
      className={`${styles["req-modal"]} ${modalStyle.modal} ${
        isOpen ? modalStyle.open : modalStyle.close
      }`}
    >
      <span
        className={modalStyle["close-modal"]}
        onClick={() => dispatch(setOpen(false))}
      >
        x
      </span>
      {currentRepo && (
        <p className={styles["repo-name"]}>
          {t("repo.repo")} {currentRepo?.name}
        </p>
      )}
      <p>{t("repo.pull request")}</p>
      {currentPulls.length ? (
        <ol className={modalStyle["repos-list"]}>
          {currentPulls.map((pull) => (
            <li style={{ direction: "ltr" }} key={pull.id}>
              {pull.title}
            </li>
          ))}
        </ol>
      ) : null}
      {!currentPulls.length ? <p>{t("repo.no pulls")}</p> : null}
    </div>
  );
};

export default ReqModal;
