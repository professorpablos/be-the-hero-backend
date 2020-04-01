import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create( {
        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20,
        },

        header: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center"
        },

        headerText: {
            fontSize: 15,
            color: "#737380",
        },

        textHeaderBold: {
            fontWeight: "bold",
        },

        title: {
            fontSize:30,
            marginBottom:16,
            marginTop: 48,
            color: '#13131a',
            fontWeight: 'bold',
        },

        description: {
            fontSize: 16,
            lineHeight: 24,
            color: "#737380",
        },

        incident:{
            padding: 24,
            borderRadius: 28,
            backgroundColor: "#FFF",
            marginBottom: 16,
        },

        incidentList: {
            marginTop: 32,

        },

        incidentProperty: {
            fontSize: 14,
            color:"#41414d",
            fontWeight: "bold"
        },

        incidentValue: {
            marginTop: 8, 
            fontSize: 15,
            marginBottom: 24,
            color:"#737380"
        },

        detailsButton: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        detailsButtonText: {
            color:"#e02041",
            fontWeight: 'bold',
            fontSize: 15,
        },

        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          },
          title: {
            fontSize: 32,
            color: "#000",
          },
})