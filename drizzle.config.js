/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AutoTextDB_owner:ROek13BVJsbH@ep-wispy-shadow-a5ablxya.us-east-2.aws.neon.tech/AutoTextDB?sslmode=require',
    }
};