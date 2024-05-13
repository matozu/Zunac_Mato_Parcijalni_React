import InputForm from "./Components/InputForm"
import UserInfo from "./Components/UserInfo";
import { useEffect, useState } from "react";
import "./style.css"
import axios from "axios";



function App() {
  
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(()=>{
    if (user) {
      axios
        .get(user.repos_url)
        .then((response) => setRepos(response.data))
        .catch((error) => console.log(error));    }
  }, [user])
  
  return <div className="container">
  <InputForm setUser={setUser} inputValue={inputValue} setInputValue={setInputValue}></InputForm>
  <UserInfo user={user} repos={repos} setUser={setUser} setInputValue={setInputValue}/>
  </div>
  
  
  
}

export default App
