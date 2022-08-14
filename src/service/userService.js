import axios from 'axios'
const host = 'http://localhost:8000/api/v1'

const login = async (creds)=>{
    try{
        let {data} = await axios.post(`${host}/login`,creds)
        return data.data;
          
    }
    catch(err){
        throw new Error(err.response.data.message);
    }

}

export default login