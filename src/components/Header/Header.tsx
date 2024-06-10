import React, { FC, useEffect, useRef } from "react";
import logo from "../../assets/img/pizza-logo.svg";
import Button from "../Button/Button.tsx";
import "./_header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selectors.ts";

const Header: FC = () => {
  const { items } = useSelector(selectCart);
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>найкраща піца</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
