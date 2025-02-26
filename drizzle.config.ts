import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load environment variables from .env.local file
dotenv.config({ path: ".env.local" });

// Validate environment variables
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Please define DATABASE_URL in your environment variables.");
}

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});