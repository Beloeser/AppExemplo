import styled from "styled-components/native";

export const Pagina = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 90%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #ffdb00;
  margin-bottom: 30px;
`;

export const LoginLink = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 15px;
`;

export const Link = styled.Text`
  color: #ffdb00;
  font-weight: bold;
`;

export const LinkBotao = styled.TouchableOpacity``;

export const Button = styled.TouchableOpacity`
  background-color: #ffdb00;
  padding: 15px 25px;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
