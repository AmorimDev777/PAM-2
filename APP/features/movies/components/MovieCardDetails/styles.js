import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderRadius: '1.4vw',
    padding: '2vw',
    margin: '0 auto',
    gap: '1vw'
  },
  image: {
    width: "50%",
    aspectRatio: '1/1.5',
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
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  },
  year: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: 'white',
  },
  sinopse: { 
    textAlign: "justify",
    width: '100%',
    fontSize: 14,
    color: 'white',
  },
});



// { marginBottom: 16, width: width || 170, backgroundColor: "#fff", borderRadius: 8, padding: 8 }