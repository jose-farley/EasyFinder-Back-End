/*
  Warnings:

  - Added the required column `perfilImage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "homeNumber" INTEGER NOT NULL,
    "perfilImage" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "homeNumber", "id", "name", "password", "phoneNumber", "state", "street") SELECT "email", "homeNumber", "id", "name", "password", "phoneNumber", "state", "street" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
