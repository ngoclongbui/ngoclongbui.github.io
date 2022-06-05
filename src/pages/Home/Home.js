/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComponentActiveAction } from "../../redux/actions/HomeActions";
import {
  activeLoadingAction,
  closeLoadingAction,
} from "../../redux/actions/LoadingAction";
import { ABOUT_ME, DOCUMENT, PORTFOLIO } from "../../redux/types/HomeTypes";
import AboutMe from "./AboutMe/AboutMe";
import Documents from "./Document/Document";
import Portfolio from "./Portfolio/Portfolio";
import "./style.css";

export default function Home(props) {
  const { zIndex } = useSelector((state) => state.HomeReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeLoadingAction());
    setTimeout(() => {
      dispatch(closeLoadingAction());
    }, 3000);
  }, []);

  return (
    <section className="home relative w-full h-full ">
      <div
        className="aboutMe w-[20%] h-[75%] min-w-[310px] overflow-y-auto"
        style={{ zIndex: zIndex.aboutMe }}
        onClick={() => {
          if (zIndex.aboutMe < 3) {
            dispatch(setComponentActiveAction(ABOUT_ME));
          }
        }}
      >
        <AboutMe />
      </div>
      <div
        className="portfolio w-[75%] h-[65%] overflow-y-auto"
        style={{ zIndex: zIndex.portfolio }}
        onClick={() => {
          if (zIndex.portfolio < 3) {
            dispatch(setComponentActiveAction(PORTFOLIO));
          }
        }}
      >
        <Portfolio />
      </div>
      <div
        className="document w-[70%] h-[80%] overflow-y-auto"
        style={{ zIndex: zIndex.document }}
        onClick={() => {
          if (zIndex.document < 3) {
            dispatch(setComponentActiveAction(DOCUMENT));
          }
        }}
      >
        <Documents />
      </div>
    </section>
  );
}
