# 📚 Library Management System

A RESTful API for managing books and borrowing records using **Express**, **TypeScript**, **MongoDB** and **Mongoose**.

---

## Features

- Add, update, delete, and retrieve books
- Borrow books with availability validation
- Filter, sort, and paginate book listings
- Borrow summary using MongoDB aggregation
- Schema validation using Mongoose
- Static or instance methods for business logic
- Mongoose middleware (pre/post hooks)
- Unified API response structure and error handling

---

## Tech Stack

- **Backend:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose

---

## API Endpoints

### Book Endpoints

#### Create Book  
`POST /api/books`

#### 1. Get All Books  
`GET /api/books?filter=GENRE&sortBy=createdAt&sort=desc&limit=5`

#### 2. Get Book by ID  
`GET /api/books/:bookId`

#### 3. Update Book  
`PUT /api/books/:bookId`

#### 4. Delete Book  
`DELETE /api/books/:bookId`

---

### Borrow Endpoints

#### 1. Borrow a Book  
`POST /api/borrow`

#### 2. Borrowed Books Summary  
`GET /api/borrow`

---

##  Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Sumu154/Programming_hero_level_2-Assignment_3.git
cd Programming_hero_level_2-Assignment_3
```

2. **Install Dependencies**
```bash
npm install
```

3. **Set Environment Variables**
Create a .env file in the root:
```bash
PORT=5000
DB_USERNAME = your mongodb username
DB_PASSWORD = your mongodb password
```

4. **Run the Project**
```bash
npm run dev
```



