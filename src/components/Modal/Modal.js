import React from 'react';
import './Modal.css'

const Modal = (props) => {
    const wrapperHandeler = (event) => {
        // console.log(event.target.className);
        if (event.target.className === 'modal-wrapper') {
            props.hider(false)
            console.log('clicked');
        }
    }
    return (
        <div onClick={wrapperHandeler} className='modal-wrapper' name='modal-wrapper'>
            <div className="message-box">
                <h2 className="warning">Warning</h2>
                <p className="message">In order to start the timer you have to enter some value of minute or second.</p>
                <button onClick={() => props.hider(false)} className='modal-btn'>OK</button>
            </div>

        </div>
    );
};

export default Modal;