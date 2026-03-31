import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderRadius: '1.4vw',
    padding: '2vw',
    margin: '0 auto',
    gap: '1vw',
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
    fontWeight: 650,
    color: '#000000',
  },
  year: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 14,
    color: '#000000',
  },
  sinopse: { 
    textAlign: "justify",
    width: '100%',
    fontSize: 14,
    color: '#160202',
  },
});



// { marginBottom: 16, width: width || 170, backgroundColor: "#fff", borderRadius: 8, padding: 8 }