import React from 'react'

const ModalContainer = ({ openModal, onClose , children}) => {
  return (
    openModal && (
      <div className="modal">
        <div className="modal-content">
          {/* <span className="close" onClick={onClose}>&times;</span> */}
          {children}
        </div>
      </div>
    )
  )
}

export default ModalContainer
