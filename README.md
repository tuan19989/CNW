# CNW
# docker back end
# Phạm Công Tuấn(5 bảng)
# Võ Văn Tứ
# Nguyễn Trọng Hưng
# Cách Chạy ..
1. Dừng và xóa vùng chứa cũ: docker stop flask-backend && docker rm flask-backend
2. Xây dựng hình ảnh: docker build -t backend .
3. chạy vùng chứ :sudo docker run -d --name backend --env db_ip=10.0.2.15 -p 8080:8080 backend
4. Cài NAT để insert,update,delete trên Postman
# Entity
# Customer
* CustomerID: int
* CustomerNName: string
* ContactName: string
* Address: string
* City: string
* PostalCode: string
* Country: string
# Category
* CategoryID: int
* CategoryName: string
* Description: string
# Employee
* EmployeeID: int
* LastName: string
* FirstName: string
* Birthdate: date
* Photo: string
* Notes: string
# Orther detail
* OrderDetailID: int
* OrderID: string
* ProductID: string
* Quantity: string
# Order
* OrderID: int
* CustomerID: string
* EmployeeID: string
* OrderDate: date
* ShipperID: string
# Product
* ProductID: int
* ProductName: string
* SupplierID: string
* CategoryID: string
* Unit: string
* Price: string
# Shipper
* ShipperID: int
* ShipperName: string
* Phone: string
# Supplier
* SupplierID: int
* SupplierName: string
* ContactName: string
* Address: string
* City: string
* PostalCode: string
* Country: string
* Phone: string
# API
# Customer
# Get all customer
* Request
    * Method: GET
    * Endpoint: /user/all
    * Params: None
    * Body: None
* Response: [Customer]
# Add a customer
* Request:
    * Method: POST
    * Endpoint: /user/insert
    * Body:
        * CustomerName: string
        * ContactName: string
        * Address: string
        * City: string
        * PostalCode: string
        * Country: string
    * Response: Message
# Update a customer
* Request:
    * Method: POST
    * Endpoint: /user/update/:customer_id
    * Body:
        * CustomerName: string
        * ContactName: string
        * Address: string
        * City: string
        * PostalCode: string
        * Country: string
* Response: Message
# Delete a customer
* Request:
    * Method: DELETE
    * Endpoint: /user/delete/:customer_id
* Response: message
# category
# Get all category
* Request:
    * Method: GET
    * Endpoint: /category/all
    * Params: None
    * Body: None Response: [category]
# Add a category
* Request:
    * Method: POST
    * Endpoint: category/insert
    * Body:
        * CategoryName: string
        * Description: string
* Response: Message
# Update a category
* Request:
    * Method: PUT
    * Endpoint: /category/update/:category_id
    * Body:
        * CategoryName: string
        * Description: string
* Response: Message
# Delete a category
* Request:
    * Method: DELETE
    * Endpoint: /category/delete/:category_id
* Response: message
# Employee
# Get all Employee
* Request:
    * Method: GET
    * Endpoint: /employee/all
    * Params: None
    * Body: None
* Response: [Employee]
# Add a Employee
* Request:
    * Method: POST
    * Endpoint: /employee/insert
    * Body:
        * LastName: string
        * FirstName: string
        * Birthdate: date
        * Photo: string
        * Notes: string
* Response: Message
# Update a Employee
* Request:
    * Method: PUT
    * Endpoint: /employee/:employee_id
    * Body:
        * LastName: string
        * FirstName: string
        * Birthdate: date
        * Photo: string
        * Notes: string
* Response: Message
# Delete a Employee
* Request:
    * Method: DELETE
    * Endpoint: /employee/:employee_id
* Response: message
# OrderDetails
# Get all order detail
* Request:
    * Method: GET
    * Endpoint: /order_detail/all
    * Params: None
    * Body: None
* Response: [order_detail]
# Add a order detail
* Request:
    * Method: POST
    * Endpoint: /order_detail/insert
    * Body:
        * OrderID: string
        * ProductID: string
        * Quantity: string
* Response: Message
# Update a order detail
* Request:
    * Method: PUT
    * Endpoint: /order_detail/update/:odd_id
    * Body:
        * OrderID: string
        * ProductID: string
        * Quantity: string
* Response: Message
# Delete a order detail
* Request:
    * Method: DELETE
    * Endpoint: /order_detail/delete/:odd_id
* Response: message
# Orders
# Get all order
* Request:
    * Method: GET
    * Endpoint: /order/all
    * Params: None
    * Body: None
* Response: [order]
# Add a order
* Request:
    * Method: POST
    * Endpoint: /order/insert
    * Body:
        * CustomerID: string
        * EmployeeID: string
        * OrderDate: date
        * ShipperID: string
* Response: Message
# Update a order
* Request:
    * Method: PUT
    * Endpoint: /order/update/:od_id
    * Body:
        * CustomerID: string
        * EmployeeID: string
        * OrderDate: date
        * ShipperID: string
* Response: Message
# Delete a order
* Request:
    * Method: DELETE
    * Endpoint: /order/delete/:od_id
* Response: message
# Products
# Get all Product
* Request:
    * Method: GET
    * Endpoint: /product/all
    * Params: None
    * Body: None
* Response: [Product]
# Add a Product
* Request:
    * Method: POST
    * Endpoint: /product/insert
    * Body:
        * ProductName: string
        * SupplierID: string
        * CategoryID: string
        * Unit: string
        * Price: string
* Response: Message
# Update a Product
* Request:
    * Method: PUT
    * Endpoint: /product/update/:product_id
    * Body:
        * ProductName: string
        * SupplierID: string
        * CategoryID: string
        * Unit: string
        * Price: string
* Response: Message
# Delete a Product
* Request:
    * Method: DELETE
    * Endpoint: /product/delete/:product_id
* Response: message
# Shippers
# Get all Shipper
* Request:
    * Method: GET
    * Endpoint: /shipper/all
    * Params: None
    * Body: None
* Response: [Shipper]
# Add a Shipper
* Request:
    * Method: POST
    * Endpoint: /shipper/insert
    * Body:
        * ShipperName: string
        * Phone: string
* Response: Message
# Update a Shipper
* Request:
    * Method: PUT
    * Endpoint: /shipper/update/:shipper_id
    * Body:
        * ShipperName: string
        * Phone: string
* Response: Message
# Delete a Shipper
* Request:
    * Method: DELETE
    * Endpoint: /shipper/delete/:shipper_id
* Response: message
# Suppliers
# Get all supplier
* Request:
    * Method: GET
    * Endpoint: /supplier/all
    * Params: None
    * Body: None
* Response: [Supplier]
# Add a supplier
* Request:
    * Method: POST
    * Endpoint: /supplier/insert
    * Body:
        * SupplierName: string
        * ContactName: string
        * Address: string
        * City: string
        * PostalCode: string
        * Country: string
        * Phone: string
* Response: Message
# Update a supplier
* Request:
    * Method: PUT
    * Endpoint: /supplier/update/:supplier_id
    * Body:
        * SupplierName: string
        * ContactName: string
        * Address: string
        * City: string
        * PostalCode: string
        * Country: string
        * Phone: string
* Response: Message
# Delete a supplier
* Request:
    * Method: DELETE
    * Endpoint: /supplier/delete/:supplier_id
* Response: message

