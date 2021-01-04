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
   return "hello"
@app.route("/test_insert")
def test_insert():
    c2 = do.Customer(ConnectionData)
    c1 = bo.Customer(1,'Thanh','Le','aaa', 'Da Nang','100','bb')
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



@app.route('/order', methods=['POST'])
def add_order():
    data = request.json
    order = OrderEntity(OrderID=data['Order_ID'],
                                CustomerID=data['Customer_ID'],
                                EmployeeID=data['Employee_ID'],
                                OrderDate=data['Order_Date'],
                                ShipperID=data['Shipper_ID'])
    o = Order(connection_data)
    message = o.insert(order)
    if message is None:
        return jsonify({
            'message': 'Cannot insert data'
        }), 500
    return jsonify({
        'message': message
    })

    @app.route('/order/all')
def get_all_order():
    o = Order(connection_data)
    result = o.get_all()
    return jsonify({
        'data': result
    })

@app.route('/order/<int:id>', methods=['DELETE', 'PUT'])
def delete_order_by_id(id):
    if request.method == 'DELETE':
        # Delete user by id
        order = OrderEntity(customer_id=id)
        o = Order(connection_data)
        result = o.delete(order)
        return jsonify({
            'message': result[0]
        }), result[1]
    else:
        # Update user by id
        data = request.json
        order = OrderEntity(Order_ID=id,
                                    customer_id=data['customer_name'],
                                    Employee_ID=data['contact_name'],
                                    Order_Date=data['address'],
                                    Shipper_ID=data['city'])
        o = Order(connection_data)
        result = o.update(order)
        return jsonify({
            'message': result[0]
        }), result[1]

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080)