import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // replace with your Laravel API URL

export function getTaskUsers() {
  return axios.get(`${API_URL}/TaskUsers`);
}

export function createTaskUser(TaskUser) {
  return axios.post(`${API_URL}/TaskUsers`, TaskUser);
}

export function updateTaskUser(id, TaskUser) {
  return axios.put(`${API_URL}/TaskUsers/${id}`, TaskUser);
}

export function deleteTaskUser(id) {
  return axios.delete(`${API_URL}/TaskUsers/${id}`);
}
