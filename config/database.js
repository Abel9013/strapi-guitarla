module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfg3suo2i3mg6pau8olg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_o9fj'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'sdkRvGGbwzDePdP5LRfbPvREs4b1O2Gv'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
