import { useState } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            board_name: name,
            
           
        };
        // await createBoard(newComment);
        history.push("/boards");
    };
    return (
        <div>
            <h1>Contact</h1>
            <p>Contact us with any questions or comments</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
             <label htmlFor="email">Email:</label>
            <input
                id="email"
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="comment">Comments:</label>
            <input
                id="comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />
             <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;