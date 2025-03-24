import pool from "@/lib/db";

export async function GET() {
  try {
    const res = await pool.query('SELECT DISTINCT "Catégorie" FROM public.questions');
    return Response.json({ categories: res.rows.map(row => row["Catégorie"]) });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Database connection failed" }, { status: 500 });
  }
}
