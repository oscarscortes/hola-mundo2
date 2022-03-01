import React from 'react';

import { 
    ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity, Switch, Platform, Alert
} from 'react-native';

// una vez instalada la libreria
// npm i radio-buttons-react-native-expo

import RadioButtonRN from 'radio-buttons-react-native-expo';

// una vez instalado la libreria expo-checkbox
// expo install expo-chcekbox
import CheckBox from 'expo-checkbox';

//una vez instalada la libreria expo-slider
// expo install @react-native-community/slider
import Slider from '@react-native-community/slider';

// una vez instalada la libreria expo-picker
// expo install @react-native-picker/picker

import { Picker } from '@react-native-picker/picker';

// una vez instalada la libreria expo-datepicker
// expo install @react-native-community/datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

import estilos from '../styles/estilos';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import colores from '../styles/colores';

const ControlesScreen = (props) => {

    /* Constante para simular el estado de un Switch */
    const valorSwitch = true;

    //constante para simular el estado de un checkbox

    const valorCheckBox = true;

    // los RadioButton están hechos para que solo puedan seleccionarse uno del grupo
    // la libreria de RadioButton funciona por medio de un arreglo

    // Creamos un arreglo con las opciones del Radio Button

    const opcionesRadioButton = [
        {
            value: 1,
            label: 'Opción 1'
        },
        {
            value: 2,
            label: 'Opción 2'
        },
        {
            value: 3,
            label: 'Opción 3'
        },
    ];
    /*
    Los States son un tipo de elemento de React
    que permiten actualizar información en tiempo de ejecución
    Generando nuevas versiones de constantes
    */

    const [campoText1, setCampoText1] = React.useState('Texto 1');
    const [campoText2, setCampoText2] = React.useState('Texto 2');
    const [campoText3, setCampoText3] = React.useState('Texto 3');
    const [campoText4, setCampoText4] = React.useState('Texto 4');
    const [campoText5, setCampoText5] = React.useState('Texto 5');
    const [campoText6, setCampoText6] = React.useState('Texto 6');

    /**
     * State para los switches
     */

    const [valSwicth1, setValSwitch1] = React.useState(false);
    const [valSwicth2, setValSwitch2] = React.useState(false);
    const [valSwicth3, setValSwitch3] = React.useState(false);
    const [valSwicth4, setValSwitch4] = React.useState(false);

    /*
    Valor del RadioButton
    */

    const [valRadio, setValRadio] = React.useState(null);

    /*
    Valor del checkbox 
    */

    const [valCheck1, setValCheck1] = React.useState(false);
    const [valCheck2, setValCheck2] = React.useState(false);
    const [valCheck3, setValCheck3] = React.useState(false);
    const [valCheck4, setValCheck4] = React.useState(false);

    /*
    Slider
    */

    const [valSlider, setValSlider] = React.useState(0);
    /*
    Picker
    */

    const [valPicker, setValPicker] = React.useState(null);

    /*
    DatePicker
    En el caso de iOS por defecto es trueç
    en el caso de Android es falso
    */

    const [datePickerVisible, setDatePickerVisible] = React.useState(Platform.OS === 'ios' ? true : false);

    return (
        <ScrollView>
            <Text style={estilos.tituloComponente}>
                Controles de Entrada
            </Text>
            {/* Text input es el componente encargado
            de renderizar un campo de text, por defecto
            carece de cualquier tipo de diseño */}

            <TextInput
                style={estilos.textInputPerso1}
                placeholder='Nombre'
                keyboardType='default'
                value={campoText1}
                // cuando cambie el texto actualizamos el valor del State
                onChangeText={(e) => setCampoText1(e)}
            />
            <TextInput
                style={estilos.textInputPerso2}
                placeholder='Telefono'
                keyboardType='phone-pad'
                value={campoText2}
                onChangeText={(e) => setCampoText2(e)}
            />

            {/* Creamos nuestro propio text input
            con icono */}
            <View style={estilos.textInputIconContainer1}>
                <AntDesign name='user' size={22} color={colores.yinMnBlue} />
                <TextInput 
                    style={estilos.textInputIcon}
                    placeholder='Username'
                    keyboardType='default'
                    value={campoText3}
                    onChangeText={(e) => setCampoText3(e)}
                />
            </View>

            <View style={estilos.textInputIconContainer1}>
                <AntDesign name='mail' size={22} color={colores.yinMnBlue} />
                <TextInput 
                    style={estilos.textInputIcon}
                    placeholder='Email'
                    keyboardType='email-address'
                    // Evitamos la primera letra mayúscula
                    autoCapitalize='none'
                    //Evitamos la corrección de palabras
                    autoCorrect={false}
                    value={campoText4}
                    onChangeText={(e) => setCampoText4(e)}
                />
            </View>

            <View style={estilos.textInputIconContainer2}>
                <AntDesign name='user' size={22} color={colores.yinMnBlue} />
                <TextInput 
                    style={{
                        ...estilos.textInputIcon, 
                        ...estilos.textInputIconLine,
                    }}
                    placeholder='Username'
                    keyboardType='default'
                    // Evitamos la primera letra mayúscula
                    autoCapitalize='none'
                    //Evitamos la corrección de palabras
                    autoCorrect={false}
                    value={campoText5}
                    onChangeText={(e) => setCampoText5(e)}
                />
            </View>
            <View style={estilos.textInputIconContainer2}>
                <AntDesign name='mail' size={22} color={colores.yinMnBlue} />
                <TextInput 
                //forma de sobreescribir estilos
                    style={{
                        ...estilos.textInputIcon,
                        color: '#000',
                        fontWeight: 'normal',
                    }}
                    placeholder='Username'
                    keyboardType='email-address'
                    // Evitamos la primera letra mayúscula
                    autoCapitalize='none'
                    //Evitamos la corrección de palabras
                    autoCorrect={false}
                    value={campoText6}
                    onChangeText={(e) => setCampoText6(e)}
                />
            </View>

            <Text style={{...estilos.tituloComponente, marginTop: 40}}>Controles de selección</Text>

            {/* Botón preestablecido por React, look and feel de los botones nativos del SO */}
            
            <View style={{flex: 1, margin: 8, padding: 8,}}>
                <Button title='Boton' color={'tomato'} />
            </View>

            {/* React Native nos permite generar nuestros propios compnentes seleccionables por medio del elemento genérico llamado TouchableOpacity */}

            <TouchableOpacity>
                <Image source={require('../../assets/images/serpiente.jpeg')} style={{
                    width: 150, 
                    height: 150, 
                    alignSelf: 'center', 
                    borderRadius: 75}} 
                />
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor: colores.bone,
                margin: 8,
                padding: 16,
                borderRadius: 8,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: colores.yinMnBlue
            }}>
                <FontAwesome5
                    name='upload'
                    color={colores.yinMnBlue}
                    size={24}
                />
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginStart: 16,
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>
                    Botón personal
                </Text>
            </TouchableOpacity>

            {/* Componente Switch */}

            <Switch 
                value={valSwicth1} 
                trackColor={{
                    false: colores.candyPink, //color de la barra apagada (android)
                    true: colores.yinMnBlue, //color de la barra encendida
                }}
                ios_backgroundColor={colores.candyPink} 
                // dependiendo del estado switch podemos cambiar el color de Thumb
                thumbColor={
                    valSwicth1
                        ? colores.vividSkyBlue
                        : colores.bone
                    }
                onValueChange={(e) => {
                    setValSwitch1(e);
                    setValSwitch2(e);
                }} 
            />

            <Switch 
                value={valSwicth2} 
                trackColor={{
                    false: colores.candyPink, 
                    true: colores.yinMnBlue,
                }} 
                //color de la barra apagada (ios)
                ios_backgroundColor={colores.candyPink}
                thumbColor={
                    valSwicth2
                        ? colores.vividSkyBlue
                        : colores.bone
                }
                onValueChange={(e) => setValSwitch2(e)}
            />

            <Text style={estilos.tituloComponente}>Switch con etiqueta</Text>

            <View style={estilos.switchContainer}>
                <Text style={estilos.switchText} onPress={() => {
                    /*
                    Cuando se toque el texto vamos a invertir el valor del sitch
                    */
                   setValSwitch3(!valSwicth3);
                }}>
                    Acepto los términos y condiciones
                </Text>
                <Switch 
                value={valSwicth3} 
                trackColor={{
                    false: colores.candyPink, //color de la barra apagada (android)
                    true: colores.yinMnBlue, //color de la barra encendida
                }}
                ios_backgroundColor={colores.candyPink} 
                // dependiendo del estado switch podemos cambiar el color de Thumb
                thumbColor={
                    valSwicth3
                        ? colores.vividSkyBlue
                        : colores.bone
                    }
                onValueChange={(e) => setValSwitch3(e)} 
                
            />
            </View>

            <View style={estilos.switchContainer}>
                <Text style={estilos.switchText} onPress={() => setValSwitch4(!valSwicth4)}>
                    Vender mi alma
                </Text>
                <Switch 
                value={valSwicth4} 
                trackColor={{
                    false: colores.candyPink, //color de la barra apagada (android)
                    true: colores.yinMnBlue, //color de la barra encendida
                }}
                ios_backgroundColor={colores.candyPink} 
                // dependiendo del estado switch podemos cambiar el color de Thumb
                thumbColor={
                    valSwicth4
                        ? colores.vividSkyBlue
                        : colores.bone
                    }
                // Guardamos el estado actual del switch
                onValueChange={(e) => setValSwitch4(e)} 
            />
            </View>

            <Text style={estilos.tituloComponente}>
                RadioButtons
            </Text>

            {/* Indicamos un componente de RadioButtonRN donde mostramos las opciones previmente generadas en el arreglo */}
            <View 
                style={{
                    paddingHorizontal: 8,
                }}
            >
                <RadioButtonRN data={opcionesRadioButton}
                    icon={
                        <FontAwesome5
                            name='check'
                            size={22}
                            color={'green'}
                        />
                    }
                    // Guardamos en valRadio
                    // el objeto del RadioButton seleccionado
                    selectedBtn={(e) => setValRadio(e)}
                />
            </View>

            <Text
                style={
                    estilos.tituloComponente
                }
            >
                CheckBox
            </Text>

            {/* Los checkbox son componentes diseñados para selccionarse uno, ninguno o varios */}

            <CheckBox 
                value={valCheck1} 
                color={colores.middleBlueGreen} 
                /* Guardamos en un state el cambio del valor del check */
                onValueChange={(e) => {
                    setValCheck1(e);
                    setValCheck2(e);
                }}
            />
            <CheckBox 
                value={valCheck2}
                color={colores.candyPink}
                onValueChange={(e) => setValCheck2(e)}
            />

            <Text style={estilos.tituloComponente}>
                CheckBox con etiqueta
            </Text>

            <View style={estilos.checkBoxContainer}>
                <CheckBox 
                    value={valCheck3}
                    color={colores.roseDust}
                    onValueChange={(e) => setValCheck3(e)}
                />
                <Text style={estilos.checkBoxText} onPress={() => setValCheck3(!valCheck3)}>
                    Deseo recibir ofertas
                </Text>
            </View>

            <View style={estilos.checkBoxContainer}>
                <CheckBox 
                    value={valCheck4}
                    color={colores.yinMnBlue}
                    onValueChange={(e) => setValCheck4(e)}
                />
                <Text style={estilos.checkBoxText} onPress={() => setValCheck4(!valCheck4)}>
                    Deseo suscribirme
                </Text>
            </View>

            <Text
                style={estilos.tituloComponente}
            >
                Slider
            </Text>
            <Text
                style={estilos.tituloComponente}
            >
                Valor slider: {valSlider}
            </Text>

            <Slider
                style={{
                    margin: 8,
                }}
                minimumValue={1}
                maximumValue={10}
                value={valSlider}
                step={1}
                minimumTrackTintColor={colores.candyPink}
                maximumTrackTintColor={colores.yinMnBlue}
                thumbTintColor={colores.tumbleweed}
                // Guardamos el valor del slider en el state
                onValueChange={(e) => setValSlider(e)}
            />

            <View
                style={{
                    margin: 8,
                    padding: 8
                }}
            >
                
                <Text
                    style={{
                        ...estilos.tituloComponente,
                        marginBottom: 0,
                        paddingBottom: 0,
                    }}
                >
                    Picker (selecciona)
                </Text>
                <View
                    style={{
                        borderWidth: Platform.OS === 'android' ? 2 : null,
                        borderColor: colores.yinMnBlue,
                        marginTop: 8,
                    }}
                >

                     <Picker
                        prompt='Selecciona un elemento'
                        numberOfLines={1}
                        selectedValue={valPicker}
                        // para android podemos visualizar
                        // el picker como una modal o como un
                        // dropdown item
                        // dropdown <------- como un select
                        // modal <------- es una ventana independiente
                        mode='dropdown'
                        //ponemos margen negativo solo para ios
                        style={{
                            marginTop: Platform.OS === 'ios' ? -64 : 0,
                        }}
                        onValueChange={(e) => setValPicker(e)}
                    >
                        <Picker.Item
                            label='Uno'
                            value={1}
                        />
                        <Picker.Item
                            label='Dos'
                            value={2}
                        />
                        <Picker.Item
                            label='Tres'
                            value={3}
                        />
                        <Picker.Item
                            label='Cuatro'
                            value={4}
                        />
                        <Picker.Item
                            label='Cinco'
                            value={5}
                        />
                    </Picker>
                </View>
            </View>

            <Text
                style={estilos.tituloComponente}
            >
                DatePicker
            </Text>
            {/* para mostrar un datepicker necesitamos indicar el tipo de vista (display) y la fecha de inicio del date picker */}
            
            <Button title='Mostrar DatePicker' onPress={() => setDatePickerVisible(true)} />

            {datePickerVisible && (
                <DateTimePicker 
                    display='default'
                    value={new Date()}
                    onChange={(e) => {
                        //cambiar el state de visiblidad del datepicker nuvamente a falso
                        //si no es ios
                        (Platform.OS !== 'ios') ? 
                        setDatePickerVisible(false) : null;
                        console.log(e.nativeEvent);
                    }}
                />
            )}

            <View
                style={{
                    margin: 8,
                    padding: 8,
                }}
            >
                <Button 
                    title='Alert'
                    onPress={() => {
                        /*
                        Alert es un componente que permite mostrar
                        Dialgos de manera nativa en ambas plataformas 
                        tiene la siguiente estructura
                        1. Titulo
                        2. Mensaje
                        3. Botones
                        4. Config Adicional

                        Cada boton cuenta con 3 argumentos
                        1. Texto del boton
                        2. La accion al dar click
                        3. Tipo de boton (solo ios)
                        */
                       Alert.alert(
                           'Titulo',
                           'Mensaj, que puede ser un texto...',
                           //Alert maneja los botones como un arreglo limitado a 3 botones cuando se trata de android
                           [
                               {
                               text: 'B1',
                               onPress: () => {},
                               style: 'default'
                                },
                                {
                                    text: 'B2',
                                    onPress: () => {},
                                    style: 'cancel'
                                },
                                {
                                    text: 'B3',
                                    onPress: () => props.navigation.navigate('menu'),
                                    style: 'destructive'
                                },
                                // solo ios soport n cantidad de botones
                                // pero android solo muestra 3
                                {
                                    text: 'B4',
                                    onPress: () => {},
                                    style: 'default'
                                },
                                {
                                    text: 'B5',
                                    onPress: () => {},
                                    style: 'default'
                                },
                                {
                                    text: 'B6',
                                    onPress: () => {},
                                    style: 'default'
                                },
                            ]
                           );
                    }}
                />
            </View>

            {/* Creamos un espacio para que los elements no queden sobre el fondo */}
            <View style={{marginBottom: 100}}></View>

            
        </ScrollView>
    );
}

export default ControlesScreen;