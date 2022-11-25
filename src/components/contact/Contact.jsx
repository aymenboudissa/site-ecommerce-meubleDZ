import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_czk41g8",
      "template_3nnh6ft",
      form.current,
      "0RcNvmgvSfi13qisC"
    );
    e.target.reset();
  };
  return (
    <section id="page__contact">
      <div className="container contact__container ">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
