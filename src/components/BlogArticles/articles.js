import imageOne from '../../assets/img/articles/articleOne.jpg'
import imageTwo from '../../assets/img/articles/articleTwo.jpg'
import imageThree from '../../assets/img/articles/articleThree.jpg'
import imageFour from '../../assets/img/articles/articleFour.jpg'
import imageFive from '../../assets/img/articles/articleFive.jpg'
import imageSix from '../../assets/img/articles/articleSix.jpg'
import avatar from '../../assets/img/articles/avatar.svg'

const articleInfo = {
  avatar: avatar,
  whoCreate: 'Written by',
  user: 'Perperzon',
  data: '15 DEC, 2022'
}

export const articles = [
  {
    id: 1,
    image: imageOne,
    name: "How To Order Food ?",
    ...articleInfo
  },
  {
    id: 2,
    image: imageTwo,
    name: "How To Track The Order ?",
    ...articleInfo
  },
  {
    id: 3,
    image: imageThree,
    name: "How To Manage Cards ?",
    ...articleInfo
  },
  {
    id: 4,
    image: imageFour,
    name: "Tips & Tricks For Business",
    ...articleInfo
  },
  {
    id: 5,
    image: imageFive,
    name: "How To Control Money ?",
    ...articleInfo
  },
  {
    id: 6,
    image: imageSix,
    name: "Top 5 Business Ideas",
    ...articleInfo 
  },
  {
    id: 7,
    image: imageOne,
    name: "How To Order Food ?",
    ...articleInfo
  },
  {
    id: 8,
    image: imageTwo,
    name: "How To Track The Order ?",
    ...articleInfo
  },
  {
    id: 9,
    image: imageSix,
    name: "How To Manage Cards ?",
    ...articleInfo
  },
  {
    id: 10,
    image: imageThree,
    name: "Tips & Tricks For Business",
    ...articleInfo
  },
  {
    id: 11,
    image: imageFour,
    name: "How To Control Money ?",
    ...articleInfo
  },
  {
    id: 12,
    image: imageFive,
    name: "Top 5 Business Ideas",
    ...articleInfo 
  }
]