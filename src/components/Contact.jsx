import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState({});

  return <div>Contact</div>;
};

export default Contact;
