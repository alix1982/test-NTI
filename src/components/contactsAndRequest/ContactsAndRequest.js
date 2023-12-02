import { useState, useEffect } from 'react';
import arrow from '../../images/bestProducts/arrowLeftBlock.svg';
import socialIconFacebook from '../../images/contactsAndRequest/socialIconFacebook.svg';
import socialIconTel from '../../images/contactsAndRequest/socialIconTel.svg';
import { contacts } from '../../constants';

const ContactsAndRequest = ({phoneRender}) => {

    //form
    const [nameValue, setNameValue] = useState('');
    const [isErrorName, setIsErrorName] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');
    const [isErrorPhone, setIsErrorPhone] = useState(false);
    const [commentValue, setCommentValue] = useState('');
    const [isErrorComment, setIsErrorComment] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const reName = /[^(А-Яа-яЁёa-zA-Z\s)]/;
    const rePhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    
    const handleName = (e) => {
        setNameValue(e.target.value);
    }
    const handlePhone = (e) => {
        setPhoneValue(e.target.value)
    }
    const handleComment = (e) => {
        setCommentValue(e.target.value);
    }
    const resetForm = () => {
        setNameValue('');
        setIsErrorName(false);
        setPhoneValue('');
        setIsErrorPhone(false);
        setCommentValue('');
        setIsErrorComment(false);
        setIsSubmit(false);
    }
 
    const checken = () => {
        reName.test(nameValue) ? setIsErrorName(true) : (nameValue.length >= 2 ? setIsErrorName(false) : setIsErrorName(true));
        rePhone.test(phoneValue) ? setIsErrorPhone(false) : setIsErrorPhone(true);
        commentValue.length >= 2 ? setIsErrorComment(false) : setIsErrorComment(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isErrorName && !isErrorPhone && !isErrorComment) {
            setIsSubmit(true);
            setTimeout(resetForm, 3000);
        }
    }
    
    useEffect(()=>{
        checken();
    },[nameValue, phoneValue, commentValue])
    
    return (
        <section className="contactsAndRequest" aria-label="contacts-and-request">
            <div className="contactsAndRequest__contacts">
                <p className="contactsAndRequest__contactsHeading">Наши контакты</p>
                <p className="contactsAndRequest__contactsText">Вы можете связаться с нашим онлайн-консультантом</p>
                {contacts.length && contacts.map((contact) => 
                    <div 
                        className={`contactsAndRequest__contactsContent contactsAndRequest__contactsContent_${contact.contactName}`}
                        key={contact.contactId}
                    >
                        <img className="contactsAndRequest__contactsContentIcon" src={contact.contactImg} alt='icon'/>
                        <p className="contactsAndRequest__contactsContentHeading">{contact.contactHeader}</p>
                        <div className="contactsAndRequest__contactsContentTexts">
                            {contact.contactContent.length && contact.contactContent.map((text, index) => 
                                <p className="contactsAndRequest__contactsContentText" key={index}>{text}</p>
                            )}
                        </div>
                    </div>
                )}
                <div className="contactsAndRequest__contactsSocial">
                    <img className="contactsAndRequest__contactsSocialIcon" src={socialIconFacebook} alt="icon facebook"/>
                    <img className="contactsAndRequest__contactsSocialIcon" src={socialIconTel} alt="icon phone"/>
                </div>
                <img className="contactsAndRequest__contactsBg" src={phoneRender} alt="icon phone"/>
            </div>
            
            <div className="contactsAndRequest__request">
                <p className="contactsAndRequest__requestHeading">Оставьте заявку</p>
                <p className="contactsAndRequest__requestText">Оставьте свой номер, и мы перезвоним Вам.</p>
                <form className="contactsAndRequest__requestForm" onSubmit={handleSubmit}>
                    <fieldset className={`contactsAndRequest__requestInputField ${isErrorName ? "error" : ""}`}>
                        <legend className="contactsAndRequest__requestInputHeading">Ваше имя</legend>
                        <input
                            className="contactsAndRequest__requestInput"
                            type='text'
                            maxLength={30}
                            value={nameValue}
                            onChange={handleName}
                            placeholder='Введите имя (больше 2-х символов, только буквы)'
                            required
                        />
                    </fieldset>
                    <fieldset className={`contactsAndRequest__requestInputField ${isErrorPhone ? "error" : ""}`}>
                        <legend className="contactsAndRequest__requestInputHeading">Номер телефона</legend>
                        <input
                            className="contactsAndRequest__requestInput"
                            type='text'
                            value={phoneValue}
                            onChange={handlePhone}
                            placeholder='+7-999-111-1111 или +79991111111'
                            required
                        />
                    </fieldset>
                    <fieldset className={`contactsAndRequest__requestInputField contactsAndRequest__requestInputField_comment ${isErrorComment ? "error" : ""}`}>
                        <legend className="contactsAndRequest__requestInputHeading">Комментарий</legend>
                        <textarea
                            className="contactsAndRequest__requestTextArea"
                            type='text'
                            maxLength={300}
                            value={commentValue}
                            onChange={handleComment}
                            placeholder='Напишите комментарий (более 2-х символов)'
                            required
                        >
                            {/* {commentValue} */}
                        </textarea>
                    </fieldset>
                    <button className={`contactsAndRequest__submitArrow ${isSubmit ? "disabled" : ""}`} disabled={isSubmit}>
                        <img className='contactsAndRequest__submitImgArrow' src={arrow} alt="кнопка"/>
                        <span className='contactsAndRequest__submitTextArrow'>{isSubmit ? 'Заявка отправлена' : 'Заказать'}</span>
                    </button>
                </form>
            </div>
        </section>
    );
  }
  
export default ContactsAndRequest;
