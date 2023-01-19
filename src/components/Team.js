import img2 from '../img/member1.jpg';
import img3 from '../img/member2.jpg';
import img4 from '../img/member3.jpg';
import img5 from '../img/member4.jpg';
const Team = () => {
    return (
        <div id="team">
            <h2>Команда</h2>
            <p>Не стоит прогибаться под изменчивый мир</p>
            <div class="member">
            <img src={img2}/>
            <h3>Фёдор Комикс</h3>
            <p class="position">Аниматор</p>
            <p>Делаю мультфильмы и рисую комиксы, снимаю влоги у путешествую по стране.</p>
            <a href="#">Напиши мне</a>
            </div>
            <div class="member">
            <img src={img3}/>
            <h3>Яна Мищенко</h3>
            <p class="position">Дизайнер</p>
            <p>Не мыслю своей жизни без дизайна, мне больно, когда я вижу что-то некрасивое.</p>
            <a href="#">Напиши мне</a>
            </div>
            <div class="member">
            <img src={img4}/>
            <h3>Альберт Эйнштейн</h3>
            <p class="position">Физик</p>
            <p>Физик-теоретик, один из основателей современной теоретической физики.</p>
            <a href="#">Напиши мне</a>
            </div>
            <div class="member">
            <img src={img5}/>
            <h3>Эдурд Долотин</h3>
            <p class="position">Front-end разработчик</p>
            <p>Обожаю Front-end разработку и создовать продукты,которыми пользуются люди.</p>
            <a href="#" >Напиши мне</a>
            </div>
        </div>
    )
    
}

export default Team;