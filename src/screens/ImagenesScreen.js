import { Image, ScrollView, Text } from 'react-native';
import estilos from '../styles/estilos';

const ImagenesScreen = (props) => {
    return (
        <ScrollView>
            <Text style={
                estilos.tituloComponente
            }>
                Imagenes
            </Text>
            {/* Por defecto las imagenes en ReactNative pueden de un origen local o remoto sin necesidad de indicar ninguna libreria o permiso especial */}
           
           <Image 
                source={{
                    uri: 'https://zavaletazea.dev/img/serpiente.jpg'
                }}
                style={{
                    width: null,
                    height: 250,
                    resizeMode: 'center'
                }}
           />
            {/* Una imagen con origen local (desde un archivo) */}
           <Image 
                source={require('./../../assets/images/serpiente.jpeg')}
                style={{
                    width: null,
                    height: 400,
                    resizeMode: 'contain',
                }}
            />
        </ScrollView>
    );
}

export default ImagenesScreen;