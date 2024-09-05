import React from 'react'
import { useState } from "react";
import './modal.css'

function modal({ show, handleClose, children }) {

    if (!show) return null;

    return (
        <div>
            <div className="modal-overlay">
                <div className="modal-content">
                    {/* Botón de cierre del modal */}
                    <button className="modal-close" onClick={handleClose}>
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default modal