import styled from "styled-components/native";

export const FormContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;

export const StyledInput = styled.TextInput`
  background-color: #fff;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  font-size: 16px;
  border-width: 2px;
  border-color: ${(props) => (props.hasError ? "red" : "#fff")};
  border-radius: 8px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #ffdb00;
  padding: 15px 25px;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  width: 100%;
`;

export const SubmitText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
