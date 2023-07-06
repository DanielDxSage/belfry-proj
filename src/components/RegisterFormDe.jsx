import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid'

const RegisterFormDe = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    surname: '',
    firstname: '',
    othername: '',
    dateOfBirth: '',
    maritalStatus: '',
    employmentStatus: '',
    gender: '',
    mothersMaidenName: '',
    phoneNumber: '',
    emailAddress: '',
    nationality: '',
    stateOfOrigin: '',
    countryOfResidence: '',
    stateOfResidence: '',
    cityOfResidence: '',
    addressOfResidence: '',
    kinSurname: '',
    kinFirstname: '',
    kinOthername: '',
    kinDateOfBirth: '',
    kinGender: '',
    kinRelationship: '',
    kinNationality: '',
    kinCity: '',
    kinPhoneNumber: '',
    kinEmailAddress: '',
    kinAddress: '',
    bankName: '',
    accountName: '',
    accountNumber: '',
    bvn: '',
    passportPhoto: null,
    validId: null,
    signature: null,
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

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0]
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("surname", formData.surname);
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("maritalStatus", formData.maritalStatus);
    formDataToSend.append("employmentStatus", formData.employmentStatus);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("mothersMaidenName", formData.mothersMaidenName);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("emailAddress", formData.emailAddress);
    formDataToSend.append("nationality", formData.nationality);
    formDataToSend.append("stateOfOrigin", formData.stateOfOrigin);
    formDataToSend.append("countryOfResidence", formData.countryOfResidence);
    formDataToSend.append("stateOfResidence", formData.stateOfResidence);
    formDataToSend.append("cityOfResidence", formData.cityOfResidence);
    formDataToSend.append("addressOfResidence", formData.addressOfResidence);
    formDataToSend.append("kinSurname", formData.kinSurname);
    formDataToSend.append("kinFirstName", formData.kinFirstName);
    formDataToSend.append("kinOtherName", formData.kinOtherName);
    formDataToSend.append("kinDateOfBirth", formData.kinDateOfBirth);
    formDataToSend.append("kinGender", formData.kinGender);
    formDataToSend.append("kinRelationship", formData.kinRelationship);
    formDataToSend.append("kinNationality", formData.kinNationality);
    formDataToSend.append("kinCity", formData.kinCity);
    formDataToSend.append("kinPhoneNumber", formData.kinPhoneNumber);
    formDataToSend.append("kinEmailAddress", formData.kinEmailAddress);
    formDataToSend.append("kinAddress", formData.kinAddress);
    formDataToSend.append("bankName", formData.bankName);
    formDataToSend.append("accountName", formData.accountName);
    formDataToSend.append("accountNumber", formData.accountNumber);
    formDataToSend.append("bvn", formData.bvn);
    formDataToSend.append("passportPhoto", formData.passportPhoto);
    formDataToSend.append("validId", formData.validId);
    formDataToSend.append("signature", formData.signature);

    // Display loading state
    setFormStatus({ ...formStatus, isLoading: true });

    try {
      // Perform form submission logic here
      const response = await fetch('https://formspree.io/f/mwkdegbv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formDataToSend,
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
          title: '',
          surname: '',
          firstname: '',
          othername: '',
          dateOfBirth: '',
          maritalStatus: '',
          employmentStatus: '',
          gender: '',
          mothersMaidenName: '',
          phoneNumber: '',
          emailAddress: '',
          nationality: '',
          stateOfOrigin: '',
          countryOfResidence: '',
          stateOfResidence: '',
          cityOfResidence: '',
          addressOfResidence: '',
          kinSurname: '',
          kinFirstname: '',
          kinOthername: '',
          kinDateOfBirth: '',
          kinGender: '',
          kinRelationship: '',
          kinNationality: '',
          kinCity: '',
          kinPhoneNumber: '',
          kinEmailAddress: '',
          kinAddress: '',
          bankName: '',
          accountName: '',
          accountNumber: '',
          bvn: '',
          passportPhoto: null,
          validId: null,
          signature: null
        });
        setStep(1);
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
      <div className="mx-auto bg-white p-8 m-5 shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {step === 1 && (
            <div className="col-span-2">
              <h3 className="text-lg text-blue-500 font-semibold mb-4">Step 1: Bio-data</h3>
              <div className="grid grid-cols-2  gap-4">
                <div>
                  <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Title
                  </label>
                  <select
                    id="title"
                    name="title"
                    className=" border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <option value="">Select Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700 font-bold mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                    value={formData.surname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="firstName" className="block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="otherName" className="block mb-1">
                    Other Name
                  </label>
                  <input
                    type="text"
                    name="otherName"
                    value={formData.otherName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="dateOfBirth" className="block mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div  className="col-span-2">
                  <label htmlFor="maritalStatus" className="block mb-1">
                    Marital Status
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  >
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="employmentStatus" className="block mb-1">
                    Employment Status
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  >
                    <option value="">Select Employment Status</option>
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="selfEmployed">Self-employed</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="gender" className="block mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="mothersMaidenName" className="block mb-1">
                    Mother's Maiden Name
                  </label>
                  <input
                    type="text"
                    name="mothersMaidenName"
                    value={formData.mothersMaidenName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="phoneNumber" className="block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="emailAddress" className="block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="nationality" className="block mb-1">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="stateOfOrigin" className="block mb-1">
                    State of Origin
                  </label>
                  <input
                    type="text"
                    name="stateOfOrigin"
                    value={formData.stateOfOrigin}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="countryOfResidence" className="block mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    name="countryOfResidence"
                    value={formData.countryOfResidence}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="stateOfResidence" className="block mb-1">
                    State of Residence
                  </label>
                  <input
                    type="text"
                    name="stateOfResidence"
                    value={formData.stateOfResidence}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="cityOfResidence" className="block mb-1">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    name="cityOfResidence"
                    value={formData.cityOfResidence}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="addressOfResidence" className="block mb-1">
                    Address of Residence
                  </label>
                  <input
                    type="text"
                    name="addressOfResidence"
                    value={formData.addressOfResidence}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="passportPhoto" className="block font-medium leading-6 text-gray-900">
                    Passport Photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                    <div className="text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="passportPhoto"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input type="file" id="passportPhoto" name="passportPhoto" accept="image/jpeg, image/png" onChange={handleFileChange}  className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="validId" className="block  font-medium leading-6 text-gray-900">
                    Your Valid ID 
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                    <div className="text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="validId"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input type="file" id="validId" name="validId" accept="image/jpeg, image/png" onChange={handleFileChange}  className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="signature" className="block  font-medium leading-6 text-gray-900">
                    Your signature
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                    <div className="text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="signature"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input type="file" id="signature" name="signature" accept="image/jpeg, image/png" onChange={handleFileChange}  className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>  
          )}
 
          {step === 2 && (
            <div className="col-span-2">
              <h2 className="text-xl text-blue-500 font-semibold mb-4">Step 2: Next of Kin</h2>
              <div className="grid grid-cols-2  gap-4">
                <div>
                  <label htmlFor="kinSurname" className="block mb-1">
                    Surname
                  </label>
                  <input
                    type="text"
                    name="kinSurname"
                    value={formData.kinSurname}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="kinFirstName" className="block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="kinFirstName"
                    value={formData.kinFirstName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                
              </div>
               
              <div className="mb-4">
                <label htmlFor="kinOtherName" className="block mb-1">
                  Other Name
                </label>
                <input
                  type="text"
                  name="kinOtherName"
                  value={formData.kinOtherName}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinDateOfBirth" className="block mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="kinDateOfBirth"
                  value={formData.kinDateOfBirth}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinGender" className="block mb-1">
                  Gender
                </label>
                <select
                  name="kinGender"
                  value={formData.kinGender}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="kinRelationship" className="block mb-1">
                  Relationship
                </label>
                <input
                  type="text"
                  name="kinRelationship"
                  value={formData.kinRelationship}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinNationality" className="block mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  name="kinNationality"
                  value={formData.kinNationality}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinCity" className="block mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="kinCity"
                  value={formData.kinCity}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinPhoneNumber" className="block mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="kinPhoneNumber"
                  value={formData.kinPhoneNumber}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinEmailAddress" className="block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="kinEmailAddress"
                  value={formData.kinEmailAddress}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kinAddress" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="kinAddress"
                  value={formData.kinAddress}
                  onChange={handleChange}
                  className="w-full border-gray-300 border p-2"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 col-span-2">Step 3: Bank Details</h3>
              <div className="grid grid-cols-2  gap-4">
                <div className="col-span-2">
                  <label htmlFor="bankName" className="block text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <select
                    id="bankName"
                    name="bankName"
                    className="border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Bank</option>
                    <option value="access">Access Bank</option>
                    <option value="uba">UBA</option>
                    <option value="gtbank">GTBank</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="accountName" className="block mb-1">
                    Account Name
                  </label>
                  <input
                    type="text"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="accountNumber" className="block mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="bvn" className="block mb-1">
                    BVN
                  </label>
                  <input
                    type="text"
                    name="bvn"
                    value={formData.bvn}
                    onChange={handleChange}
                    className="w-full border-gray-300 border p-2"
                    required
                  />
                </div>
                
              </div>
              
            </div>
          )}
          {/* Display form submission status */}
          {formStatus.message && (
            <div
              className={`${
                formStatus.isSuccess ? 'text-green-600' : 'text-red-600'
              } my-4 col-span-2`}
            >
              {formStatus.message}
            </div>
          )}
          {/* Display navigation buttons */}
          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-500"
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
                type="submit"
                onClick={handleNextStep}
                className="py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                disabled={formStatus.isLoading}
                className="py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {formStatus.isLoading ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </form>
      </div>




  )
}

export default RegisterFormDe