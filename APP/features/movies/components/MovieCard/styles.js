import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 6, 
    marginBottom: 20,
    boxShadow: '0 5px 10px #00000037',
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3, 
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#eceaea",
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    lineHeight: 22,
    marginHorizontal: 8,
    marginTop: 8
  },
  year: {
    fontSize: 14,
    color: "#000000",
    marginHorizontal: 8,
    marginBottom: 8
  }
});