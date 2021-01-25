import HttpRequest from "./http-common";

const getAll = async () => {
  return await HttpRequest.get("http://192.168.1.12:8080/user/all");
};

const create = (data) => {
  return HttpRequest.post("http://192.168.1.12:8080/user/insert", data);
};

const deleteOne = (id) => {
  return HttpRequest.delete(`http://192.168.1.12:8080/customers/${id}`);
};

const updateOne = (id, data) => {
  return HttpRequest.put(`http://192.168.1.12:8080/customers/${id}`, data);
};

export default { getAll, create, deleteOne, updateOne };
