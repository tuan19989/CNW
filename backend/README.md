# CNW
# docker back end
# Phạm Công Tuấn
# Võ Văn Tứ
# Nguyễn Trọng Hưng
# Cách Chạy 
1. Dừng và xóa vùng chứa cũ: docker stop flask-backend && docker rm flask-backend
2. Xây dựng hình ảnh: docker build -t backend .
3. chạy vùng chứ :sudo docker run -d --name backend --env db_ip=10.0.2.15 -p 8080:8080 backend
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
