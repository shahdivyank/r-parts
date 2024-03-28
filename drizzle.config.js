export default {
  schema: "./src/db/schema.js",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_TOKEN,
  },
};
