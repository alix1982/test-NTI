import { useEffect, useState } from 'react';
import arrowRightBlock from '../../images/bestProducts/arrowRightBlock.svg';
import textDell from '../../images/bestProducts/textDell.svg';
import backgroundLeftBlock from '../../images/bestProducts/backgroundLeftBlock.png';
import backgroundRightBlock from '../../images/bestProducts/backgroundRightBlock.png';
import buttonScroll from '../../images/bestProducts/buttonScroll.svg';
import arrowLeftBlock from '../../images/bestProducts/arrowLeftBlock.svg';

const BestProducts = () => {
    const images = [backgroundLeftBlock, backgroundRightBlock, backgroundLeftBlock, backgroundRightBlock, backgroundLeftBlock];
    const [count, setCount] = useState(0)

    const [image, setImage] = useState(images[0])
    const handleImage = (countPoint) => {
        setCount(countPoint);
    }
    useEffect(()=>{
        setImage(images[count]);
    },[count])
    return (
        <section className="bestProducts" aria-label="best-products">
            <div className="bestProducts__left">
                <img className="bestProducts__leftBgText" src={textDell} alt="фон"/>
                <img className="bestProducts__leftBgImg" src={image} alt="фон"/>
                <span className='bestProducts__leftTextArrival'>Новое поступление</span>
                <span className='bestProducts__leftTextBest'>Лучшие товары <br/>от компании Dell</span>
                <p className='bestProducts__leftScroll'>
                    <img className='bestProducts__leftImgScroll' src={buttonScroll} alt="кнопка"/>
                    <span className='bestProducts__leftTextScroll'>Scroll to catalog</span>
                </p>
                <button className='bestProducts__leftArrow'>
                    <img className='bestProducts__leftImgArrow' src={arrowLeftBlock} alt="кнопка"/>
                    <span className='bestProducts__leftTextArrow'>Подробнее</span>
                </button>
                <ul className='bestProducts__leftPaginations'>
                    <li className='bestProducts__leftPointPagination'>
                        <button
                            className={`bestProducts__leftButtonPagination ${count === 0 ? 'bestProducts__leftButtonPagination_active' : ''}`}
                            onClick={()=>handleImage(0)}
                        ></button>
                    </li>
                    <li className='bestProducts__leftPointPagination'>
                        <button
                            className={`bestProducts__leftButtonPagination ${count === 1 ? 'bestProducts__leftButtonPagination_active' : ''}`}
                            onClick={()=>handleImage(1)}
                        ></button>
                    </li>
                    <li className='bestProducts__leftPointPagination'>
                        <button
                            className={`bestProducts__leftButtonPagination ${count === 2 ? 'bestProducts__leftButtonPagination_active' : ''}`}
                            onClick={()=>handleImage(2)}
                        ></button>
                    </li>
                    <li className='bestProducts__leftPointPagination'>
                        <button
                            className={`bestProducts__leftButtonPagination ${count === 3 ? 'bestProducts__leftButtonPagination_active' : ''}`}
                            onClick={()=>handleImage(3)}
                        ></button>
                    </li>
                    <li className='bestProducts__leftPointPagination'>
                        <button
                            className={`bestProducts__leftButtonPagination ${count === 4 ? 'bestProducts__leftButtonPagination_active' : ''}`}
                            onClick={()=>handleImage(4)}
                        ></button>
                    </li>
                    <li className='bestProducts__leftPointButton'>
                        <img src={arrowRightBlock} className="bestProducts__leftButton" alt="стрелка"/>
                    </li>
                </ul>
            </div>
            <div className="bestProducts__right">
                <div className="bestProducts__rightMainContent">
                    <p className="bestProducts__rightText"> 
                        Выгодное предложение от Dell
                    </p>
                </div>
                <img src={arrowRightBlock} className="bestProducts__rightButton" alt="стрелка"/>
                {/* <button className="bestProducts__rightButton"></button> */}
            </div>
        </section>
    );
  }
  
export default BestProducts;
