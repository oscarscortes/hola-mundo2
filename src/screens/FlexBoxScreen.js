import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import colores from '../styles/colores';

const FlexBoxScreen = (props) => {
    return (
        <View style={{
            ...estilo.contenedor,
            backgroundColor: '#DDDDDD'
        }}>
        <SafeAreaView
            style={estilo.contenedor}
        >
            {/* Seccion del display */}
            <Text 
                style={estilo.display}
            >
                0.01
            </Text>
            <View 
                style={estilo.panelBotones}
            >
                <View style={estilo.fila}>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.fila}>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.fila}>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.fila}>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.fila}>
                    <TouchableOpacity style={{
                        ...estilo.boton,
                        flex: 2,
                    }}>
                        <Text style={estilo.textoBoton}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.boton}>
                        <Text style={estilo.textoBoton}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </View>
    );
}

const estilo = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    display: {
        flex: 3,
        backgroundColor: '#F9F3F3',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
    },
    panelBotones: {
        flex: 9,
        backgroundColor: '#DDDDDD',
    },
    fila: {
        flex: 1,
        flexDirection: 'row',
    },
    boton: {
        flex: 1,
        backgroundColor: colores.candyPink,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        borderRadius: 4,
    },
    textoBoton: {
        color: '#FFF',
        fontWeight: 'bold',
    }
});

export default FlexBoxScreen;