import axios from 'axios';

export async function callHuggingFace(model: string, input: string) {
  const resp = await axios.post(
    `https://api-inference.huggingface.co/models/${model}`,
    { inputs: input },
    { headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` } }
  );
  return resp.data;
}
