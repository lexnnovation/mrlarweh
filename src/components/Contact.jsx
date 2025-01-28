import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

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
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
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
      <h2 className='my-8 text-4xl font-semibold tracking-tighter text-center'>
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex mb-4 space-x-4'>
          <div className='lg:w-1/2'>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='w-full px-3 py-2 mb-4 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none'
            />
            {errors.name && (
              <p className='text-sm text-rose-800'>{errors.name}</p>
            )}
          </div>
          <div className='lg:w-1/2'>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              placeholder='Email'
              onChange={handleChange}
              className='w-full px-3 py-2 mb-4 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none'
            />
            {errors.email && (
              <p className='text-sm text-rose-800'>{errors.email}</p>
            )}
          </div>
        </div>
        <div className='mb-4'>
          <textarea
            name='message'
            id='message'
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}
            className='w-full px-3 py-2 mb-4 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none'
            rows='6'
          />
          {errors.message && (
            <p className='text-sm text-rose-800'>{errors.message}</p>
          )}
        </div>

        <button
          type='submit'
          className={`mb-8 w-full rounded border border-stone-50 bg-stone-200 text-md px-4 py-2 font-bold text-stone-950 hover:bg-stone-300 
          ${isSending ? " cursor-not-allowed opacity-50 hover:none" : ""}`}
          disabled={isSending}
        >
          <div className='flex items-center justify-center gap-2'>
            {isSending ? "Sending Message..." : "Send Message"}
            <FiSend />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
