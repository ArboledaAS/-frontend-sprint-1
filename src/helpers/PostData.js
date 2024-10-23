import axios from 'axios';

// Esta función realiza una petición POST al endpoint URL con los datos
const postData = async (url, datos) => {
    try {
        await axios.post(url, datos);
        
    } catch (error) {
        console.error(error);
    }
};

export default postData;