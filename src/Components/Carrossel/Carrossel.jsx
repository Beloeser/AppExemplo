import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { CarrosselContainer, NavegacaoContainer, Setinha } from "./Styles";
import { AntDesign } from "@expo/vector-icons"; 

const imagens = [
  require("../../../assets/Image1.jpeg"),
  require("../../../assets/Image2.jpeg"),
  require("../../../assets/Image3.jpeg"),
  require("../../../assets/Image4.jpeg"),
];

export default function Carrossel() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndice((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <CarrosselContainer>
      <NavegacaoContainer>
        <TouchableOpacity onPress={anterior}>
          <Setinha>
            <AntDesign name="left" size={24} color="#333" />
          </Setinha>
        </TouchableOpacity>

        <Image
          source={imagens[indice]}
          style={{ width: 250, height: 150, borderRadius: 12 }}
        />

        <TouchableOpacity onPress={proximo}>
          <Setinha>
            <AntDesign name="right" size={24} color="#333" />
          </Setinha>
        </TouchableOpacity>
      </NavegacaoContainer>
    </CarrosselContainer>
  );
}
