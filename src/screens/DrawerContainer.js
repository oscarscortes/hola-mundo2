/*
Invocamos al Drawer Navigator, contenedor
de los componentes navgebales desde un Drawer
*/
import { createDrawerNavigator } from '@react-navigation/drawer';

/*
Importamos los items del Drawer
*/

import HomeDrawerItem from './drawerItems/HomeDrawerItem';
import NotificacionesDrawerItem from './drawerItems/NotificacionesDrawerItem';
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
        <Drawer.Navigator>
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
        </Drawer.Navigator>
    );
}

export default DrawerContainer;