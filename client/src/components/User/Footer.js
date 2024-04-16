import { useState } from "react";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [message, setMessage ] = useState("");
  const [error, setError] = useState({firstNameError:"", lastNameError: "", emailError: ""})

  const submitForm = () => {
    const isValidate = validateForm(firstName, lastName, emailPhone, error, setError);
    if(isValidate){
        console.log("hello");
    }
    return;
  }

  return (
    <div className="bg-black py-24">
      <div className="flex flex-col gap-4 mx-auto w-fit items-stretch">
        <div className="flex gap-2">
          <input
            className="p-2 text-black rounded-md outline-none"
            type="text"
            placeholder="First Name"
            onClick={(ev) => setFirstName(ev.target.value)}
          />
          <input
            className="p-2 text-black rounded-md outline-none"
            type="text"
            placeholder="Last Name"
            onClick={(ev) => setLastName(ev.target.value)}
          />
        </div>
        <div>
          <input
            required
            className="p-2 text-black rounded-md outline-none w-[400px]"
            placeholder="Email or Phone"
            onClick={(ev) => setEmailPhone(ev.target.value)}
          />
        </div>
        <div>
          <textarea
            rows={4}
            cols={52}
            placeholder="Message"
            className="p-2 text-black rounded-md outline-none"
            onChange={(ev) => setMessage(ev.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="text-white bg-orange-400 rounded-md p-2 text-xl font-semibold" onSubmit={submitForm}>Submit</button>
      </div>
    </div>
  );
};

export default Footer;

const validateForm = (firstName, lastName, emailPhone, error, setError) => {
    if(firstName.length === 0){
        setError((prevVal) => ({
            ...prevVal,
            firstNameError: "First Name cannot be blank"
        }))
    }
    if(lastName.length === 0){
        setError((prevVal) => ({
            ...prevVal,
            lastNameError: "LastName cannot be blank"
        }))
    }
    if(emailPhone.length === 0){
        setError((prevVal) => ({
            ...prevVal,
            emailError: "email or phone cannot be blank"
        }))
    }
    
}
