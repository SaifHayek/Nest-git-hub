import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import ReqModal from "../components/ReqModal";
import SearchForm from "../components/SearchForm";
import User from "../components/User";
import UserModal from "../components/UserModal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default function Home() {
  const { t } = useTranslation();

  const {
    info: userInfo,
    isLoading,
    error,
  } = useSelector((state) => state.user.value);

  return (
    <div>
      <Head>
        <title>Github || home</title>
        <meta name="description" content="Get user github details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchForm />
      {isLoading && <p className="loading">{t("loading.loading")}</p>}
      {userInfo && (
        <User username={userInfo?.name} avatar={userInfo?.avatar_url} />
      )}
      {error && <p>{error}</p>}
      <div className="modals">
        <UserModal />
        <ReqModal />
      </div>
    </div>
  );
}
