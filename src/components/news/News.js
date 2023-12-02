import arrow from '../../images/bestProducts/arrowLeftBlock.svg';
import arrowCard from '../../images/news/arrowCard.svg';
import bg2 from '../../images/news/bg2.svg';
import bgMobilePng from '../../images/news/bgMobilePng.png'

const News = ({eventsRender, isSizeWindow}) => {

    const setCount = (date) => {
        const currentDate = new Date(date * 1000);
        const count = currentDate.getDate();
        return (`${count} `)
    }
    const setMonth = (date) => {
        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июля', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
        const currentDate = new Date(date * 1000);
        const month = currentDate.getMonth();
        if (isSizeWindow === 'mobile') {
            return (`${months[month].substr(0, 3)}`)
        } else {
            return (`${months[month]}`)
        } 
    }

    return (
        <section className="news" aria-label="news">
            <div className="news__header">
                <p className="news__headerText">
                    <span className="news__headerHeading">Последние новости</span>
                    <span className="news__headerContent">Вы можете посмотреть ещё больше интересных новостей и узнать о последних новинках, перейдя по кнопке</span>
                </p>
                <button className='news__headerArrow'>
                    <span className='news__headerTextArrow'>Все новости</span>
                    <img className='news__headerImgArrow' src={arrow} alt="кнопка"/>
                </button>   
            </div>
          
            <ul className="news__list">
                {eventsRender.length && eventsRender.map((event, index) => 
                    <li className="news__card" key={event.newsId}>
                        <img className="news__cardImg" src={event.newsImg} alt={`img-card${index+1}`}/>
                        <img className="news__cardBg" src={isSizeWindow === 'desctop' ? bg2 : bgMobilePng} alt='feature' />
                        <data className="news__cardDate" value={event.newsDate}>
                            {setCount(event.newsDate)}
                            <span className="news__cardDate_month">{setMonth(event.newsDate)}</span>
                        </data>
                        {/* <div className="news_cardBg"></div> */}
                        <p className="news__cardHeading">{event.newsHeader}</p>
                        <p className="news__cardText">{event.newsContent}</p>
                        <img className="news__cardLink" src={arrowCard} alt="link-news"/>
                    </li>
                )}
                
            </ul>
    </section>
    );
  }
  
export default News;
