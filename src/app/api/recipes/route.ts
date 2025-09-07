import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET /api/recipes → return all recipes
export async function GET() {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes);
}

// POST /api/recipes → create a new recipe
export async function POST(req: Request) {
  const data = await req.json();
  const recipe = await prisma.recipe.create({ data });
  return NextResponse.json(recipe, { status: 201 });
}