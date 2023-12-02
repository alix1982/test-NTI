import leftBgComp from '../../images/advantages/leftBgComp.png';
import arrow from '../../images/bestProducts/arrowLeftBlock.svg';

const Advantages = ({advantagesRender}) => {

    return (
        <section className="advantages" aria-label="advantages">
            <article className="advantages__header">
                <div className="advantages__leftBg">
                    <img className="advantages__leftBgImg" src={leftBgComp} alt="фон"/>
                </div>
                <div>
                    <p className="advantages__heading">Наши преимущества</p>
                    <p className="advantages__text">
                        Оптимизация мощностей (расходов, социальных выплат и т.п.) позволили компании на 4,7% понизить цены по сравнению с конкурентами
                    </p>
                    <button className='advantages__arrow'>
                        <img className='advantages__imgArrow' src={arrow} alt="кнопка"/>
                        <span className='advantages__textArrow'>Оставить заявку</span>
                    </button>
                </div>
            </article>
            <ul className="advantages__list">
                {advantagesRender.length && advantagesRender.map(advantage => 
                    <li className="advantages__point" key={advantage.id}>
                        <div className="advantages__imgBgCard">
                            <img className="advantages__imgBg" src={advantage.imgAdvantage} alt="фон"/>
                        </div>
                        <div className="advantages__headingsCard">
                            {advantage.headings && advantage.headings.map((heading, index) => 
                                <p className="advantages__headingCard" key={index}>{heading}</p>
                            )}
                        </div>
                        <div className="advantages__textsCard">
                            {advantage.contents && advantage.contents.map((content, index) => 
                                <p className="advantages__textCard" key={index}>{content}</p>
                            )}
                        </div>
                        {/* <p className="advantages__textCard">{advantage.content}</p> */}
                    </li>
                )}
            </ul>
            
        </section>
    );
  }
  
export default Advantages;
