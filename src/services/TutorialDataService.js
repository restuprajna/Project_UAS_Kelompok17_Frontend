import http from "http://localhost:8081/api";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`http://localhost:8081/api/users/login/id_users${id}`);
  }

  create(email, name, username, password) {
    return http.post("http://localhost:8081/api/users", email, name, username, password);
  }

  

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();