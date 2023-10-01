import UseInputState from "../Hook/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = UseInputState();
    const emailState = UseInputState('example@gmail.com');
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', emailState.value);
    }

    return (
        <div>
            <form id="subBtn" onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Name"/>
                <br /> */}
                <input {...emailState} type="email" name="email" id="" placeholder="Email"/>
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;