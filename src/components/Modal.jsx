import './Modal.css'

function Modal({question, onConfirm, onCancel}){

  return(
    <div>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button onClick={onCancel} className="btn btn__cancel">Cancel</button>
          <button onClick={onConfirm} className="btn">Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  )
}

export default Modal

