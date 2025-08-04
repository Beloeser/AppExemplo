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

// Container do texto com link
export const LoginLinkContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
`;

export const LoginLinkText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const LoginLinkHighlight = styled.Text`
  color: #ffdb00;
  font-weight: bold;
  font-size: 14px;
`;
