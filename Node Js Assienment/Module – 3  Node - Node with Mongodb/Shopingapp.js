// Switch to the online_shopping_app database
// use online_shopping_app

// Insert sample data into the users collection
db.users.insertOne({
    "user_id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "password": "hashed_password",
    "address": "123 Main St, City, Country",
    "payment_info": {
        "card_number": "XXXX-XXXX-XXXX-XXXX",
        "expiry_date": "MM/YY",
        "cvv": "123"
    },
    "order_history": []
})

// Insert sample data into the product_categories collection
db.product_categories.insertOne({
    "category_id": 1,
    "category_name": "Electronics",
    "description": "Electronic gadgets and devices"
})

// Insert sample data into the products collection
db.products.insertOne({
    "product_id": 1,
    "product_name": "Laptop",
    "description": "High-performance laptop with SSD",
    "price": 1000.00,
    "quantity_available": 10,
    "category_id": 1
})

// Insert sample data into the orders collection
db.orders.insertOne({
    "order_id": 101,
    "user_id": 1,
    "product_id": 1,
    "quantity": 2,
    "total_price": 50.00,
    "order_date": "2024-04-06",
    "shipping_address": "123 Main St, City, Country",
    "status": "shipped"
})

// Insert sample data into the reviews collection
db.reviews.insertOne({
    "review_id": 1,
    "product_id": 1,
    "user_id": 1,
    "rating": 5,
    "review_text": "Great laptop, very fast and reliable.",
    "date_posted": "2024-04-06"
})
