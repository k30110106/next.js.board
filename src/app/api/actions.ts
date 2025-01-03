"use server";
import { neon } from "@neondatabase/serverless";
import { BoardType } from "../type/boardType";

const DATABASE_URL: string | undefined = process.env.DATABASE_URL;

export const datasAPI = async (): Promise<BoardType[]> => {
  const sql = neon(DATABASE_URL as string);
  const data = await sql`SELECT * from BOARD`;
  return data as BoardType[];
};
