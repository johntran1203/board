import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "produrl";

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
} 

// an exportable async function that gets all boards (apiURL/boards/)
export const getAllBoards = async () => {
  try {
    const response = await axios.get(`${apiURL}/boards/`);
    
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// called createBoard or some name like that it should take in info on a new board and use it for the data on a axios.post request to our POST /boards/ endpoint
export const createBoard = async (newBoard) => {
  try {
    await axios.post(`${apiURL}/boards/`, newBoard);
  } catch (error) {
    console.error(error.message);
  }
}

export const getBoard = async(id) => {
  try {
    await axios.get(`${apiURL}/boards/${id}`)
  } catch (error) {
    console.error(error.message);
  }
}

export const deleteBoard = async(id) => {
  try {
    await axios.delete(`${apiURL}/boards/${id}`)
  } catch (error) {
    console.error(error.message);
  }
}

export const createCustomer = async (newCustomer) => {
  try {
    await axios.post(`${apiURL}/customers/`, newCustomer);
  } catch (error) {
    console.error(error.message);
  }
}

export const getAllCartoons = async () => {
  try {
    const response = await axios.get(`${apiURL}/cartoons/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
} 