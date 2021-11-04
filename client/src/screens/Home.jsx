import imgOne from "../images/america.jpg";
import imgTwo from "../images/Brie.jpg";
import imgThree from "../images/Cheddar.jpg";
import imgFour from "../images/Gouda.jpg";
import imgFive from "../images/Pepper.jpg";
import imgSix from "../images/Smoked.jpg";
import { StyledHome } from "../styled/Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <h1>Charcuterie Board</h1>
      <p>In the French tradition, charcuterie (pronounced "shahr-ku-tuh-ree") is the art of preparing and assembling cured meats and meat products. ... A charcuterie board is an assortment of meats, cheeses, artisan breads, olives, fruit, and nuts, all artfully arranged on a serving board.  </p>
      <div className="home-container">
        <div className="col">
          <img src={imgOne} alt="american" />
          <img src={imgTwo} alt="american" />
          <img src={imgThree} alt="american" />
          <img src={imgFour} alt="american" />
          <img src={imgFive} alt="american" />
          <img src={imgSix} alt="american" />
        </div>
        </div>
    </StyledHome>
  );
};

export default Home;