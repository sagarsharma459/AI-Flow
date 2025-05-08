import axios from 'axios';

const API = axios.create({ baseURL: process.env.ENGINE_URL });

export default {
  async createWorkflow(data: any) {
    const { data: workflow } = await API.post('/workflows', data);
    return workflow;
  },
  async runWorkflow(id: string) {
    const { data: result } = await API.post(`/workflows/${id}/run`);
    return result;
  }
};
