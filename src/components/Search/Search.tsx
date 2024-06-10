import "./_search.scss";
import seacrh from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import React, { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import {setSearchValue} from "../../redux/filter/filterSlice.ts"

const Search: FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClearInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <img className="search__img" src={seacrh} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder="пошук піци..."
        type="text"
      />
      {value && (
        <img onClick={onClearInput} className="close" src={close} alt="close" />
      )}
    </div>
  );
};

export default Search;
