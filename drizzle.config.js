"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
const dotenv_1 = require("dotenv");
// Load environment variables from .env.local file
dotenv_1.default.config({ path: ".env.local" });
// Validate environment variables
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("Please define DATABASE_URL in your environment variables.");
}
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: "./lib/schema.ts",
    out: "./supabase/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: databaseUrl,
    },
});
