import { Image, ImageBackground, ScrollView, Text } from 'react-native';
import colores from '../styles/colores';
import estilos from '../styles/estilos';

const ImagenesScreen = (props) => {
    return (
        <ImageBackground
        source={require('./../../assets/images/serpiente.jpeg')}
        style={{
            flex: 1,
        }}
    >
        <ScrollView>
            <Text style={{
                ...estilos.tituloComponente,
                color: colores.lightCyan,
                fontSize: 40,
            }}>
                Imagenes
            </Text>
            {/* Por defecto las imagenes en ReactNative pueden de un origen local o remoto sin necesidad de indicar ninguna libreria o permiso especial */}
           
           {/* Una imagen desde una url */}
           <Image 
                source={{
                    uri: 'https://zavaletazea.dev/img/serpiente.jpg'
                }}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'cover',
                    alignSelf: 'center',
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#000',
                }}
           />
            {/* Una imagen con origen local (desde un archivo) */}
           <Image 
                source={require('./../../assets/images/serpiente.jpeg')}
                style={{
                    marginTop: 120,
                    width: 200,
                    height: 200,
                    resizeMode: 'cover',
                    alignSelf: 'center',
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#000',
                }}
            />

           
            
        </ScrollView>
        </ImageBackground>
    );
}

export default ImagenesScreen;