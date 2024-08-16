import React, { useState } from 'react'
import ChildModal from './ChildModal';

const ParentModal = () => {

    //Props
    const [showModal, setShowModal] = useState(false);
    console.log('checking', showModal);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    //Props

    return (
        <div>
            <button onClick={handleShowModal}>Click</button>
            <ChildModal show={showModal} handleClose={handleCloseModal}/>

            {/* <PopUp show={showModal} handleClose={handleCloseModal} /> */}
        </div>
    )
}

export default ParentModal