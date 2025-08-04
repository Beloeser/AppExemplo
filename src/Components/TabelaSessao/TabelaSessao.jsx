// TabelaSessao.jsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Linha, Coluna, Nome, Cargo, Hora, Tempo, DeleteIcon } from "./Styles";
import { useDeleteSessao } from "../../Hooks/sessoes";

export default function TabelaSessao({ item, onDelete }) {
  const { mutate: deleteSessao } = useDeleteSessao({
    onSuccess: () => {
      if(onDelete) onDelete();
    },
    onError: (error) => {
      alert(error?.message || "Erro ao encerrar sessão");
    },
  });

  const handleDelete = () => {
    deleteSessao(item.idUsuario);
  };

  return (
    <Linha>
      <Coluna flex={2}>
        <Nome>{item.nome}</Nome>
        <Cargo>{item.cargo}</Cargo>
      </Coluna>
      <Coluna>
        <Hora>{item.chegada}</Hora>
      </Coluna>
      <Coluna>
        <Tempo>{item.tempo}</Tempo>
      </Coluna>
      <Coluna>
        <TouchableOpacity onPress={handleDelete}>
          <DeleteIcon>🗑️</DeleteIcon>
        </TouchableOpacity>
      </Coluna>
    </Linha>
  );
}
