import psycopg2
from BusinessObject import Customer as CustomerEntity
class Customer:
    def __init__(self,ConnectionData):
        self.ConnectionData = ConnectionData
    def insert(self,customer):
        con = None
        try:
            con = psycopg2.connect(user = self.ConnectionData['user'],
                                password = self.ConnectionData['password'],
                                host = self.ConnectionData['host'],
                                port = self.ConnectionData['port'],
                                database = self.ConnectionData['database'])
            cur = con.cursor()
            sql = "INSERT INTO TblCustomers(CustomerName,ContactName,Address,City,PostalCode,Country) VALUES (%s,%s,%s,%s,%s,%s)"
            record_to_insert = (customer.CustomerName,customer.ContactName,customer.Address,customer.City,customer.PostalCode,customer.Country)
            cur.execute(sql, record_to_insert)
            con.commit()
            con.close()
            return 'Insert TblCustomers successfully'
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_all(self):
        con = None
        try:
            con = psycopg2.connect(user = self.ConnectionData['user'],
                                password = self.ConnectionData['password'],
                                host = self.ConnectionData['host'],
                                port = self.ConnectionData['port'],
                                database = self.ConnectionData['database'])
            cur = con.cursor()
            sql = "SELECT * FROM TblCustomers"
            cur.execute(sql)
            con.commit()           
            rows = cur.fetchall()
            result = []
            for row in rows:
                c = CustomerEntity()
                c.fetch_data(row)
                result.append(c.to_json())
            con.close()
            return result
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self,customer: CustomerEntity):
        con = None
        try:
            con = psycopg2.connect(user = self.ConnectionData['user'],
                                password = self.ConnectionData['password'],
                                host = self.ConnectionData['host'],
                                port = self.ConnectionData['port'],
                                database = self.ConnectionData['database'])
            cur = con.cursor()
            sql = "SELECT * FROM TblCustomers WHERE customerid=%s"

            cur.execute(sql,(customer.CustomerID, ))
            con.commit()           
            row = cur.fetchone()
            if row:
                c = CustomerEntity()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "Customer ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, customer: CustomerEntity):
        con = None
        try:
            con = psycopg2.connect(user = self.ConnectionData['user'],
                                password = self.ConnectionData['password'],
                                host = self.ConnectionData['host'],
                                port = self.ConnectionData['port'],
                                database = self.ConnectionData['database'])
            cur = con.cursor()
            sql = "UPDATE TblCustomers SET customername=%s,contactname=%s, address=%s,city=%s, postalcode=%s, country=%s WHERE customerid=%s"
            cur.execute(sql,(customer.CustomerName, customer.ContactName, customer.Address, customer.City, customer.PostalCode, customer.Country, customer.CustomerID))
            con.commit()           
            row = cur.rowcount
            if row>0:
                return "Updated Customer", 200
            con.close()
            return "Customer ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def delete(self, customer: CustomerEntity):
        con = None
        try:
            con = psycopg2.connect(user = self.ConnectionData['user'],
                                password = self.ConnectionData['password'],
                                host = self.ConnectionData['host'],
                                port = self.ConnectionData['port'],
                                database = self.ConnectionData['database'])
            cur = con.cursor()
            sql = "DELETE FROM TblCustomers WHERE customerid=%s"
            cur.execute(sql,(customer.CustomerID,))
            con.commit()           
            row = cur.rowcount
            if row>0:
                return "Delete Customer", 200
            con.close()
            return "Customer ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()


# class Order:

#     def __init__(self, connection_data):
#         self.connection_data = connection_data

#     def insert(self, order: CustomerEntity):
#         conn = psycopg2.connect(host=self.connection_data['host'],
#                                 port=self.connection_data['port'],
#                                 user=self.connection_data['user'],
#                                 password=self.connection_data['password'],
#                                 database=self.connection_data['database'])
#         cursor = conn.cursor()
#         sql = """INSERT INTO tblorders(OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
#                 VALUES(%s, %s, %s, %s, %s, %s)"""
#         cursor.execute(sql, (order.Order_ID, order.customer_id, order.Employee_ID, order.Order_Date, order.Shipper_ID))
#         conn.commit()
#         return 'Insert successfully'
    
#     def get_all(self):
#         conn = psycopg2.connect(host=self.connection_data['host'],
#                                 port=self.connection_data['port'],
#                                 user=self.connection_data['user'],
#                                 password=self.connection_data['password'],
#                                 database=self.connection_data['database'])
#         cursor = conn.cursor()
#         sql = "SELECT * FROM TblOrder"
#         cursor.execute(sql)
#         conn.commit()
#         rows = cursor.fetchall()
#         result = []
#         for row in rows:
#             order = OrderEntity()
#             order.fetch_data(row)
#             result.append(customer.to_json())
#         return result

#     def delete(self, order: OrderEntity):
#         conn = psycopg2.connect(host=self.connection_data['host'],
#                                 port=self.connection_data['port'],
#                                 user=self.connection_data['user'],
#                                 password=self.connection_data['password'],
#                                 database=self.connection_data['database'])
#         cursor = conn.cursor()
#         sql = "DELETE FROM TblOrder WHERE OrderID = %s"
#         cursor.execute(sql, (order.Order_ID, ))
#         conn.commit()
#         n = cursor.rowcount
#         if n > 0:
#             return 'Deleted successfully', 200
#         return 'Id not found', 404

#     def update(self, order: OrderEntity):
#         conn = psycopg2.connect(host=self.connection_data['host'],
#                                 port=self.connection_data['port'],
#                                 user=self.connection_data['user'],
#                                 password=self.connection_data['password'],
#                                 database=self.connection_data['database'])
#         cursor = conn.cursor()
#         sql = """UPDATE TblOrder SET
#                     OrderID=%s, CustomerID=%s, EmployeeID=%s,
#                     OrderDate=%s, ShipperID=%s"""
#         cursor.execute(sql, (order.Order_ID, order.customer_id, order.Employee_ID, order.Order_Date, order.Shipper_ID))
#         conn.commit()
#         n = cursor.rowcount
#         if n > 0:
#             return 'Updated successfully', 200
#         return 'Id not found', 404



if __name__ == "__main__":
    print('this is data object package')

