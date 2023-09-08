
import './modal.css';
import React from 'react';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose} className="modal-close-button">
                    kapat
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
