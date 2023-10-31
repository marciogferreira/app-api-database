import React from "react";
import { Pressable, Text } from "react-native";

const MyButton = () => (
  <Pressable onPress={()=> alert("Botao Pressionado")}>
    <Text>Exemplo</Text>
  </Pressable>
);

export default MyButton;