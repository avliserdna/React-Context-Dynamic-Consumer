import { useContext } from "react";
import horoscopesObj from "../data/horoscopes";
import { HoroscopeContext } from "../context/HoroscopeContext.js";
const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = useContext(HoroscopeContext);

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={(e) => setCurrentSign(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
