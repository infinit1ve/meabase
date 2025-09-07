/*
  Warnings:

  - Added the required column `imgUrl` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cookMinutes" INTEGER,
    "prepMinutes" INTEGER,
    "servings" INTEGER,
    "description" TEXT,
    "ingredients" JSONB NOT NULL,
    "steps" JSONB NOT NULL
);
INSERT INTO "new_Recipe" ("cookMinutes", "description", "id", "ingredients", "name", "prepMinutes", "servings", "steps", "url") SELECT "cookMinutes", "description", "id", "ingredients", "name", "prepMinutes", "servings", "steps", "url" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_url_key" ON "Recipe"("url");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
