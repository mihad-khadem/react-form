import { useState } from "react";

const StateForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] =useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        if (password.length < 8 ){
            setError('Invalid password')
        }
        else{
            setError(' ')
        }


    }
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        e.preventDefault();
        setPassword(e.target.value)
        
    }

    return (
        <div>
            <form id="subBtn" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input type="email" name="email" id="" placeholder="Email" onChange={handleEmailChange}/>
                <br />
                <input type="password" name="password" id="" placeholder="Password" onChange={handlePasswordChange} required/>
                {
                    error && <p>{error}</p>
                }
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;