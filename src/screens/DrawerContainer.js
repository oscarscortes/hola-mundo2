/*
Invocamos al Drawer Navigator, contenedor
de los componentes navgebales desde un Drawer
*/
import { createDrawerNavigator } from '@react-navigation/drawer';
import colores from '../styles/colores';

/*
Importamos los items del Drawer
*/

import HomeDrawerItem from './drawerItems/HomeDrawerItem';
import NotificacionesDrawerItem from './drawerItems/NotificacionesDrawerItem';
import TercerPantallaDrawerItem from './drawerItems/TercerPantallaDrawerItem';

import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

/*
Inicializamos el contenedor del Drawer
*/

const Drawer = createDrawerNavigator();

/*
Retornamos la estrucutra de todo el
NavigationDrawer
*/
const DrawerContainer = (props) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colores.yinMnBlue,
                },
                headerTintColor: colores.bone,
                // agregamos un componente a la seccion derecha
                // del header de nuestro Drawer
                headerRight: () => {
                    return (
                        <TouchableOpacity
                            style={{
                                paddingEnd: 16,
                            }}
                            onPress={() => {
                                props.navigation.navigate('menu');
                            }}
                        >
                            <SimpleLineIcons
                                name='home'
                                color={colores.bone}
                                size={18}
                            />
                        </TouchableOpacity>
                    );
                },
            }}
        >
            {/* Indicamos todos los menus que tendrá nuestro
            Drawer */}
            <Drawer.Screen 
                name='drawer_home'
                component={HomeDrawerItem}
            />
            <Drawer.Screen 
                name='drawer_notifi'
                component={NotificacionesDrawerItem}
            />
            <Drawer.Screen
                name='drawer_tres'
                component={TercerPantallaDrawerItem}
            />
        </Drawer.Navigator>
    );
}

export default DrawerContainer;