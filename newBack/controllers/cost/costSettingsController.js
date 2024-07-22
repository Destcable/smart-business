import pool from "../../client.js";

export async function getCategorysForCost (req, res) { 
    const client = await pool.connect();

    const result = await client.query(
      `SELECT * FROM public."Category"
      WHERE "for" = 'cost'
      ORDER BY id ASC`);
    res.json(result.rows); 
}