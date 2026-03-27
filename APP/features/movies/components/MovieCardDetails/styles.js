import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: '1.4vw',
    padding: '2vw',
    boxShadow: '0 0 15px black',
    margin: '0 auto',
    gap: '1vw'
  },
  image: {
    width: "30%",
    aspectRatio: '1/1',
    borderRadius: '0.7vw'
  },
  infoContainer: {
    justifyContent: 'center',
    width: '70%',
    height: '100%',
    gap: '1vw'
  },
  title: {
    textAlign: "center",
    fontSize: '2vw',
    fontWeight: "bold"
  },
  year: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: '1.1vw'
  },
  sinopse: { 
    textAlign: "justify",
    width: '100%',
    fontSize: '1.2vw'
  },
});



// { marginBottom: 16, width: width || 170, backgroundColor: "#fff", borderRadius: 8, padding: 8 }