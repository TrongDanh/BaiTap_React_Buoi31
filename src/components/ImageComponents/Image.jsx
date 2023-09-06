import React, { Component } from 'react'

export default class Image extends Component {
    state = {
        imgGlass: './glassesImage/v1.png',
        name: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
        price: 30,
    }
    listButtons = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];
  render() {
    return (
      <div className='container'>
        <div className="header">
                <div className="glass my-2">
                    <img className=' w-25 ' src="./glassesImage/model.jpg" alt="" />
                    <img className='glasses' src={this.state.imgGlass} alt="" />
                </div>
                <div>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.desc}</p>
                    <h2>{this.state.price}</h2>
                </div>

            <div className="col-12">
                {this.listButtons.map ((item,index) => {
                    return <button onClick={() => {
                        this.setState({
                            imgGlass: item.url,
                            name: item.name,
                            desc: item.desc,
                            price: item.price,
                        })
                    }}>
                        <div className="col-4">
                            <img className='w-100 d-flex' src={item.url} alt="" />
                        </div>
                        
                    </button>
                })}
            </div>
        </div>
      </div>
    )
  }
}
