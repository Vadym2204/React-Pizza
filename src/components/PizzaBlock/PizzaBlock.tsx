import React, { FC, useState } from "react";
import "./_pizza-block.scss";
import { addItems, CartItem } from "../../redux/cart/cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

interface PizzaBlockProps {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}

type TypeName = "тонке" | "традиційне";
type SizeName = "26" | "30" | "40";

interface CartItemWithType extends CartItem {
  type: TypeName;
  size: SizeName;
  count: number; 
}

const PizzaBlock: FC<PizzaBlockProps> = ({ id, imageUrl, title, types, sizes, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector<RootState, CartItem[]>((state) => state.cart.items);
  const cartItem = cartItems.find((obj) => obj.id === id);

  const addedCount = cartItem ? cartItem.count : 0;
  const [activeTypes, setActiveTypes] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const typeName: TypeName[] = ["тонке", "традиційне"];
  const sizeName: SizeName[] = ["26", "30", "40"];

  const onClickAddItem = () => {
    const item: CartItemWithType = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activeTypes],
      size: sizeName[activeSize],
      count: 0, 
    };
    dispatch(addItems(item));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              onClick={() => setActiveTypes(typeId)}
              className={activeTypes == typeId ? "active" : ""}
              key={typeId}
            >
              {typeName[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={activeSize == index ? "active" : ""}
              key={index}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">від {price} ₴</div>
        <div
          onClick={onClickAddItem}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
