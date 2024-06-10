import './_categories.scss'
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/filter/filterSlice.ts";
import { RootState } from '../../redux/store.ts';
import React, { FC, memo } from 'react';

const Category: FC = memo(() => {  
  const dispatch = useDispatch()
  const {categoryId} = useSelector(({filters}: RootState) => filters) 
  const categories = ["Всі","М’ясні", "Вегетеріанські", "Гриль", "Гострі", "Закриті"]

  const handleChangeCategory = (index: number) => {
    dispatch(setCategoryId(index))
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => handleChangeCategory(index)}
            className={categoryId == index ? "active" : ""}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Category;
