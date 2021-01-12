from flask import Flask, jsonify, request
import os
import BusinessObject as bo
import DataObject as do 

app = Flask(__name__)

db_ip = os.getenv("db_ip")
ConnectionData = {}
ConnectionData['user'] = 'postgres'
ConnectionData['password'] = 'postgres'
ConnectionData['host'] = str(db_ip)
ConnectionData['port'] = '5432'
ConnectionData['database'] = 'northwind'

@app.route("/")
def hello():
   return "hello123"
@app.route("/test_insert")
def test_insert():
    c2 = do.Customer(ConnectionData)
    c1 = bo.Customer('Tuan','Pham','abc', 'QuangNam','123','aa')
    s1 = c2.insert(c1)
    return s1

@app.route('/test_send_receive', methods=['POST'])
def test_send_receive():
    x = request.json['x']
    y = x + 1
    result = {}
    result['y'] = y
    return jsonify(result), 200

@app.route('/user/insert', methods=['POST'])
def user_insert():
    data = request.json
    c1 = bo.Customer(data['CustomerID'], data['CustomerName'], data['ContactName'], data['Address'], data['City'], data['PostalCode'], data['Country'])
    c2 = do.Customer(ConnectionData)
    s1 = c2.insert(c1)
    result = {}
    result['message'] = s1
    return jsonify(result), 200

@app.route('/user/all')
def get_all_user():
    result = do.Customer(ConnectionData).get_all()
    return jsonify(result), 200

@app.route('/user/get/<int:customer_id>')
def get_user_by_id(customer_id):
    c = bo.Customer(CustomerID=customer_id)
    result = do.Customer(ConnectionData).get_by_id(c)
    if result[1] != 200:
        return jsonify({'message':result[0]}), result[1]
    return jsonify(result[0].to_json()), 200

@app.route('/user/update/<int:customer_id>',methods=['PUT'])
def update_user_by_id(customer_id):
    data = request.json
    c = bo.Customer(CustomerID = customer_id, CustomerName=data['CustomerName'], ContactName=data['ContactName'],Address=data['Address'], City=data['City'], PostalCode=data['PostalCode'], Country=data['Country'])
    result = do.Customer(ConnectionData).update(c)
    return jsonify({'message':result[0]}),result[1]

@app.route('/user/delete/<int:customer_id>', methods=['DELETE'])
def delete_user_by_id(customer_id):
    c = bo.Customer(CustomerID=customer_id)
    result = do.Customer(ConnectionData).delete(c)
    return jsonify({'message':result[0]}), result[1]
#Categories
@app.route('/category/all')
def get_all_category():
    c = do.Category(ConnectionData).get_all()
    return jsonify(c), 200
@app.route('/user/insert', methods=['POST'])
def user_insert():
    data = request.json
    c1 = bo.Categorie(data['CategoryID'], data['CategoryName'], data['Description'])
    c2 = do.Categorie(ConnectionData)
    s1 = c2.insert(c1)
    result = {}
    result['message'] = s1
    return jsonify(result), 200
    
@app.route('/user/get/<int:Categorie_id>')
def get_user_by_id(Categorie_id):
    c = bo.Categorie(CategoryID=Categorie_id)
    result = do.Categorie(ConnectionData).get_by_id(c)
    if result[1] != 200:
        return jsonify({'message':result[0]}), result[1]
    return jsonify(result[0].to_json()), 200

@app.route('/user/update/<int:Categorie_id>',methods=['PUT'])
def update_user_by_id(Categorie_id):
    data = request.json
    c = bo.Categorie(CategoryID = Categorie_id, CategoryName=data['CategoryName'], Description=data['Description'])
    result = do.Categorie(ConnectionData).update(c)
    return jsonify({'message':result[0]}),result[1]

@app.route('/user/delete/<int:Categorie_id>', methods=['DELETE'])
def delete_user_by_id(Categorie_id):
    c = bo.Categorie(CategoryID=Categorie_id)
    result = do.Categorie(ConnectionData).delete(c)
    return jsonify({'message':result[0]}), result[1]
#Employee
@app.route('/employee/insert', methods=['POST'])
def employee_insert():
    data = request.json
    c1 = bo.Employee(LastName=data['LastName'], FirstName=data['FirstName'], Birthdate=data['Birthdate'], Photo=data['Photo'], Notes=data['Notes'])
    c2 = do.Employee(ConnectionData)
    s1 = c2.insert(c1)
    result = {}
    result['message'] = s1
    return jsonify(result), 200

@app.route('/employee/all')
def get_all_employee():
    result = do.Employee(ConnectionData).get_all()
    return jsonify(result), 200

