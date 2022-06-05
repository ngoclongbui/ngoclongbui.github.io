import React, { memo } from "react";
import avatar from "../../../assets/Avatar/avatar.jpg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
function AboutMe(props) {
  return (
    <div className="flex flex-wrap content-between w-full h-full">
      <div className="w-full">
        <div
          className="avatar w-[150px] h-[150px] my-8 mx-auto rounded-full"
          style={{
            background: `url(${avatar}) center center/cover no-repeat`,
            filter:
              "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25)) drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.25))",
          }}
        />
        <div className="px-[40px]">
          <h3 className="text-[32px] font-light m-0">Bui Ngoc Long</h3>
          <p className="text-base font-light mt-0 mb-3">Frontend developer</p>
          <p className="text-lg font-light m-0">
            <EmailOutlinedIcon fontSize="small" className="text-gray-600" />
            <span className="ml-1">ngoclong.wj@gmail.com</span>
          </p>
          <p className="text-lg font-light m-0">
            <PhoneAndroidOutlinedIcon
              fontSize="small"
              className="text-gray-600"
            />
            <span className="ml-1">0987 127 461</span>
          </p>
          <p className="text-lg font-light m-0">
            <FmdGoodOutlinedIcon fontSize="small" className="text-gray-600" />
            <span className="ml-1">Ho Chi Minh City</span>
          </p>
        </div>
      </div>
      <div className="w-full font-light text-center p-3">
        <span className="mr-1">
          <CopyrightIcon fontSize="small" className="text-gray-600" />
        </span>
        <span>2022 All right reserved</span>
      </div>
    </div>
  );
}

export default memo(AboutMe);
