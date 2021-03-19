import {
  Button as BaseButton,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import styled from "styled-components";
import React, { FunctionComponent } from "react";

interface ButtonProps {
  title: string;
  onPress: (ev?: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const StyledButton = styled(BaseButton)`
  color: red;
  background-color: #fff;
`;

export const Button: FunctionComponent<ButtonProps> = ({ title, onPress }) => {
  return <StyledButton title={title} onPress={onPress} />;
};
