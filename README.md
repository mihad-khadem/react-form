# React Core Part-3

 - Using form tag to get values
   To access form data {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('Form submission Done');
    };
   }
