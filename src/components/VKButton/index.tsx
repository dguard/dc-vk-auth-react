import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import queryString from "query-string";

import vk from "./img/VK_Blue_Logo.svg";
import UserStore from "stores/UserStore";
import styled from "styled-components";

interface IProps extends RouteComponentProps {}


const StyledVkBtnContainer = styled.div`
  & .vk-button__input {
    display: flex;
  
    align-items: center;
    color: #4680c2;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    padding-right: 20px;
    cursor: pointer;
  }
  
  & .vk-button__input:hover {
    opacity: 0.8;
  }
  
  & .vk-button {
    margin-top: 20px;
    text-align: center;
  }
  
  & .vk-button__input-icon {
    margin-right: 10px;
    width: 60px;
  }
`;

const VKButton: React.FC<IProps> = (props) => {
  const [isError, setIsError] = React.useState(false);

  const host =
    process.env.REACT_APP_MODE === "production"
      ? process.env.REACT_APP_HOST_PROD
      : process.env.REACT_APP_HOST_LOCAL;

  const cbLink = `${host}/signin`;

  const handleRedirect = () => {
    window.location.href = `https://oauth.vk.com/authorize?client_id=${process.env.REACT_APP_VK_CLIENT_ID}&display=popup&redirect_uri=${cbLink}&scope=email&response_type=code&v=5.120&state=4194308`;
  };

  React.useEffect(() => {
    const handleLogin = (code: string) => {
      debugger;
      UserStore.loginVk(code)
        .then(() => {
          window.location.href ="/profile";
        })
        .catch(() => setIsError(true));
    };

    let queryObj = queryString.parse(props.location.search);

    if (isError) window.location.href = cbLink;

    if (Object.keys(queryObj) && queryObj["code"]) handleLogin(queryObj.code);
  }, [props.location.search, isError, cbLink, props.history]);


  return (
    <StyledVkBtnContainer>
      <div className="vk-button">
        <button className="vk-button__input" onClick={handleRedirect}>
          <img
            src={vk}
            alt="vk logo"
            className="vk-button__input-icon"
          />
          Войти через Вконтакте
        </button>
        {isError && <p style={{ color: "red" }}>Ошибка входа через ВК</p>}
      </div>
    </StyledVkBtnContainer>
  );
};

export default withRouter(VKButton);
