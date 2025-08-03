// src/Screens/Styles.js
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #ffc107;
  padding: 16px 32px;
  border-radius: 8px;
`;

export const LogoutText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;
