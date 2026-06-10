import type { Pool } from "mysql2/promise";

export function initDb(): Promise<void>;

declare const pool: Pool;
export default pool;
