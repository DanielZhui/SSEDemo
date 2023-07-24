import axios from "axios";

const SERVER_URL = "http://127.0.0.1:3001";
export const Axios = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true,
});

export const STREAM_URL = `${SERVER_URL}/stream`;
export const ssEvents = new EventSource(STREAM_URL, { withCredentials: true });
