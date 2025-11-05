# Digital Notebook API – Financial Tracker

A backend API for tracking **sales**, **expenses**, and **profit/loss** in a digital notebook system.  
It helps users monitor their business performance by recording transactions and generating financial summaries.

---

##  Tech Stack
- Node.js  
- Express.js  
- MySQL  
- Sequelize ORM  
- dotenv  
- nodemon  
- helmet  

---

## Endpoints Summary

### **Sales**
| Action | Method | Endpoint |
|--------|---------|-----------|
| Create Sale | **POST** | `/api/sales` |
| Get All Sales | **GET** | `/api/sales` |
| Get Sale by ID | **GET** | `/api/sales/:id` |
| Update Sale | **PUT** | `/api/sales/:id` |
| Delete Sale | **DELETE** | `/api/sales/:id` |
| Get Total Sales | **GET** | `/api/sales/total` |

---

### **Expenses**
| Action | Method | Endpoint |
|--------|---------|-----------|
| Create Expense | **POST** | `/api/expenses` |
| Get All Expenses | **GET** | `/api/expenses` |
| Get Expense by ID | **GET** | `/api/expenses/:id` |
| Update Expense | **PUT** | `/api/expenses/:id` |
| Delete Expense | **DELETE** | `/api/expenses/:id` |
| Get Total Expenses | **GET** | `/api/expenses/total` |

---

### **Profit & Loss**
| Action | Method | Endpoint |
|--------|---------|-----------|
| Get Profit & Loss Summary | **GET** | `/api/reports/profit-loss` |

---

## API Endpoints

### **1. Sales Endpoints**
---
#### ➤ Create Sale  
#### POST `http://localhost:3000/api/sales`  
**Payload:**
---
```json
{
  "userId": 1,
  "title": "Phone Sales",
  "amount": 250000,
  "category": "Gadget",
  "note": "Sold 5 phones",
  "date": "2025-11-01"
}
```
### Response
```json
{
  "message": "Sale added successfully",
  "sale": {
    "id": 6,
    "userId": 1,
    "title": "Phone Sales",
    "amount": 250000,
    "category": "Gadget",
    "note": "Sold 5 phones",
    "date": "2025-11-01",
    "synced": true,
    "createdAt": "2025-11-03T22:07:32Z",
    "updatedAt": "2025-11-03T22:07:32Z"
  }
}
```

#### **2. Expenses Endpoints**
---
#### ➤ Create Expenses  
#### POST http://localhost:3000/api/expenses  
**Payload:**
---
```json

{
  "userId": 1,
  "title": "Office Rent",
  "amount": 50000,
  "category": "Bills",
  "note": "Monthly rent payment",
  "date": "2025-11-01"
}
```

#### Response
```json
{
  "message": "Expense added successfully",
  "expense": {
    "id": 3,
    "userId": 1,
    "title": "Office Rent",
    "amount": 50000,
    "category": "Bills",
    "note": "Monthly rent payment",
    "date": "2025-11-01",
    "createdAt": "2025-11-03T22:15:32Z",
    "updatedAt": "2025-11-03T22:15:32Z"
  }
}
```
---
#### ➤ Get Total Sales Endpoint
#### GET http://localhost:3000/api/sales/total
---
#### Response
```json
{
  "totalSales": 275000
}
```
---
#### 3. Profit & Loss Endpoint
#### ➤ Get Profit & Loss Summary
GET http://localhost:3000/api/reports/profit-loss
---
### Response (Profit)
```json
{
  "totalSales": 275000,
  "totalExpenses": 55000,
  "profitOrLoss": 220000,
  "status": "Profit"
}
```

### Response (Loss)

{
  "totalSales": 50000,
  "totalExpenses": 100000,
  "profitOrLoss": -50000,
  "status": "Loss"
}

#### Testing

Use Postman, Swagger UI, or Thunder Client to test all endpoints above.
