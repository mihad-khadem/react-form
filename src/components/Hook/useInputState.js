import { useState } from "react"

const UseInputState = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e =>{
        setValue(e.target.value);
    }
    // return [value, handleChange]
    return {
        value, 
        onChange
    }
}

export default UseInputState;