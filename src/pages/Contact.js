import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_t9d91kf",
        //EmailJS service ID
        "template_l8845q9",
        //EmailJS template ID
        formData,
        "qG3JMBtbCD9b4kP7x"
        //EmailJS user ID
      )
      /*.then(
        (result) => {
          alert("Message successfully sent!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );*/
      .then(
        (result) => {
          // Display a success toast
          toast.success("Message successfully sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          // Display an error toast
          toast.error("Failed to send message, please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    setFormData({ name: "", email: "", message: "" });
    // Clear form after submission
  };
  return (
    <div className="contact-form">
      {" "}
      <h2 className="text-center text-5xl font-bold">Contact Me</h2>{" "}
      <h2 className="text-center">(uses an API to send me form data)</h2>{" "}
      <form onSubmit={sendEmail}>
        {" "}
        <div className="form-group">
          {" "}
          <label>Name</label>{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Email</label>{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Message</label>{" "}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="10" // Set minimum number of rows
          ></textarea>{" "}
        </div>{" "}
        <button type="submit">Send Message</button>{" "}
      </form>{" "}
      {/* Toast container for showing notifications */}
      <ToastContainer />
    </div>
  );
};
export default Contact;
