import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: "#ff0000ff",
    padding: 8
  },
  elencoTitulo: {
    fontSize: 'clamp(18px, 8vw, 32px)',
    fontWeight: "bold",
    textAlign: "center"
  }
});