@app.route('/employee/<int:employee_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_employee(employee_id):
    if request.method == 'GET':
        # Get 
        c = bo.Employee(EmployeeID=employee_id)
        result = do.Employee(ConnectionData).get_by_id(c)
        if result[1] != 200:
            return jsonify({'message': result[0]}), result[1]
        return jsonify(result[0].to_json()), 200
    elif request.method == 'PUT':
        # Update 
        data = request.json
        c = bo.Employee(EmployeeID=employee_id, LastName=data['LastName'], FirstName=data['FirstName'], Birthdate=data['Birthdate'], Photo=data['Photo'], Notes=data['Notes'])
        result = do.Employee(ConnectionData).update(c)
        return jsonify({'message': result[0]}), result[1]
    elif request.method == 'DELETE':
        # Delete 
        c = bo.Employee(EmployeeID=employee_id)
        result = do.Employee(ConnectionData).delete(c)
        return jsonify({'message': result[0]}), result[1]

#order
@app.route('/order/all')
def get_all_order():
    c = do.Order(ConnectionData).get_all()
    return jsonify(c), 200

@app.route('/order/insert', methods=['POST'])
def insert_order():
    data = request.json
    order = bo.Order(CustomerID=data['CustomerID'], EmployeeID=data['EmployeeID'], OrderDate=data['OrderDate'], ShipperID=data['ShipperID'])
    result = do.Order(ConnectionData).insert(order)
    return jsonify({'message': result}), 200

@app.route('/order/get/<int:od_id>')
def get_order_by_id(od_id):
    order = bo.Order(OrderID=od_id)
    result = do.Order(ConnectionData).get_by_id(order)
    if result[1] != 200:
        return jsonify({'message': result[0]}), result[1]
    return jsonify(result[0].to_json()), 200

@app.route('/order/update/<int:od_id>', methods=['PUT'])
def update_order_by_id(od_id):
    data = request.json
    order = bo.Order(OrderID=od_id, CustomerID=data['CustomerID'], EmployeeID=data['EmployeeID'], OrderDate=data['OrderDate'], ShipperID=data['ShipperID'])
    result = do.Order(ConnectionData).update(order)
    return jsonify({'message': result[0]}), result[1]

@app.route('/order/delete/<int:od_id>', methods=['DELETE'])
def delete_order_by_id(od_id):
    c = bo.Order(OrderID=od_id)
    result = do.Order(ConnectionData).delete(c)
    return jsonify({'message': result[0]}), result[1]

#ortherdetail
@app.route('/order_detail/all')
def get_all_order_detail():
    c = do.OrderDetail(ConnectionData).get_all()
    return jsonify(c), 200

@app.route('/order_detail/insert', methods=['POST'])
def insert_order_detail():
    data = request.json
    orderr = bo.OrderDetail(OrderID=data['OrderID'], ProductID=data['ProductID'], Quantity=data['Quantity'])
    result = do.OrderDetail(ConnectionData).insert(orderr)
    return jsonify({'message': result}), 200

@app.route('/order_detail/get/<int:odd_id>')
def get_order_detail_by_id(odd_id):
    orderr = bo.OrderDetail(OrderDetailID=odd_id)
    result = do.OrderDetail(ConnectionData).get_by_id(orderr)
    if result[1] != 200:
        return jsonify({'message': result[0]}), result[1]
    return jsonify(result[0].to_json()), 200

@app.route('/order_detail/update/<int:odd_id>', methods=['PUT'])
def update_order_detail_by_id(odd_id):
    data = request.json
    orderr = bo.OrderDetail(OrderDetailID=odd_id, OrderID=data['OrderID'], ProductID=data['ProductID'], Quantity=data['Quantity'])
    result = do.OrderDetail(ConnectionData).update(orderr)
    return jsonify({'message': result[0]}), result[1]

@app.route('/order_detail/delete/<int:odd_id>', methods=['DELETE'])
def delete_order_detail_by_id(odd_id):
    c = bo.OrderDetail(OrderDetailID=odd_id)
    result = do.OrderDetail(ConnectionData).delete(c)
    return jsonify({'message': result[0]}), result[1]

#Product
@app.route('/product/insert', methods=['POST'])
def product_insert():
    data = request.json
    c1 = bo.Product(data['ProductID'], data['ProductName'], data['SupplierID'], data['CategoryID'], data['Unit'], data['Price'])
    c2 = do.Product(ConnectionData)
    s1 = c2.insert(c1)
    result = {}
    result['message'] = s1
    return jsonify(result), 200

@app.route('/product/all')
def get_all_product():
    result = do.Product(ConnectionData).get_all()
    return jsonify(result), 200

@app.route('/product/get/<int:product_id>')
def get_product_by_id(product_id):
    c = bo.Product(ProductID=product_id)
    result = do.Product(ConnectionData).get_by_id(c)
    if result[1] != 200:
        return jsonify({'message': result[0]}), result[1]
    return jsonify(result[0].to_json()), 200

@app.route('/product/update/<int:product_id>', methods=['PUT'])
def update_product_by_id(product_id):
    data = request.json
    c = bo.Product(ProductID = product_id, ProductName=data['ProductName'], SupplierID=data['SupplierID'], CategoryID=data['CategoryID'], Unit=data['Unit'], Price=data['Price'])
    result = do.Product(ConnectionData).update(c)
    return jsonify({'message':result[0]}),result[1]

@app.route('/product/delete/<int:product_id>', methods=['DELETE'])
def delete_product_by_id(product_id):
    c = bo.Product(ProductID=product_id)
    result = do.Product(ConnectionData).delete(c)
    return jsonify({'message':result[0]}),result[1]



if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080)