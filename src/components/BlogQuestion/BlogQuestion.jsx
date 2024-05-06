import s from './BlogQuestion.module.scss'
import React, { useState } from 'react';

export const BlogQuestion = () => {
    const [selected, setSelected] = useState(null);
    
    const handleClick = index => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index)
    };
    
    const questionsAnswer = [
        {
            question: 'How long does delivery take?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima accusamus voluptatem odio ad, mollitia quas id distinctio sunt laborum, similique ex architecto expedita at nihil a, iusto pariatur exercitationem earum.'
        },
        {
            question: 'How Does It Work ?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima accusamus voluptatem odio ad, mollitia quas id distinctio sunt laborum, similique ex architecto expedita at nihil a, iusto pariatur exercitationem earum.'
        },
        {
            question: 'How does your food delivery service work?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima accusamus voluptatem odio ad, mollitia quas id distinctio sunt laborum, similique ex architecto expedita at nihil a, iusto pariatur exercitationem earum.'
        },
        {
            question: 'What payment options do you accept?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima accusamus voluptatem odio ad, mollitia quas id distinctio sunt laborum, similique ex architecto expedita at nihil a, iusto pariatur exercitationem earum.'
        },
        {
            question: 'Do you offer discounts or promotions?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima accusamus voluptatem odio ad, mollitia quas id distinctio sunt laborum, similique ex architecto expedita at nihil a, iusto pariatur exercitationem earum.'
        },

    ]
    
    
    
    return <section>
    <h2 className={s.section__title}>Frequently Asked <span className={s.span}>Questions</span> </h2>
    <div className={s.questions}>
        {questionsAnswer.map((qa, index) => (<React.Fragment key = {index}>
            <div className={s.question}>
            <p className={s.quest__quest}>{qa.question}</p>
            <button onClick={()=> handleClick(index)} className={s.btn__quest}>{selected ===index ? '-' : '+'}</button>
        </div>
        {selected === index && (<div className={s.question}>
                                <p className={s.quest__answer}>{qa.answer}</p>
                            </div>)}
        <hr />
        </React.Fragment>
    ))}
    </div>
</section>}