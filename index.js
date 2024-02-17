import 'dotenv/config'; // Usamos dotenv para que cree las variables en nuestro entorno
import pg from 'pg' // driver para conectarnos a postgresql

const pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const getDateFromPostgreSQL = async ({ pool }) => {
  try {
    const result = await pool.query('SELECT now()', []);
    return result;
  } catch (error) {
    throw error;
  }
}

getDateFromPostgreSQL({ pool })
  .then(result => console.log(result.rows[0]))
  .catch(error => console.log(error))
  .finally(() => pool.end());
