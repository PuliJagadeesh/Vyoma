import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const data = schema.parse(req.body);
    const { error } = await supabase.from('contacts').insert([data]);
    if (error) throw error;
    return res.status(200).json({ status: 'ok' });
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
}