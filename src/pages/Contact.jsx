import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';

import { LanguageContext } from '../App';
import es from '../lang/es.json';
import en from '../lang/en.json';

const Contact = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_z068oul";
    const templateId = "template_xj1vebs";

    const apikey = "IjP1H-2NPomyrkp85";

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
      .then(result => console.log(result.text))
      .catch(error => console.error(error))
  }

  const { language } = useContext(LanguageContext);
  const lang = language === 'es' ? es : en;
  const works = lang.works;

  return (
    <div className="h-full w-full flex justify-center items-center py-14 bg-neutral-900">
      <div className="max-w-[90%] px-8 sm:px-12 pb-8 flex flex-col items-center rounded-lg  text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 my-8">{lang.ContactTitle}</h1>
        <div className="h-1 w-20 bg-cyan-400 mx-auto mb-6"></div>

        <form ref={refForm} action='' onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto" >

          <fieldset>
            <div className="mb-6">
              <input type="text" id="name" name="username" placeholder={lang.ContactName} required className="w-full lg:w-96 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </fieldset>

          <fieldset>
            <div className="mb-6">
              <input type="email" id="email" name="email" placeholder={lang.ContactEmail} required className="w-full lg:w-96 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </fieldset>

          <fieldset>
            <div className="mb-6">
              <textarea id="message" name="message" rows="4" placeholder={lang.ContactMessage} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </fieldset>

          <div className="text-right">
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{lang.ContactButton}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
