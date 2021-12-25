/* eslint-disable jsx-a11y/alt-text */
import s from "./HomePage.module.css";
import homeImg from "../../images/home-img-1.jpg";
import Container from "../../components/Container";

function HomePage() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Your favorite phone book!</h2>
        <img className={s.img} src={homeImg}></img>
      </div>
    </Container>
  );
}

export default HomePage;
