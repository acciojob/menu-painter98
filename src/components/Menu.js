import React from 'react';
import DATA from './data.js';

const Menu = ({state}) => {
    let newData = state!=''?DATA.filter((item)=>item.category==state):DATA;
    {console.log(newData[0].img)}

    return (
        <div className='products'>
            {
                newData.map((item)=>{
                    return (
                        <div className="items" key={item.id}>
                            <div className='first'>
                                <img src={item.img} alt='image'/>
                            </div>
                            <div className='second'>
                                <span>{item.title} </span>
                                <span>$ {item.price}</span>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu