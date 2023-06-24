-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lostObject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "isLosted" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "objectImage" TEXT NOT NULL,
    CONSTRAINT "lostObject_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_lostObject" ("description", "id", "isLosted", "location", "name", "objectImage", "owner") SELECT "description", "id", "isLosted", "location", "name", "objectImage", "owner" FROM "lostObject";
DROP TABLE "lostObject";
ALTER TABLE "new_lostObject" RENAME TO "lostObject";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
