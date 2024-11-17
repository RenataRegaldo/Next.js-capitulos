// pages/api/revenue.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Simulando datos de revenue (puedes reemplazarlo con datos reales o de una base de datos)
const revenueData = [
  { month: 'January', revenue: 1000 },
  { month: 'February', revenue: 1500 },
  { month: 'March', revenue: 1200 },
  { month: 'April', revenue: 1800 },
  { month: 'May', revenue: 2200 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Respondemos con los datos de revenue
    res.status(200).json(revenueData);
  } else {
    // Si la solicitud no es GET, respondemos con un error 405
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
