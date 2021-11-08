import { StyledContact } from "../styled/Contact.styled";

const Contact = () => {


    return (
        <StyledContact>
            <div className= 'container'>
            <h1>Contact Us</h1>
            <form action="https://formsubmit.co/tranjohn1211@gmail.com">
                <label>Name</label>
                <input type='text' name="name" />
                <label>Email</label>
                <input type="email" name="email"/>

                <label>Message</label>
                <textarea name='message' rows='4'/>
              
            </form>
            <button type='submit'>Submit</button>
            </div>

        </StyledContact>
    );
};

export default Contact;