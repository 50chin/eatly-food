import { useState } from 'react'
import s from './BlogArticles.module.scss'
import { articles } from './articles.js'
import { Link } from 'react-router-dom';


export const BlogArticles = () => {
 const [currentPage, setCurrentPage] = useState(0);
 let elPage = 6
 let pagesNumber = articles.length / elPage;
 const [colorChange, setColorChange] = useState(false);
 

 const HandleClickNext = () => {
     if (currentPage < pagesNumber - 1) {
       setCurrentPage(currentPage+1);
       setColorChange(true);
       
     }
 }
 const HandleClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setColorChange(false);
    }
 }

 let data = articles.slice(currentPage * 6, (currentPage * 6) + 6)
 return <section>
 <h2 className={s.section__title}>Latest<span className={s.span}> Articles</span></h2>
 <div className={s.cards}>
     {data.map((art) => { 
         return (
            <Link to={`/blog/${art.id}`}> <article key={art.id} className={s.card}>
                 <div className={s.cardImg}>
                 <img className={s.cardImage} src={art.image} alt="Article" />
                 </div>
                 <div className={s.cardName}>
                 <p className={s.cartName}>{art.name}</p>
                 </div>
                 <div className={s.cardUser}>
                 <div className={s.cardUserAvatar}>
                     <img className={s.img__user} src={art.avatar} alt="Avatar" />
                 </div>
                 <div className={s.cardUserCreate}>
                     <p className={s.cartUserCreate}>{art.whoCreate}</p>
                     <p className={s.cartUser}>{art.user}</p>
                 </div>
                 <div className={s.cardUserData}>
                     <p className={s.cartData}>{art.data}</p>
                 </div>
                 </div>
             </article>
             </Link>
         )
     })}
     
 </div>
     <div className={s.card__scrolls}>
     <button onClick={HandleClickPrev} className={`${s.card__scroll_left} ${colorChange ? s.newColorClasses : ''}`}>⬅</button>
     <button onClick={HandleClickNext} className={`${s.card__scroll_right} ${colorChange ? s.newColorClass : ''}`}>⮕</button>
    </div>
     
</section>}