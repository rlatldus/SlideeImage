import React from "react";
import { useState } from "react";
import s from "./private.module.scss";
import { useNavigate } from "react-router-dom";

const Private = () => {

  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    const newStatus = !status;
    setStatus(newStatus);
    // axios
    //   .put(`${ROOT_API}/users/setting/private/${newStatus}`, newStatus, {
    // headers: { "X-AUTH-TOKEN": auth.accessToken },
    //   })
    //   .then((response) => {
    // console.log(response.config);
    // setStatus(response.config.data);
    //   });
  };

  return (
    <button className={`${s.toggleSwitch} ${status ? s.true : s.false}`} onClick={handleClick}>
      <div className={s.toggleHandle} />
    </button>
  );
};

export default Private;
