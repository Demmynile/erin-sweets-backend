module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cnem8run7f5s73e1ouug-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'store_magk'),
      user: env('DATABASE_USERNAME', 'store_magk_user'),
      password: env('DATABASE_PASSWORD', 'mLhTwypKreFVQDrVcdRRWzcMlZerqsHr'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});