import { useState } from "react";
import FormPartecipants from "./FormPartecipants";

const NewTravel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShow}
      >
        Aggiungi partecipante
      </button>

      {showModal && (
        <div
          className="modal fade show"
          id="staticBackdrop"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="false"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Aggiungi il nuovo partecipante
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormPartecipants />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewTravel