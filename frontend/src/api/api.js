import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const submitGraph = async (graphData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/pipelines/parse`, graphData);
        return response.data;
    } catch (error) {
        console.error('Error submitting graph:', error);
        throw error;
    }       
}

export const testGet = async () => { 

    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response;
    } catch (error) {
        console.error('Error in testGet:', error);
        throw error;
    }
}