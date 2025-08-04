import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 20px;
`;

export const CarrosselWrapper = styled.View`
  margin-top: 40px;
`;


export const TabelaWrapper = styled.View`
  height: 300px; 
  margin-top: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #ffd000;
  padding: 15px 30px;
  border-radius: 10px;
  align-items: center;
  margin-top: 30px;
`;

export const LogoutText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  color: #fddd00;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
`;

export const Separador = styled.View`
  height: 2px;
  background-color: #fddd00;
  margin: 10px 0 20px;
  width: 80%;
  align-self: center;
`;
