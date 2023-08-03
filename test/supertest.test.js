import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;

const requester = supertest("http://localhost:8080");

describe("Testing App Api Endpoints.", () => {
  describe("Testing Students Api", () => {
    // Before
    // BeforeEach

    // Test 01
    it("Crear un Estudiante: El API POST /api/students debe crear un nuevo estudiante correctamente.", async () => {
      // Given
      const studentMock = {
        name: "Juan",
        lastName: "Perez",
        email: "jp@gmail.com",
        age: "21",
        password: "1234",
      };

      // Then
      const { _body, ok, statusCode } = await requester
        .post("/api/students")
        .send(studentMock);

      // Assert that
      expect(statusCode).is.eqls(201);
      expect(_body).is.ok.and.to.have.property("_id");
    });
  });

  describe("Testing Courses Api", () => {
    // Before
    // BeforeEach

    // Test 01
    it("Crear un Curso: El API POST /api/courses debe crear un nuevo curso correctamente.", async () => {
      // Given
      const courseMock = {
        title: "MatematicasI",
        description: "Curso de Matemáticas primer año",
        teacherName: "Pepe Grillo",
      };

      // Then
      const { _body, ok, statusCode } = await requester
        .post("/api/courses")
        .send(courseMock);

      // Assert that
      expect(statusCode).is.eqls(201);
      expect(_body).is.ok.and.to.have.property("_id");
    });
  });
});
