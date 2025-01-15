CREATE TABLE books (
                       id SERIAL PRIMARY KEY,
                       isbn VARCHAR(20) NOT NULL UNIQUE,
                       name VARCHAR(255) NOT NULL,
                       description TEXT,
                       publication_date DATE NOT NULL
);