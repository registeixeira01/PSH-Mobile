import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, NavigationActions, useNavigation } from '@react-navigation/native'

const Config = {
    API_URL: "http://192.168.1.3:3000/",
    TIMEOUT_REQUEST: 5000,
    HEADER_REQUEST: 'application/json'
};

export default Config;

// export async function getOng() {
//   try {
//     return await AsyncStorage.getItem('@Api_Nodejs:tokenOng');
//   } catch (e) {
//     throw e;
//   }
// }

// export async function storeOng(tokenOng) {
//   try {
//     return await AsyncStorage.setItem('@Api_Nodejs:tokenOng', JSON.stringify(tokenOng));
//   } catch (e) {
//     throw e;
//   }
// }

// export async function deleteOng() {
//   try {
//     return await AsyncStorage.removeItem('@Api_Nodejs:tokenOng');
//   } catch (e) {
//     throw e;
//   }
// }

// // NavigationService

// let navigator;

// export function setTopLevelNavigator(navigatorRef) {
//   navigator = navigatorRef;
// }

// export function navigate(routeName, params) {
//   navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params,
//     }),
//   );
// }