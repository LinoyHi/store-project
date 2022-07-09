import CarouselItem from "./caruselItem"

function ItemLi(props) {

    return (
        <li id={props.id} className='col-3'>
            <div className='card'>
            <div id={`${props.id}carusel`} className="carousel slide" data-bs-ride="false">
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
                    <input name={`amount${props.id}`} type='number' defaultValue='1' min='1' max={props.inven}></input>
                </div>
                    <span className='out'>out of stock</span>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}carusel`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}carusel`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <button className='add-to-cart wishlist'>♥</button>
            </div>
            <div className='card-body'>
                <h6>{props.name}</h6>
                <p>price: {props.price}</p>
                <p>in stock: {props.inven}</p>
            </div>
        </div>
        </li>
    )
}

export default ItemLi