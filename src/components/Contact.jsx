import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

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
        .then(() => {
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
    <div className='w-full max-w-2xl pt-20' id='contact'>
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center gap-3 mb-10'
      >
        <span className='font-mono text-3xl lg:text-4xl text-accent-amber'>5.</span>
        <h2 className='text-3xl font-extrabold font-display lg:text-4xl'>
          Let&apos;s Connect
        </h2>
      </motion.div>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-4 mb-4 sm:flex-row'>
          <div className='sm:w-1/2'>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='w-full px-3 py-2.5 text-sm bg-surface border rounded-lg appearance-none border-border text-text placeholder:text-text-muted focus:border-accent-amber focus:outline-none'
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='mt-1 text-sm text-rose-500'
              >
                {errors.name}
              </motion.p>
            )}
          </div>
          <div className='sm:w-1/2'>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              placeholder='Email'
              onChange={handleChange}
              className='w-full px-3 py-2.5 text-sm bg-surface border rounded-lg appearance-none border-border text-text placeholder:text-text-muted focus:border-accent-amber focus:outline-none'
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='mt-1 text-sm text-rose-500'
              >
                {errors.email}
              </motion.p>
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
            className='w-full px-3 py-2.5 text-sm bg-surface border rounded-lg appearance-none border-border text-text placeholder:text-text-muted focus:border-accent-amber focus:outline-none'
            rows='6'
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className='mt-1 text-sm text-rose-500'
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <button
          type='submit'
          className={`mb-8 w-full rounded-lg border border-accent-amber bg-accent-amber text-md px-4 py-2.5 font-mono font-medium text-surface hover:opacity-90 transition-opacity
          ${isSending ? " cursor-not-allowed opacity-50 hover:opacity-50" : ""}`}
          disabled={isSending}
        >
          <div className='flex items-center justify-center gap-2'>
            {isSending ? "Sending Message..." : "Send Message"}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
