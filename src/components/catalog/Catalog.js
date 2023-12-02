import arrow from '../../images/bestProducts/arrowLeftBlock.svg';
import { products } from '../../constants';

const Catalog = () => {

    return (
        <section className="catalog" aria-label="catalog">
            <ul className="catalog__list">
                <li className="catalog__pointFirst">
                    <p className="catalog__heading">Каталог товаров от Dell</p>
                    <p className="catalog__text">Наша компания является зарегистрированным и официальным партнером Dell в России.</p>
                    <button className='catalog__arrow'>
                        <img className='catalog__imgArrow' src={arrow} alt="кнопка"/>
                        <span className='catalog__textArrow'>В каталог</span>
                    </button>
                </li>
                {products.length && products.map(card => 
                    <li 
                        className={`catalog__point ${card.id%2 === 0 ? "catalog__pointEven" : ""}`}
                        key={card.id}
                    >
                        <p className="catalog__pointId">{card.id < 10 ? `0${card.id}` : card.id}</p>
                        <img className={`catalog__pointImg catalog__pointImg${card.id}`} src={card.imgProduct} alt="фото товара"/>
                        <p className="catalog__pointCounter">{card.counterProduct} товаров</p>
                        <p className="catalog__pointHeading">{card.heading}</p>
                    </li>
                )}
                
            </ul>
            
        </section>
    );
  }
  
export default Catalog;
