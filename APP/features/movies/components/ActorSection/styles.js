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
        alignItems: "center",
        width: "31%",
        marginBottom: '4%',
        padding: '2vw',
        borderRadius: '2vw',
        backgroundColor: "#ffffff",
        border: '1px solid #ffffff',
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        aspectRatio: '1/1',
        borderRadius: '50rem',
        border: '1px solid #ffffff',
        marginBottom: 8,
    
    },
    actorName: {
        fontSize: 12,
        fontWeight: 600,
        color: '#000000',
        textAlign: "center"
    },
    actorPersonagem: {
        fontSize: 11,
        textAlign: "center",
        color: '#000000',
    }
});