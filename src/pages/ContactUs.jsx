import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display loading state
    setFormStatus({ ...formStatus, isLoading: true });

    try {
      // Perform form submission logic here
      const response = await fetch('https://formspree.io/f/moqovvpq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submission successful
        setFormStatus({
          message: 'Form submitted successfully!',
          isSuccess: true,
          isError: false,
          isLoading: false,
        });

        // Reset form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
      } else {
        // Form submission failed
        setFormStatus({
          message: 'Form submission failed. Please try again.',
          isSuccess: false,
          isError: true,
          isLoading: false,
        });
      }
    } catch (error) {
      // Form submission failed due to network error
      setFormStatus({
        message: 'Network error. Please try again.',
        isSuccess: false,
        isError: true,
        isLoading: false,
      });
    }
  };

  return (
    <>
      <Nav/>
      <div>
        <div className="relative w-full">
          <img
            className="object-cover object-center w-full max-h-[calc(100vh-64px)] md:h-[20rem] lg:h-[20rem] xl:h-[30rem] mx-auto"
            src="https://img.freepik.com/premium-vector/handset-made-from-points-lines-dark-blue-background-call-wireframe-mesh-polygonal_9385-154.jpg?w=900"
            alt="Belfry Contact Us"
          />
          <h1 className="xl:text-[2.5rem]  md:text-2xl xl:font-bold md:font-medium text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Contact Us
          </h1>
        </div>


        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-gray-200 p-8">
            <h1 className="text-[1.7rem] text-blue-500 font-semibold mb-3">Contact Details</h1>
            
            <div className="text-blue-500 font-semibold mb-2">Lagos</div>
            <div className="mb-2">31 Marina Street, 4th Floor,</div>
            <div>Royal Exchange Building, Lagos Island</div>
            <div>Tel: +2348093678888</div>
            <div>Email: info@belfryinvestmentlimited.com</div>
          </div>
          <div className="lg:w-1/2 bg-white p-8">
            <h2 className="text-blue-500 text-[1.7rem] font-semibold mb-4">Get In Touch With Belfry</h2>
            {/* Display form submission status */}
            {formStatus.message && (
              <div
                className={`${
                  formStatus.isSuccess ? 'text-green-600' : 'text-red-600'
                } mb-4`}
              >
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="border border-gray-300 rounded py-2 px-3 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="border border-gray-300 rounded py-2 px-3 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="border border-gray-300 rounded py-2 px-3 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded py-2 px-3 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                  className="border border-gray-300 rounded py-2 px-3 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="border border-gray-300 rounded py-2 px-3 w-full h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
