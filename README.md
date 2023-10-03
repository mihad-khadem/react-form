# React Core Part-3

 - 1. Using form tag to get values.
   -> To access form data {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('Form submission Done');
    };
   }

 - 2. Controlled element: Use individual field state for each field.

 - 3. Controlled element: One object in a state holding all the input fields value

 - 4. Uncontolled element: useRef to create a reference to the element and  access value by using like : nameRef.current.value

# Controlled Components 

In a controlled component, the state of the form elements is controlled by React.

The value of the input is set through the component's state and is updated through event handlers.

When the input value changes, the state is updated, and React re-renders the component to reflect the new value.

Controlled components offer more control over the form's behavior and provide a clear data flow.

# Uncontrolled Component:

 These ref attributes correspond to the value of the email field of the input form.

Using react ref we can hold the instances of the HTML element in their .current property.

Later using .current, we can get the value of input elements using the
value property.


# Advantages of controlled components


The instant validation check is one of the major benefits of using the controlled
component over tHe uncontrolled component in react.

You can have validation checks on every keystroke of the user when using controlled
components in react. This is because we can access the input value at every time with the
help of react state.

In contrast, in an uncontrolled component, the input value is only available when the form
is submitted by the user.

For example, we can perform a validation check on the user input (password type) where
the requirement is that the input password should be at least eight characters and display a conditional message accordingly.

Simpler to implement.
No component to re-render

To help the developers integrate other libraries with react. Using uncontrolled
components react will give access to the most basic web API, so you will be able to
develop anything.

# How to create a Custom Hook
Creating a custom hook in a React application is a great way to encapsulate reusable logic that can be shared across multiple components. Custom hooks are functions that follow the naming convention useSomething, and they can access React's built-in hooks or other custom hooks. Here's a step-by-step guide on how to create a custom hook:

1. Create a New JavaScript File: Start by creating a new JavaScript file (e.g., useCustomHook.js) in your project's directory.
2. Import React and Necessary Hooks: In your custom hook file, import React and any built-in hooks you need, such as useState, useEffect, or useContext. You can also import other custom hooks if required.
3. Define Your Custom Hook Function: Create your custom hook function. Make sure it follows the useSomething naming convention. The function should encapsulate some reusable logic and return any values, state, or functions that other components might need.
function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Your custom logic goes here
  }, [value]);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return { value, updateValue };
}

export default useCustomHook;

In this example, the custom hook 'useCustomHook' manages a state variable and provides a function to update it.
4. Using the Custom Hook in Components: You can now use your custom hook in any component that needs the encapsulated logic. Import the custom hook and call it within your component.
import React from 'react';
import useCustomHook from './useCustomHook';

function MyComponent() {
  const { value, updateValue } = useCustomHook('initialValue');

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => updateValue('new value')}>Update Value</button>
    </div>
  );
}

export default MyComponent;
This component uses the useCustomHook to manage a value and provide a way to update it.
5. Use Custom Hook in Other Components: You can use the same custom hook in other components as well. Just import it and call it as needed.

import React from 'react';
import useCustomHook from './useCustomHook';

function AnotherComponent() {
  const { value, updateValue } = useCustomHook('another initial value');

  return (
    <div>
      <p>Another Value: {value}</p>
      <button onClick={() => updateValue('new value for another')}>Update Another Value</button>
    </div>
  );
}

export default AnotherComponent;
That's it! You've created a custom hook and used it in multiple components. Custom hooks are an excellent way to keep your code organized and promote reusability of logic in your React application.

# Reusable Component



# Context API
How to create a context API ->
 1. Create a Context and export.
 2. Add provider for the context with a value.(Value could be anything)
 3. useContext to access the value of context API

 Use Case ->
 Passing data deeply into the tree
 Updating data passed via context’
 Specifying a fallback default value
 Overriding context for a part of the tree
 Optimizing re-renders when passing objects and functions

