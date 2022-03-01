import React from 'react';
import { Button, Platform, ScrollView, Text, View } from 'react-native';

const MenuScreen = (props) => {
	// Creamos una función flecha para invocar en el
	// click del botón
	const clickBoton = () => {
		props.navigation.navigate('estilos');
	};

	const clickPantalla = (nombreScreen) => {
		props.navigation.navigate(nombreScreen);
	};

	return (
		<ScrollView
			style={{
				flex: 1,
			}}>
			{/* Los botones pueden programar su evento onPress
            de manera local o bien invocando a una constante 
            OnPress recibe una función anónima como 
            parámetro de ejecución
            
            De manera global, dentro del parámetro props de 
            cada componente ahora existe un objeto llamado 
            navigation que contiene el método
            navigate, necesario para ir a otra pantalla
            props.navigation.navigate('_NAME_SCREEN_');
             */}

			<View style={{
				marginTop: 40,
			}}></View>

			<Button
				title='Ejemplo FlexBox'
				onPress={() => {
					props.navigation.navigate('flex');
				}}
			/>

			{Platform.OS === 'android' && <Espacio />}

			{/* Si la función onpress no contiene parámetros, 
            se puede indicar directamente como valor
            de la propiedad */}
			<Button
				title='Estilos Globales'
				onPress={clickBoton}
			/>

			{/* Si la función onpress cotiene parámetros, debe indicarse
            dentro de una función flecha */}
			{/*<Button
				title='Estilos Globales'
				onPress={() => clickPantalla('estilos')}
			/>*/}

			{Platform.OS === 'android' && <Espacio />}

			<Button
				title='Iconos'
				onPress={() => {
					props.navigation.navigate('iconos');
				}}
			/>

			{Platform.OS === 'android' && <Espacio />}

			<Button
				title='Menu Tab'
				onPress={() => clickPantalla('menu_tab')}
			/>

			{Platform.OS === 'android' && <Espacio />}

			<Button
				title='Menu Drawer'
				onPress={() => clickPantalla('menu_drawer')}
			/>

			{Platform.OS === 'android' && <Espacio />}

			<Button
				title='Controles'
				onPress={() => {
					props.navigation.navigate('controles');
				}}
			/>

			{Platform.OS === 'android' && <Espacio />}

			<Button 
				title='Imagenes'
				onPress={() => {
					props.navigation.navigate('imagenes');
				}}
			/>
			
			{Platform.OS === 'android' && <Espacio />}

			<Button 
				title='Estados'
				onPress={() => {
					props.navigation.navigate('estados');
				}}
			/>
		</ScrollView>
	);
};

function Espacio (props) {
	return (
		<View style={{marginVertical: 10,}} />
	);
}

export default MenuScreen;