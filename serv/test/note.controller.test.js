import NoteController from "../controllers/note.controller.js";
import Sinon from "sinon";
import chai from "chai";

const fakeService = { deleteNoteById: () => {} };
const noteController = new NoteController({ noteService: fakeService });

afterEach(function () {
  Sinon.restore();
});

describe("NoteController", function () {
  it("should call deleteNoteById(noteService) once with request param id", function () {
    let mock = Sinon.mock(fakeService);
    mock.expects("deleteNoteById").once().withExactArgs(10);

    let request = {
      params: {
        id: 10,
      },
    };

    noteController.deleteNoteById(request, {}, {});

    mock.verify();

    //call service width id param from request body
  });

  it("should forward error to next handler when noteService throws error", function () {
    let mock = Sinon.mock(fakeService);
    let err = new Error("Random Error");
    let stubDeleteNotById = Sinon.stub().returns();
    
    mock.expects("deleteNoteById").once().throws(err);

    let nextHandlerStub = Sinon.stub();

    let request = {
      params: {
        id: 10,
      },
    };

    noteController.deleteNoteById(request, {}, nextHandlerStub);
    chai.assert(nextHandlerStub.calledOnceWith(err), "Expected next to be called with error object thrown from service")

    //call service width id param from request body
  });

});
