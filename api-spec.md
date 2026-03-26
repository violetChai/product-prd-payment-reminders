# API Specification – Payment Reminder Service

Base URL

/api/v1

---

## GET /payments

Description:
Returns upcoming payments for a user.

Response

[
  {
    "paymentId": "123",
    "name": "Electricity Bill",
    "amount": 120,
    "dueDate": "2026-04-05"
  }
]

---

## POST /payments

Create a new payment.

Request

{
  "name": "Internet",
  "amount": 80,
  "dueDate": "2026-04-10"
}

Response

{
  "status": "success",
  "paymentId": "456"
}

---

## DELETE /payments/{id}

Deletes a payment reminder.
