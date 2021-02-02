import HttpRequest from "./http-common";

const getAll = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/user/all");
};

const create = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/user/insert", data);
};

const deleteOne = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/user/delete/${id}`);
};

const updateOne = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/user/update/${id}`, data);
};
// categories
const getAllCate = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/category/all");
};

const createCate = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/category/insert", data);
};

const deleteOneCate = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/category/delete/${id}`);
};

const updateOneCate = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/category/update/${id}`, data);
};
// employees
const getAllEm = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/employee/all");
};

const createEm = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/employee/insert", data);
};

const deleteOneEm = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/employee/${id}`);
};

const updateOneEm = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/employee/${id}`, data);
};
//Orderdetail
const getAllOD = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/order_detail/all");
};

const createOD = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/order_detail/insert", data);
};

const deleteOneOD = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/order_detail/delete/${id}`);
};

const updateOneOD = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/order_detail/update/${id}`, data);
};
//Oder
const getAllOder = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/order/all");
};
const createOder = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/order/insert", data);
};

const deleteOneOder = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/order/delete/${id}`);
};

const updateOneOder = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/order/update/${id}`, data);
};
//products
const getAllPor = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/product/all");
};

const createPor = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/product/insert", data);
};

const deleteOnePor = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/product/delete/${id}`);
};

const updateOnePor = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/product/update/${id}`, data);
};
//shipper
const getAllSp = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/shipper/all");
};

const createSp = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/shipper/insert", data);
};

const deleteOneSp = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/shipper/delete/${id}`);
};

const updateOneSp = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080//shipper/update/${id}`, data);
};
//Suppliers
const getAllSup = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/supplier/all");
};

const createSup = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/supplier/insert", data);
};

const deleteOneSup = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/supplier/delete/${id}`);
};

const updateOneSup = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/supplier/update/${id}`, data);
};
export default {
   getAll, create, deleteOne, updateOne,
   getAllCate, createCate, deleteOneCate, updateOneCate,
   getAllEm, createEm, deleteOneEm, updateOneEm,
   getAllOD, createOD, deleteOneOD, updateOneOD,
   getAllOder, createOder, deleteOneOder, updateOneOder,
   getAllPor, createPor, deleteOnePor, updateOnePor,
   getAllSp, createSp, deleteOneSp, updateOneSp,
   getAllSup, createSup, deleteOneSup, updateOneSup,
   };
