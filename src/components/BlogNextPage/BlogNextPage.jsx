import s from './BlogNextPage.module.scss'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { articles } from '../BlogArticles/articles';

function shuffleArray(array) { // функция для перемешивания элементов массива
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
} 
const BlogNextPage = () => {
  const [ article, setArticle ] = useState(null);
  const { id } = useParams();
  
  const shuffledArticles = shuffleArray(articles); // перемешиваем статьи
    const randomArticles = shuffledArticles.slice(0, 3 % 50); // выбираем первые три

  useEffect(() => {
    const foundArticle = articles.find((art) => art.id == id);
    console.log(articles);
    console.log(foundArticle);
    if (foundArticle) {
        setArticle(foundArticle);
    }
}, [id]);

  return (
      // Render your detailed article here according to the data structure
      <div className={s.article}>
      <h2 className={s.article__title}>{article?.name}</h2>
      <div className={s.cardUser}>
                 <div className={s.cardUserAvatar}>
                     <img src={article?.avatar} alt="Avatar" />
                 </div>
                 <div className={s.cardUserCreate}>
                     <p className={s.cartUserCreate}>{article?.whoCreate}</p>
                     <p className={s.cartUser}>{article?.user}</p>
                 </div>
        </div>
        <hr />
      <img className={s.article__image} src={article?.image} alt="#" />
        <div className={s.descs__info}>
            <div className={s.desc__left}>
                <h3>{article?.subtitle}</h3>
                <p className={s.p__desc}>{article?.desc}</p>
                <img className={s.article__image_second} src={article?.image} alt="#" />
                <h3 className={s.subTitle}>{article?.secondSubtitle}</h3>
                <p className={s.p__desc}>{article?.descSecond}</p>
                <h3>{article?.thirdSubtitle}</h3>
                <p className={s.p__desc}>{article?.descThird}</p>
            </div>
            <hr className={s.my__hr}></hr>
            <div className={s.desc__right}>
            <h2>Top Articles</h2>
               
            {randomArticles.map((article) => {
                
                return (
            <><Link to={`/blog/${article?.id}`}> <article key={article?.id}  className={s.card}>
                        <div className={s.cardImg}>
                            <img src={article?.image} alt="Article" />
                        </div>
                        <div className={s.cardName}>
                            <p className={s.cartName}>{article?.name}</p>
                        </div>
                        <div className={s.cardUser}>
                            <div className={s.cardUserAvatar}>
                                <img src={article?.avatar} alt="Avatar" />
                            </div>
                            <div className={s.cardUserCreate}>
                                <p className={s.cartUserCreate}>{article?.whoCreate}</p>
                                <p className={s.cartUser}>{article?.user}</p>
                            </div>
                            <div className={s.cardUserData}>
                                <p className={s.cartData}>{article?.data}</p>
                            </div>
                        </div>
                    </article>
                    </Link></>
                )})}
            </div>
        </div>
    </div>
    
    
);
}
export default BlogNextPage;
