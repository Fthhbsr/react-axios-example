import { useState } from "react";

const EditTutorial = ({ editTutorial, id, title, desc }) => {
  const [titleEdit, setTitleEdit] = useState(title);
  const [descEdit, setDescEdit] = useState(desc);

  const editFunction = () => {
    titleEdit || editTutorial(id, title, descEdit);
    descEdit || editTutorial(id, titleEdit, desc);
    titleEdit && descEdit && editTutorial(id, titleEdit, descEdit);
    setTitleEdit("");
    setDescEdit("");
  };

  return (
    <div className="modal" tabIndex={-1} id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Your Tutorial</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Edit Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Edit Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={descEdit}
                onChange={(e) => setDescEdit(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => editFunction()}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
