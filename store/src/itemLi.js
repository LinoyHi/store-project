import CarouselItem from "./caruselItem"

function ItemLi(props) {

    return (
        <li id={props.name} className='card'>
            <div id={`${props.name}carusel`} className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={props.imgs[0].src} className="d-block w-100" alt={props.imgs[0].alt}></img>
                        </div>
                        {props.imgs.slice(1).map((pic, index) => <CarouselItem key={index} src={pic.src} alt={pic.alt}></CarouselItem>)}
                    </div>
                </div>
                <div className='add-to-cart'>
                    <button name='addToCart' className='addToCart'>add to cart</button>
                    <input name={`amount${props.name}`} type='number' defaultValue='1' min='1' max={props.inven}></input>
                </div>
                    <p className='out'>out of stock</p>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.name}carusel`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={`#${props.name}carusel`} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className='card-body'>
                <h5>{props.name}</h5>
                <p>price:{props.price}</p>
                <p>in stock: {props.inven}</p>
            </div>
        </li>
    )
}

export default ItemLi