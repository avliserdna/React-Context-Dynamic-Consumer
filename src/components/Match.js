import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext.js";

export const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  return (
    <>
      <button onClick={() => (match ? setMatch(false) : setMatch(true))}>
        Match
      </button>
      {match ? <div>{sign.match}</div> : null}
    </>
  );
};
