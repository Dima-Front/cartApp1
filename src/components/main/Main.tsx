import React from 'react';
import Card from "../../custom/cards/Card";
import lupa from "../../icons/lupa.svg"

interface MainProps {
    data: any
}

const Main: React.FC<MainProps> = ({data}) => {


    return (
        <div  className='container'>
        <div className='main-input' >
            <input type='search' placeholder='Поиск'/>
            <img className='main-icon' src={lupa} alt=""/>
        </div>

            <div className='main-text'>
                Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в  профессиональном уходе. <br/>
                То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – <br/>это задача профессионалов.
            </div>
            <div className='cards-group'>
                {!data.length ? ' Нет товаров' : data.map((item: { id: React.Key | number | string; name: string; price: number; }) =>
                    <Card key={item.id} title={item.name} price={item.price} id={item.id} item={item}/>)}


            </div>

        </div>
    );
};

export default Main;