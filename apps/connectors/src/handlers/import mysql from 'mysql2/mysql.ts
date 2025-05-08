import mysql from 'mysql2/promise';

export async function queryMySQL(query: string) {
  const conn = await mysql.createConnection(process.env.MYSQL_URL!);
  const [rows] = await conn.execute(query);
  return rows;
}
