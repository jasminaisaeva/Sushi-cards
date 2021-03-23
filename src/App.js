
import React from 'react'
import Card from './components/Card';
import Pic1 from './images/1.jpg'
import Pic2 from './images/2.jfif'
import Pic3 from './images/3.jpg'
import Pic4 from './images/4.jpg'
import  './App.css'



function App() {
  const  data = [
    {
        title:'Унаги Урамаки' ,
        title1:'угорь,авокадо, сливочный сыр',
        sum: '1500,00 тг',
        title2: '8 штук',
        title3: 'Калорийность Ккал:   298',
        img:Pic1,
        id:1
    }, {
        title:'Мадрид Ролл' ,
        title1:'Лосось,авокадо,спайси соус',
        sum: '1439,00 тг',
        title2: '8 штук',
        title3: 'Калорийность Ккал:   298',
        img:Pic2,
        id:2
    }, {
        title:'Теплая Креветка С Моцареллой' ,
        title1:'Теплый ролл - Креветка б тамаго',
        sum: '1378,00 тг',
        title2: '8 штук',
        title3: 'Калорийность Ккал :  298',
        img:Pic3,
        id:3
    }, {
        title:'Фреш Ролл С Баклажаном' ,
        title1:'Рисовая бумага,лист салата',
        sum: '1860,00 тг',
        title2: '6 штук',
        title3: 'Калорийность Ккал:   298',
        img:Pic4,
        id:4,

    },
]

  return (
    <div className="App">
    {
      data.map((item,id) => {
        return <Card 
        title={item.title}
        title1={item.title1}
        sum={item.sum}
        title2={item.title2}
        title3={item.title3}
        img={item.img}
        key={id} />
       
       
      
      }
       
      )
    
    }
    
    </div>
  );
}

export default App;
