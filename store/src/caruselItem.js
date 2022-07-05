function CarouselItem(props) {
    return (
        <div className="carousel-item">
            <img src={props.src} className="d-block w-100" alt={props.alt}></img>
        </div>)
}
export default CarouselItem