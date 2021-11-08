import img from "../images/kcNbilly.jpeg";
import { StyledAbout } from "../styled/About.styled";

const About = () => {
    return (
        <StyledAbout>
            <h1>About me</h1>
            <h2>Hi we are KC and Billy</h2>
            <p>We are a lovely couple from Orange County. We are a family own business. We get all our products from Wal-Mart.  Every time we make a sell 10% of it goes to our Soju fund to buy more Soju.</p>
            <img src={img} alt="couple" />
        </StyledAbout>
    );
};

export default About;


