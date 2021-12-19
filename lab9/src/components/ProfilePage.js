import React from "react";
import "../styles.css";
import Layout from "./Layout";

const ProfilePage = () => (
  <div>
    <Layout />
    <div>Это профиль пользователя:</div>
    <div> Пользователь: {localStorage.getItem("login")} </div>
    <div> Пароль: {localStorage.getItem("password")} </div>
    <div>Эта страница приватная.</div>
  </div>
);

export default ProfilePage;
