import React, { useState } from 'react';
import Modal from './Modal';

const Buttons = ({ valueOfButton, nameOfClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className={nameOfClass} type='button' onClick={showModal}>
        {valueOfButton}
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`You clicked ${valueOfButton} button`}/>
    </>
  );
};

export default Buttons;
