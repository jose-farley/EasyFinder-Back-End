/*
  Warnings:

  - Added the required column `location` to the `lostObject` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lostObject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    CONSTRAINT "lostObject_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_lostObject" ("description", "id", "name", "owner") SELECT "description", "id", "name", "owner" FROM "lostObject";
DROP TABLE "lostObject";
ALTER TABLE "new_lostObject" RENAME TO "lostObject";
CREATE UNIQUE INDEX "lostObject_owner_key" ON "lostObject"("owner");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
