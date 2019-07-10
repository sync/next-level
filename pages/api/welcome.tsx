import { NextApiRequest, NextApiResponse } from 'next';

const welcome = (_req: NextApiRequest, res: NextApiResponse) => {
  res.json({ name: 'beautiful' });
};

export default welcome;
