import CarouselItem from "./caruselItem"

function ItemLi(props) {

    return (
        <li id={props.name} className='card'>
            <div id="carouselExampleIndicators card-img-top" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.imgs[0].src} className="d-block w-100" alt={props.imgs[0].alt}></img>
                    </div>
                    {props.imgs.slice(1).map((pic, index) => <CarouselItem key={index} src={pic.src} alt={pic.alt}></CarouselItem>)}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <button name='addToCart'>add to cart</button>
                <input name={`amount${props.name}`} type='number' defaultValue='1' min='1' max={props.inven}></input>
                <p className='out'>out of stock</p>
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