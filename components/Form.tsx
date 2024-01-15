import {useState, useEffect} from "react";
import {countryCodes} from "@/pages/api/countryCode";
import {guestData} from "@/pages/api/guestData";
import { IoClose } from "react-icons/io5";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  date: string;
  countryCode: string;
  guest: string;
}

interface Errors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  date?: string;
  countryCode?: string;
  guest?: string;
}

const Form = ({isOpen, onClose}: Props) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    date: "",
    countryCode: "",
    guest: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {name, value} = e.target;

    if (name === "countryCode") {
      setFormData({...formData, [name]: value});
    } else {
      // Otherwise, parse the number for phoneNumber
      const parseValue =
        name === "phoneNumber" && value !== "" ? parseInt(value, 10) : value;

      setFormData({...formData, [name]: parseValue});
    }
    // Clear the error for the field being edited
    setErrors((prevErrors) => ({...prevErrors, [name]: ""}));
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {name, value} = e.target;
    if (value.trim() === "" && name !== "countryCode") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
      }));
    } else if (name === "phoneNumber" && value.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } must be at least 10 digits`,
      }));
    } else if (name === "countryCode" && value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Country Code is required.",
      }));
    }
  };

  const validate = (): boolean => {
    let tempErrors: Errors = {};
    if (formData.name.trim() === "") tempErrors.name = "Name is required.";
    if (formData.email.trim() === "") tempErrors.email = "Email is required.";
    if (formData.guest.trim() === "") tempErrors.guest = "Guest is required.";
    if (
      typeof formData.phoneNumber === "string" &&
      formData.phoneNumber.trim() === ""
    )
      tempErrors.phoneNumber = "Phone number is required.";
    if (formData.date.trim() === "") tempErrors.date = "Date is required.";

    setErrors(tempErrors);

    // Check if at least one required field is filled out
    const isAnyFieldFilled = Object.keys(formData).some(
      (key) =>
        key !== "message" && formData[key as keyof FormData].trim() !== ""
    );

    if (!isAnyFieldFilled) {
      alert("Please fill in at least one required field.");
      return false;
    }

    return Object.keys(tempErrors).length === 0;
  };

  const handleEmail = async () => {
    try {
      setLoading(true);
  
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Include formData in the request body
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const responseData = await res.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        await handleEmail();
        alert("Thank you for sending the data!");
        setErrors({});
        window.location.reload();
      } catch (error) {
        console.log("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form has errors.");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [isOpen]);
  return (
    <div className={` ${isOpen ? "block" : "hidden"} fixed inset-0 z-40`}>
      <div
        className="h-screen w-full flex items-center justify-center bg-main/50"
        onClick={onClose}
      ></div>
      <div className="fixed z-50 h-fit w-full lg:w-1/2 inset-0 lg:translate-x-1/2 translate-y-[10%] lg:translate-y-[35%] bg-main/30 backdrop-blur-sm p-5">
        <div className="bg-third flex flex-col gap-3 p-5 relative">
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-3xl">Plan Your Charter</h3>
            <p className="text-xs">
              Fill in the details below and one of our experts will be in touch
              shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-row gap-2">
              <div className="w-1/2">
                <label
                  htmlFor="countryCode"
                  className="block text-sm font-medium text-gray-600"
                >
                  Country Code:
                </label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 p-2 h-[42px] w-full border ${
                    errors.countryCode ? "border-red-500" : "border-gray-300"
                  } rounded`}
                >
                  <option value="" disabled>
                    Code
                  </option>
                  {countryCodes.map((country) => (
                    <option
                      key={`country_${country.name}_${country.code}`}
                      value={country.code}
                    >
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>

                {errors.countryCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.countryCode}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 p-2 w-full border ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-600"
              >
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 h-[42px] w-full border ${
                  errors.date ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="guest"
                className="block text-sm font-medium text-gray-600"
              >
                Guest:
              </label>
              <select
                id="guest"
                name="guest"
                value={formData.guest}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 h-[42px] w-full border ${
                  errors.guest ? "border-red-500" : "border-gray-300"
                } rounded`}
              >
                <option value="" disabled>
                  Choose Guest
                </option>
                {guestData.map((dataGuest) => (
                  <option
                    key={`country_${dataGuest.name}_${dataGuest.data}`}
                    value={`${dataGuest.name} ${dataGuest.data}`}
                  >
                  {dataGuest.data}
                  </option>
                ))}
              </select>

              {errors.guest && (
                <p className="text-red-500 text-xs mt-1">{errors.guest}</p>
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know more details so that we can tailor your escape."
                className={`mt-1 p-2 w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="w-fit p-2 bg-btn text-white tracking-wider rounded cursor-pointer"
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
          <button onClick={onClose} className="absolute top-0 right-0 p-2">
          <IoClose size={30} className="text-main" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
