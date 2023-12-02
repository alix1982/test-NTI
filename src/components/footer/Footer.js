import logoNoBg from '../../images/header/logoNoBg.png';
import socialIconFacebook from '../../images/contactsAndRequest/socialIconFacebook.svg';
import socialIconTel from '../../images/contactsAndRequest/socialIconTel.svg';
import { contacts, catalog, lk, help } from '../../constants';

const Footer = ({productsRender}) => {
    const contactsFooter = [contacts[0], contacts[2], contacts[1]];
    
    return (
        <section className="footer" aria-label="footer">
            <div className="footer__main">
                <img  className="footer__logo" src={logoNoBg} alt='logo'/>
                <ul className="footer__list footer__listCatalog">
                    <li className="footer__pointHeader footer__pointHeaderCatalog">{catalog[0]}</li>
                    {productsRender.length && productsRender.map(item => 
                        <li className="footer__point footer__pointCatalog" key={item.id}>{item.heading}</li>
                    )}
                </ul>
                <ul className="footer__list footer__listLk">
                    <li className="footer__pointHeader">{lk[0]}</li>
                    {lk[1].length && lk[1].map((item, index) => 
                        <li className="footer__point" key={index}>{item}</li>
                    )}
                </ul>
                <ul className="footer__list footer__listHelp">
                    <li className="footer__pointHeader">{help[0]}</li>
                    {help[1].length && help[1].map((item, index) => 
                        <li className="footer__point" key={index}>{item}</li>
                    )}
                </ul>
            </div>

            <ul className="footer__contactsList">
                {contactsFooter.length && contactsFooter.map(contact => 
                    <li className="footer__contactsPoint" key={contact.contactId}>
                        <p className="footer__contactsHeading">{contact.contactHeader}</p>
                        <div className="footer__contactsTexts">
                            {contact.contactContent.length && contact.contactContent.map((text, index) => 
                                <>
                                    <p className="footer__contactsText" key={index}>{text}</p>
                                    <span className="footer__contactsTextSpan">, </span>
                                </>
                            )}
                        </div>
                    </li>
                )}
                <li className="footer__contactsPointSocial">
                    <img className="footer__contactsSocialIcon" src={socialIconFacebook} alt="icon facebook"/>
                    <img className="footer__contactsSocialIcon" src={socialIconTel} alt="icon phone"/>
                </li>
            </ul>
        </section>
    );
  }
  
export default Footer;
