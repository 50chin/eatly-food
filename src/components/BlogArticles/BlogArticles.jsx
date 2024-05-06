import { useState } from 'react'
import s from './BlogArticles.module.scss'
import { articles } from './articles.js'


export const BlogArticles = () => {
 const [currentPage, setCurrentPage] = useState(0);
 let elPage = 6
 let pagesNumber = articles.length / elPage;

 const HandleClickNext = () => {
     if (currentPage < pagesNumber - 1) {
       setCurrentPage(currentPage+1);
     }
 }
 const HandleClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
 }

 let data = articles.slice(currentPage * 6, (currentPage * 6) + 6)
 return <section>
 <h2 className={s.section__title}>Latest<span className={s.span}> Articles</span></h2>
 <div className={s.cards}>
     {data.map((art) => { 
         return (
             <article key={art.id} className={s.card}>
                 <div className={s.cardImg}>
                 <img src={art.image} alt="Article" />
                 </div>
                 <div className={s.cardName}>
                 <p className={s.cartName}>{art.name}</p>
                 </div>
                 <div className={s.cardUser}>
                 <div className={s.cardUserAvatar}>
                     <img src={art.avatar} alt="Avatar" />
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
             
         )
     })}
     
 </div>
     <div className={s.card__scrolls}>
     <button onClick={HandleClickPrev} className={s.card__scroll_left}>⬅</button>
     <button onClick={HandleClickNext} className={s.card__scroll_right}>⮕</button>
     </div>
</section>}