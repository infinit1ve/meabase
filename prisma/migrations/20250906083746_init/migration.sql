-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cookMinutes" INTEGER,
    "prepMinutes" INTEGER,
    "servings" INTEGER,
    "description" TEXT,
    "ingredients" JSONB NOT NULL,
    "steps" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_url_key" ON "Recipe"("url");
