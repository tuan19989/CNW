class Customer:
    def __init__(self, CustomerID=None, CustomerName=None, ContactName=None, Address=None, City=None, PostalCode=None, Country=None):
        self.CustomerID = CustomerID
        self.CustomerName = CustomerName
        self.ContactName = ContactName
        self.Address = Address
        self.City = City
        self.PostalCode = PostalCode
        self.Country = Country

    def fetch_data(self,data):
        self.CustomerID = data[0]
        self.CustomerName = data[1]
        self.ContactName = data[2]
        self.Address = data[3]
        self.City = data[4]
        self.PostalCode = data[5]
        self.Country = data[6]
    
    def to_json(self):
        return{
            'CustomerID' : self.CustomerID,
            'CustomerName' : self.CustomerName,
            'ContactName' : self.ContactName,
            'Address' : self.Address,
            'City' : self.City,
            'PostalCode' : self.PostalCode,
            'Country' : self.Country
        }

if __name__ == "__main__":
    print('this is business object package')

# Hung

class Order:

    def __init__(self, Order_ID=None, Customer_ID=None, Employee_ID=None, Order_Date=None, Shipper_ID=None):
        self.Order_ID = Order_ID
        self.Customer_ID = Customer_ID
        self.Employee_ID = Employee_ID
        self.Order_Date = Order_Date
        self.Shipper_ID = Shipper_ID

    def fetch_data(self, row):
        self.Order_ID = row[0]
        self.customer_id = row[1]
        self.Employee_ID = row[2]
        self.Order_Date = row[3]
        self.Shipper_ID = row[4]

    def to_json(self):
        return {
            'Order_ID': self.customer_id,
            'customer_id': self.customer_name,
            'Employee_ID': self.contact_name,
            'Order_Date': self.address,
            'Shipper_ID': self.postal_code
        }