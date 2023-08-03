import mongoose from "mongoose";
import Assert from "assert";
import StudentServiceDao from "../../src/services/db/dao/students.dao.js";

mongoose.connect(
  `mongodb://localhost:27017/integrador04Dev?retryWrites=true&w=majority`
);

const assert = Assert.strict;

// Armamos el escenario
describe("Testing Students Dao", () => {
  before(function () {
    this.usersDao = new StudentServiceDao();
  });

  beforeEach(function () {
    this.timeout(5000);
    mongoose.connection.collections.students.drop();
  });

  // Los it son test puntuales del decribe
  // test 01
  it("El dao debe devolver los usuarios en formato arreglo", async function () {
    // definiomos la logica del test
    console.log(this.usersDao);
    // Given
    const isArray = true;

    // Then
    const result = await this.usersDao.getAll(); // [{}, {}]
    console.log(`El resultado es un array ?: ${Array.isArray(result)}`);

    // Assert that
    assert.strictEqual(Array.isArray(result), isArray);
  });

  // test 02
  it("El dao debe agregar un usuario correctamente a la DB", async function () {
    // definiomos la logica del test
    // Given
    const studentMock = {
      name: "Juan",
      lastName: "Perez",
      email: "jp@gmail.com",
      age: "21",
      password: "1234",
    };

    // Then
    const result = await this.usersDao.save(studentMock);

    // Assert that
    assert.ok(result._id);
  });

  afterEach(function () {
    mongoose.connection.collections.students.drop();
  });
});
