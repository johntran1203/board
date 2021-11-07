import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_7iKgpfOHjiYsr9XwAVnXZ");

// User ID
// user_7iKgpfOHjiYsr9XwAVnXZ
// Access Token
// 4f3a58baaeaa5768e91df6b2560ebe75
const Contact = () => {

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const newBoard = {
        //     board_name: name,
        //     description,
        //     price,
        // };
        // await createBoard(newBoard);
        // history.push("/boards");
    };
    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name="name" />
                <label>Email</label>
                <input type="email" name="email"/>

                <label>Message</label>
                <textarea name='message' rows='4'/>
                <input type='submit' value='send'/>
            </form>
        </div>
    );
};

export default Contact;