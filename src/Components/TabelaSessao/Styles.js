import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  background-color: #212121;
  flex: 1;
`;

export const Linha = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #333;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const Coluna = styled.View`
  flex: ${(props) => props.flex || 1};
  align-items: center;
  justify-content: center;
`;

export const Nome = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const Cargo = styled.Text`
  color: #fddd00;
  font-size: 14px;
`;

export const Hora = styled.Text`
  color: #fddd00;
  font-size: 14px;
`;

export const Tempo = styled.Text`
  color: #fddd00;
  font-size: 14px;
`;

export const DeleteIcon = styled.Text`
  color: white;
  font-size: 20px;
`;
