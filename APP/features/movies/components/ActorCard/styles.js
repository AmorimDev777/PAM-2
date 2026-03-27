import { StyleSheet } from "react-native";

export default StyleSheet.create({
    atorContainer: {
        padding: 12,
    },
    actorBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: '4%'
    },
    actorCard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        alignItems: "center",
        width: "22%",
        marginBottom: '4%',
        padding: '2vw',
        borderRadius: '2vw',
        boxShadow: '0 0 15px black',
        gap: 10
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        aspectRatio: '1/1',
        borderRadius: '1vw',
        marginBottom: 8
    },
    actorName: {
        fontSize: '1.4vw',
        fontWeight: "bold",
        textAlign: "center"
    },
    actorPersonagem: {
        fontSize: '1.4vw',
        fontWeight: "bold",
        textAlign: "center",
        color: '#2c2c2c'
    }
});