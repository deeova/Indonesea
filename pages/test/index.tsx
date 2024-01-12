import Form from '@/components/Form';
import React, { useState } from 'react'

const index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
              <button onClick={openModal}>Open Modal</button>
              <Form isOpen={isModalOpen} onClose={closeModal} />

    </div>
  )
}

export default index