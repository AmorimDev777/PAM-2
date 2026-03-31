import { StyleSheet } from "react-native";

export default StyleSheet.create({
    atorContainer: {
        padding: 8,
    },
    actorBox: {
        margin: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: '3%'
    },
    actorCard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        alignItems: "center",
        width: "31%",
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
        fontSize: 12,
        fontWeight: 600,
        textAlign: "center"
    },
    actorPersonagem: {
        fontSize: 11,
        textAlign: "center",
        color: '#2c2c2c'
    }
});