import axios from "axios";

const base_url = process.env.baseURL || "http://localhost:8002";

const API_URL = "/api/viewer/";

const getAllObjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getObject = async (object_name) => {
  const response = await axios.get(API_URL + object_name);
  return response.data;
};

const object3DService = {
  getAllObjects,
  getObject,
};

export default object3DService;
