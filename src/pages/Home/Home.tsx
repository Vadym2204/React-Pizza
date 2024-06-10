import React, { FC, useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header.tsx";
import Category from "../../components/Category/Category.tsx";
import Sort from "../../components/Sort/Sort.tsx";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock.tsx";
import LoadingBlock from "../../components/PizzaBlock/LoadingBlock.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search/Search.tsx";
import { setCurrentPage } from "../../redux/filter/filterSlice.ts";
import { fetchPizza } from "../../redux/pizza/pizzaSlice.ts";
import { RootState, useAppDispatch } from "../../redux/store.ts";
import { selectPizzaStatus, selectPizzas } from "../../redux/pizza/selectors.ts";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    ({ filters }: RootState) => filters
  );

  const status = useSelector(selectPizzaStatus);
  const pizzas = useSelector(selectPizzas);

  const sortBy = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    const getPizzas = async () => {
      await dispatch(
        fetchPizza({
          sortBy,
          order,
          category,
          currentPage,
          search,
        })
      );
    };
    getPizzas();
  }, [categoryId, sort, currentPage, searchValue, dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category />
            <Sort />
          </div>
          <div className="content__bottom">
            <h2 className="content__title">Всі піци</h2>
            <Search />
          </div>
          <div className="content__items">
            {status === "loading" ? (
              [...new Array(10)].map((_, index) => <LoadingBlock key={index} />)
            ) : status === "error" ? (
              <div className="content__error-info">
                <h2>виникла помилка 😕</h2>
                <p>
                  на жаль, не вийшло отримати піци. Попробуйте повторити
                  спробу пізніше.
                </p>
              </div>
            ) : pizzas.length > 0 ? (
              pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
            ) : (
              <div className="content__error-info">
                <h2>Піц не знайдено 😕</h2>
                <p>Попробуйте змінити властивості пошуку</p>
              </div>
            )}
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
