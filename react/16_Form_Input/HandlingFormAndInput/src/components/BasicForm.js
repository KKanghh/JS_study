import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: enteredFname,
    valueIsValid: fnameIsValid,
    hasError: fnameHasError,
    changeHandler: fnameChangeHandler,
    blurHandler: fnameBlurHandler,
    reset: resetFnameHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: enteredLname,
    valueIsValid: lnameIsValid,
    hasError: lnameHasError,
    changeHandler: lnameChangeHandler,
    blurHandler: lnameBlurHandler,
    reset: resetLnameHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useForm((value) => value.includes("@"));

  const formIsValid = fnameIsValid && lnameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const user = {
      firstName: enteredFname,
      lastName: enteredLname,
      email: enteredEmail,
    };
    console.log(user);
    resetFnameHandler();
    resetLnameHandler();
    resetEmailHandler();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={`form-control ${fnameHasError ? "invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
        </div>
        <div className={`form-control ${lnameHasError ? "invalid" : ""}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLname}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
        </div>
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
