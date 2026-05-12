# Customer Rewards App

## Project Overview

This application calculates reward points for customers based on their transactions.

Customers receive:
- 2 points for every dollar spent over $100
- 1 point for every dollar spent between $50 and $100

Example:
- Purchase of $120:
  - 2 × 20 = 40 points
  - 1 × 50 = 50 points
  - Total = 90 points

---

# Features

- Customer rewards dashboard
- Dynamic customer listing
- Monthly reward summary
- Total reward points calculation
- Month and year filters
- Transactions table
- Pagination support
- Async API simulation
- Loading and error handling
- Transaction logging using Pino
- Unit testing with Jest
- Styled-components based UI

---

# Technologies Used

- React JS
- JavaScript (ES6)
- Styled Components
- PropTypes
- Jest
- Pino Logger

---

# Folder Structure

src/
│
├── components/
├── constants/
├── pages/
├── services/
├── styles/
├── tests/
├── utils/
│
├── App.js
├── index.js
└── logger.js

---

# Reward Calculation Logic

- Amount below or equal to $50:
  - 0 points

- Amount between $51 and $100:
  - 1 point for every dollar above $50

- Amount above $100:
  - 2 points for every dollar above $100
  - Plus 50 points for amount between $50 and $100

---

# Setup Instructions

## Clone Repository

git clone <repository-url>

## Install Dependencies

npm install

## Start Application

npm start

Application runs on:
http://localhost:3000

---

# Run Test Cases

npm test

---

# API Simulation

The application uses:
- local JSON mock data
- Promise
- setTimeout

to simulate async API behavior.

---

# Logging

Pino logger is used for:
- API fetch logs
- Error logs

---

# Test Cases Included

Positive Test Cases:
- Reward calculation for amount above 100
- Reward calculation for amount between 50 and 100
- Reward calculation for large amounts

Negative / Edge Cases:
- Amount below 50
- Negative amount
- Decimal amount
- Exactly 50
- Exactly 100

---

# Screenshots

Add screenshots here:
- Dashboard UI
- Filters
- Pagination
- Test case success

---

# Future Improvements

- Add charts and analytics
- Export reports
- Advanced filtering
- Search functionality

---

# Author

Javisetty Anjaneyulu