const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('Form submission Done');
    };

    return (
        <div>
            <form id="subBtn" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input type="email" name="email" id="" placeholder="Email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;