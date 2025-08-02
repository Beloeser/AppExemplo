import React from "react";
import { ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import {
  FormContainer,
  InputWrapper,
  Label,
  StyledInput,
  ErrorText,
  SubmitButton,
  SubmitText,
  
} from "./Styles";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  loading,
  requestError,
  buttonText,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: schema,
  });

  return (
    <FormContainer>
      {inputs.map((input) => {
        if (input.type === "text" || input.type === "password") {
          return (
            <InputWrapper key={input.key}>
              
              <Controller
                control={control}
                name={input.key}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder={input.placeholder}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={input.type === "password"}
                    hasError={!!errors[input.key]}
                  />
                )}
              />
              {errors[input.key]?.message && (
                <ErrorText>{errors[input.key]?.message}</ErrorText>
              )}
              {requestError && (
                <ErrorText>Erro de requisição</ErrorText>
              )}
            </InputWrapper>
          );
        }

        return null;
      })}

      <SubmitButton onPress={handleSubmit(onSubmit)} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <SubmitText>{buttonText}</SubmitText>
        )}
      </SubmitButton>
    </FormContainer>
  );
}
