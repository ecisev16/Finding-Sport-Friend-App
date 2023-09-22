import "./ActivityProfilPhoto.css"




import React, { useState } from 'react';
import Modal from '../Modal';


function ProfilPhoto() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

 

    return (
        
        <div className="profil-photo-popup">
       
            <button className="profil-resmi" onClick={openModal}>
                <img src="/image/img.jpg" alt="" />
                
            </button>
        
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Popup İçeriği</h2>
                <p>Bu bir pop-up penceresidir.</p>
            </Modal>
        </div>
    );
}

export default ProfilPhoto;
