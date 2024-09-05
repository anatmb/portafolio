import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../utils/validations';
import imagen from '../../assets/contact.png';

import './contact.css';

function Contact() {

  // Función para manejar el envío del formulario
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className="container-contact pt-5 mt-3">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className='mb-2 h2'>¿Tienes alguna pregunta?</h1>
        </div>
      </div>
      <div className="row contact">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img className='contact-img' src={imagen} alt="Contact Us" />
        </div>
        <div className="col-md-6">
          <form className="form-contact" action="https://formspree.io/f/xjvnzvnn" method="POST">
            <div className="mb-3">

              <label htmlFor="fullName" className="form-label">Nombre completo</label>
              <input className="form-control" type="name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input className="form-control" type="email" name="email" />

            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" name="message"></textarea>
            </div>
            <button className="btn btn1 px-5  my-3" type="submit">Enviar</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
