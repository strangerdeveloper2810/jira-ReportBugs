import React from "react";
import styled from "./Loading.module.css";
import { useSelector } from "react-redux";
export default function Loading(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  if (isLoading) {
    return (
      <div className={styled.bgLoading}>
        <img src="./img/loading.gif" alt="loading" />
      </div>
    );
  } else {
    return "";
  }
}
