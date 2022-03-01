const { View, Text, Button } = require("react-native");

const HomeDrawerItem = (props) => {
    return (
        <View 
            style={{
                flex: 1, 
                // justifycontent permite las siguintes alienaciones verticales
                // center <------ centrar de manera vertical
                // space between <---- poner los elementos a los extremos verticales
                // space-around <----- genera un epacio simetrico de los extremos
                // space-evenly <----- genera un espacio simetrico de los componentes
                // flex-end <--------- manda los elementos al final
                // flex-start <------- manda los elementos al inicio
                justifyContent: 'space-evenly', 
                alignItems: 'center'
            }}
        >
            <Text>
                HomeDrawerItem.js
            </Text>
            <Button 
                title="Regresar al menú"
                onPress={() => {
                    props.navigation.navigate('menu');
                }}
            />
        </View>
    );
}

export default HomeDrawerItem;