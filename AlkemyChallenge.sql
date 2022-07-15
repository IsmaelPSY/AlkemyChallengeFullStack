CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "user_name" varchar NOT NULL,
  "login" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "operation" (
  "id" serial PRIMARY KEY,
  "isue" varchar,
  "user_id" int NOT NULL,
  "amount" money NOT NULL,
  "transaction_type" int NOT NULL,
  "transaction_category" int NOT NULL,
  "transaction_date" timestamp DEFAULT 'now()'
);

CREATE TABLE "operation_types" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "operation_category" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL
);

COMMENT ON COLUMN "users"."login" IS 'hola';

ALTER TABLE "operation" ADD FOREIGN KEY ("transaction_category") REFERENCES "operation_category" ("id");

ALTER TABLE "operation" ADD FOREIGN KEY ("transaction_type") REFERENCES "operation_types" ("id");

ALTER TABLE "operation" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
