import { useState } from 'react';
import api from '../lib/api';

export default function useWorkflow() {
  const [workflow, setWorkflow] = useState<any>(null);
  const create = async (data: any) => {
    const res = await api.post('/workflows', data);
    setWorkflow(res.data);
  };
  return { workflow, create };
}
