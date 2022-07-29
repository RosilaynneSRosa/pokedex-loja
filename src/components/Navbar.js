import React from "react";
import pokemonLogo from "./assets/img/pokemon-logo.png";

const Navbar = () => {  
  return (
    <nav>
      <div>
        <img className="navbar-img" src= {pokemonLogo} alt="pokemon-logo" />                                                                                              
      </div>
    </nav>
  );
};

export default Navbar;
