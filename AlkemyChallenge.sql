CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "user_name" varchar NOT NULL,
  "login" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "operation" (
  "id" uuid PRIMARY KEY,
  "isue" varchar,
  "user_id" uuid NOT NULL,
  "amount" money NOT NULL,
  "transaction_type" uuid NOT NULL,
  "transaction_category" uuid NOT NULL,
  "transaction_date" timestamp DEFAULT 'now()'
);

CREATE TABLE "operation_types" (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "operation_category" (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL
);

ALTER TABLE "operation" ADD FOREIGN KEY ("transaction_category") REFERENCES "operation_category" ("id");

ALTER TABLE "operation" ADD FOREIGN KEY ("transaction_type") REFERENCES "operation_types" ("id");

ALTER TABLE "operation" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");