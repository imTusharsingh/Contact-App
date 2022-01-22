import axios from "axios"
const url = "http://localhost:3005/contact/";

export const getContactCall = async () => {
    try {
        const res = await axios.get(url)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
    }

}

export const postContactCall = async (data) => {
    try {
        const res = await axios.post(url, data)
        const result = res.data;
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const deleteContactCall = async (id) => {
    try {
        const res = await axios.delete(`${url}${id}`)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
    }

}

export const putContactCall = async (data) => {
    try {
        const res = await axios.put(`${url}${data.id}`, data)
        const result = res.data;
        return result;
    } catch (err) {
        console.log(err)
    }

}