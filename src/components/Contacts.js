const Contacts = () => {
    return (
        <div id="contacts">
            <h2>Контакты</h2>
            <p>Не будте скромными, пишите нам:</p>
            <p class="contact-info contact-address">Москва, звонят колокола</p>
            <p class="contact-info contact-phone">Телефон:
            <a href="tel:+79556001951">+7(955)600-19-51</a>
            </p>
            <p class="contact-info contact-mail">Email: 
            <a href="mailto:hello@hwschool.online">hello@hwschool.online</a>
            </p>
            <form>
            <p><input type="text" name="name" placeholder="Имя"/></p>
            <p><input type="email" name="email" placeholder="Email"/></p>
            <p><input type="text" name="subject" placeholder="Тема"/></p>
            <p><input type="text" name="message" placeholder="Сообщение"/></p>
            <p><button>Отправить сообщение</button></p>
            </form>
        </div>
    )
    
}

export default Contacts;