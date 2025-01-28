import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required!";
    }
    if (!formData.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required!";
    }
  };

  const handleSubmit = () => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_fvb80xr",
          "template_9eo07da",
          formData,
          "VZ4mYWSe-8u6O9DEG"
        )
        .then((response) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FILED...", error);
          toast.error("Failed to send message. Please try again later!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className='p-4 lg:w-3/4' id='contact'>
      <Toaster />
      <h2 className='my-8 text-4xl font-semibold text-center'></h2>
    </div>
  );
};

export default Contact;
