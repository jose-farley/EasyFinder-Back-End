/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lostObject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    CONSTRAINT "lostObject_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_lostObject" ("description", "id", "name", "owner") SELECT "description", "id", "name", "owner" FROM "lostObject";
DROP TABLE "lostObject";
ALTER TABLE "new_lostObject" RENAME TO "lostObject";
CREATE UNIQUE INDEX "lostObject_owner_key" ON "lostObject"("owner");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
