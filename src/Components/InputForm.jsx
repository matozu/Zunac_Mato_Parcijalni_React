import { useEffect, useRef } from "react";
import axios from "axios";
import { useAppContext } from "./context";

function InputForm() {

  const {setUser, inputValue, setInputValue} = useAppContext()
  const usernameInputRef = useRef();

  useEffect(()=>{
    usernameInputRef.current.value=inputValue
  }, [inputValue])


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if(usernameInputRef.current.value!=="") {
        const result = await axios.get(
        `https://api.github.com/users/${usernameInputRef.current.value}`
      );
      setUser(result.data);
      setInputValue(usernameInputRef.current.value)

      }
      
    } catch (error) {
      console.log(error);
      setUser(null)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="input-form">
        <label htmlFor="username-input">GitHub username:</label>
        <input
          type="text"
          name="username-input"
          id="username-input"
          ref={usernameInputRef}
        />
        <button type="submit">Go!</button>
      </form>
    </>
  );
}

export default InputForm;
