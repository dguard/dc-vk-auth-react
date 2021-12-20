import React, {useState} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {observer} from "mobx-react";
import LayoutUser from "../../components/LayoutUser";

import styled from 'styled-components';
import ExchangeRateStore from "../../stores/ExchangeRateStore";
import ExchangeRateWebsocketService from "../../stores/ExchangeRateWebsocketService";
import VKButton from "components/VKButton";

interface IProps extends RouteComponentProps {

}
const SignIn: React.FC<IProps> = (props) => {


  return (
    <LayoutUser>
      <VKButton />

    </LayoutUser>
  )
};
export default withRouter(observer(SignIn));
