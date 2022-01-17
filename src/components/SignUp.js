import React, { useState } from "react";
import FormBox from "./FormBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import InputWrapper from "./Inputwrapper/Inputwrapper";
import Input from "./Inputwrapper/Input/Input";
import Error from "./Error/Error";
import Button from "./Button/Button";
import "./SignUp.css";


const SignUp = () => {
  const eintraege = {
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    hnr: "",
    postcode: "",
    country: "",
  };

  const [formValues, setFormValues] = useState(eintraege);
  const [errors, setErrors] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // console.log(buttonDisabled);

  const validateForm = (values) => {
    const errors = {};  
    
    // errors.firstname = values.firstname === "Firstname ist erforderlich!";
    if (values.firstname === "" ) {
      errors.firstname = "Firstname ist erforderlich!"
    } else if (values.lastname === "") {
      errors.lastname = "Lastname ist erforderlich!"
    } else if (values.email === "") {
      errors.email = "Email ist erforderlich!!"
    }  else if (values.street === "") {
      errors.street = "Bitte Ausfüllen!"
    } else if (values.hnr === "") {
      errors.hnr = "Bitte Ausfüllen!"
    } else if (values.postcode === "") {
      errors.postcode = "Bitte Ausfüllen!"
    } else if (values.country === "") {
      errors.country = "Bitte Ausfüllen!"
    } else {
      return ""; 
    }
    // if (values.firstname === "" ) errors.firstname = "Firstname ist erforderlich!"; 
    // if (values.lastname === "") errors.lastname = "Lastname ist erforderlich!";
    // if (values.email === "") errors.email = "Email ist erforderlich!!";
    // if (values.street === "") errors.street = "Bitte Ausfüllen!";
    // if (values.hnr === "") errors.hnr = "Bitte Ausfüllen!";
    // if (values.postcode === "") errors.postcode = "Bitte Ausfüllen!";
    // if (values.country === "") errors.country = "Bitte Ausfüllen!";
    return errors; // { firstname: "firstname is required!",   "lastname": false,  "email": false,  "street": false }
  };
  
  const formChangeHandler = (event) => {
    // Fachbegriff: Object-Decomposition
    const { name, value } = event.target;

    console.log(name, value);
    const nextValues = { ...formValues, [name]: value };

    setFormValues(nextValues);
    setErrors(validateForm(nextValues));
    btnChanged();

    // console.log(buttonDisabled);
    
  };
  
  const btnChanged = () => {
    if (Object.keys(errors).length === 0)  {
      setButtonDisabled(false);

  } else {
    setButtonDisabled(true);
    // console.log(buttonDisabled);
    
  }
    console.log(Object.values(errors));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    console.log("onSubmit");
  };

  /* 
        useEffect(() => {
               let validateForm = (values) => {
                      const errors = {};
               
                      // hier wird geprüft: Ist die Länge von values.firstname >= 3?
                      // das Ergebnis ist entweder true oder false.
                      // Dieses Ergebnis wird dann errors.firstname zugewiesen. 
                      // if (errors.firstname = values.firstname.length >= 3);
                      
                      errors.firstname = values.firstname.length >= 3;
                      errors.lastname = values.lastname.length >= 3;
                      errors.email = values.email.length >= 3;       
                      errors.street = values.street.length >= 3;
                      errors.hnr = values.hnr.length >= 1;
                      errors.postcode = values.postcode.length >=3;
                      errors.country = values.country.length >=3;
               
                      return errors; // { "firstname": false,   "lastname": false,  "email": false,  "street": false }
               }
        
        }, 
        
        [formValues]);
               return (Object.keys(errors).length === 0) ? setButtonDisabled(true) : setButtonDisabled(false) ;              
        };
         */

  return (
    <FormBox onSubmit={handleSubmit}>
      <ProfileImage />
      <div className="input-container">
        <InputWrapper gridPosition="firstname-input">
          <Input
            type="text"
            name="firstname"
            value={formValues.firstname} 
            placeholder="Vorname"
            hasError={errors.firstname }
            onChangeHandler={formChangeHandler}
          />
          <Error errorsMessage={errors} name="firstname" />
        </InputWrapper>

        <InputWrapper gridPosition="lastname-input">
          <Input
            type="text"
            name="lastname"
            value={formValues.lastname}
            placeholder="Nachname"
            hasError={errors.lastname}
            onChangeHandler={formChangeHandler}
          />
          {/* {errors.lastname === false && <p>Nachname ist erforderlich</p> } */}
          <Error errorsMessage={errors} name="lastname" />
        </InputWrapper>

        <InputWrapper gridPosition="email-input">
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="E-Mail-Adresse"
            hasError={errors.email}
            onChangeHandler={formChangeHandler}
          />
          <Error errorsMessage={errors} name="email" />
        </InputWrapper>

        <InputWrapper gridPosition="street-input">
          <Input
            type="text"
            name="street"
            value={formValues.street}
            placeholder="Straße"
            hasError={errors.street}
            onChangeHandler={formChangeHandler}
          />
          <Error errorsMessage={errors} name="street" />
        </InputWrapper>

        <InputWrapper gridPosition="hnr-input">
          <Input
            type="number"
            name="hnr"
            value={formValues.hnr}
            placeholder="Hsnr."
            hasError={errors.hnr}
            onChangeHandler={formChangeHandler}
          />
          <Error errorsMessage={errors} name="hnr" />
        </InputWrapper>

        <InputWrapper gridPosition="postcode-input">
          <Input
            type="number"
            name="postcode"
            value={formValues.postcode}
            placeholder="PLZ"
            hasError={errors.postcode}
            onChangeHandler={formChangeHandler}
          />
          <Error errorsMessage={errors} name="postcode" />
        </InputWrapper>

        <InputWrapper gridPosition="country-input">
          <Input
            name="country"
            type="text"
            value={formValues.country}
            placeholder="Ort"
            hasError={errors.country}
            onChangeHandler={formChangeHandler}
          />
          <Error errorsMessage={errors} name="country" />
        </InputWrapper>
      </div>

      <Button className="btn" disabled={buttonDisabled} />
    </FormBox>
  );
};

export default SignUp;
