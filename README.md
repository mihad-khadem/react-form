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

 - 3. 
