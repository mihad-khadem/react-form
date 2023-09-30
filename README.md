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