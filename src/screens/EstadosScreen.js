import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const EstadosScreen = (props) => {

    /*

    ReactNative no permite modificar ningñun componente
    visual en tiempo de ejecución
    Por lo que no es posible modificar el valor
    de una variable

    React implementa el uso de estados para crear
    nuevas versiones de los elementos que deseamos
    actualizar, pero realmente no modifica nada solo
    crea nuevas versiones de dichos elementos

    Los estados utilizan un nombre de referencia y una 
    función que actualice por el nuevo valor

    const[nom_estado, nom_fn_estado] = React.useState(valor_ini)
    */

    const [contador, setContador] = React.useState(22);

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'tomato',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 8,
                    borderRadius: 8,
                }}
                onPress={() => {

                    // por medio de la función set
                    // actualizamos a una nueva constante con otro valor
                    setContador(contador + 1);
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 30,
                    }}
                >
                    +
                </Text>

            </TouchableOpacity>
            <View
                style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 50,
                        color: '#333',
                    }}
                >
                    {contador}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'tomato',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 8,
                    borderRadius: 8,
                }}
                onPress={() => {
                    setContador(contador - 1);
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 30,
                    }}
                >
                    -
                </Text>

            </TouchableOpacity>
        </View>
    );
}

export default EstadosScreen;