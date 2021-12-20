import React, {useState} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {observer} from "mobx-react";
import LayoutUser from "../../components/LayoutUser";

import styled from 'styled-components';
import UserStore from "../../stores/UserStore";


const StyledProfile = styled.div`
    & .user-page {
      text-align: center;
    }

    & .user-page__name {
      font-weight: bold;
      font-size: 24px;
    }

    & .user-page__email {
      color: rgba(119, 119, 119, 0.8);
    }

    & .user-page p + p {
      margin-top: 5px;
    }

    & .user-page__logout {
      width: 120px;
      cursor: pointer;
      padding: 10px 20px;
      margin-top: 20px;
    }

    & .user-page__avatar {
      border-radius: 50%;
      margin-bottom: 20px;
    }
`;


interface IProps extends RouteComponentProps {

}
const Profile: React.FC<IProps> = (props) => {

  const [selectedUser, setSelectedUser] = useState(null);

  React.useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      window.location.href = "/signin";
    }
  });

  React.useEffect(() => {
    UserStore.getProfile()
      .then((res) => {
        setSelectedUser(UserStore.user);
      })
  });

  const handleLogout = () => {
    UserStore.logout();
    window.location.href ="/";
  };

  return (
    <LayoutUser>
      <StyledProfile>
        { selectedUser && (
          <div className="user-page">
            <img
              src={selectedUser.avatar_url}
              alt="vk avatar"
              className="user-page__avatar"
            />
            <p className="user-page__name">{selectedUser.name}</p>
            <p className="user-page__email">{selectedUser.email}</p>
            <button
              onClick={handleLogout}
              className="user-page__logout"
            >
              Logout
            </button>
          </div>
        )}
      </StyledProfile>

    </LayoutUser>
  )
};
export default withRouter(observer(Profile));
