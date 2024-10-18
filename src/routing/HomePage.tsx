import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new Error("Errore finto");

  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
        accusantium similique laborum, ipsam illum dolor atque nemo ipsum minus
        corporis rerum? Esse corporis vero possimus tempore, quaerat quidem
        cupiditate perspiciatis!
      </p>
      <Link to="/users">Utenti</Link>
      <br />
      <Link to="/contact">Contatti</Link>
    </>
  );
};

export default HomePage;
