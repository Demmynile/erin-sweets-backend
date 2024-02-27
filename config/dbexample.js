// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//         client: env('DATABASE_CLIENT', 'postgres'),
//         host: env('DATABASE_HOST', 'dpg-cnem8run7f5s73e1ouug-a.frankfurt-postgres.render.com'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'store_magk'),
//         user: env('DATABASE_USERNAME', 'store_magk_user'),
//         password: env('DATABASE_PASSWORD', 'mLhTwypKreFVQDrVcdRRWzcMlZerqsHr'),
//         ssl: env.bool('DATABASE_SSL', true),
//       },
//     },
//   });
//   module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'store'),
//         user: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'Harbeedeymee_123'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   });