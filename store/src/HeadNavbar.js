function Navbar() {
    return (
        <header className='App-header'>
            <img className="home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYw9Kd2Nu80TGNvWhRQ9Ow-S_oncofVNu5Q&usqp=CAU" alt="shop icon"></img>
            <button className="signIn">Sign in/out</button>
            <hr></hr>
            <input type="text" placeholder="search.."></input>
            <img className="search" src="https://img.icons8.com/ios-glyphs/2x/search--v2.gif" alt="search press here"></img>
            <img className='filter' src="https://image.shutterstock.com/image-vector/funnel-filter-icon-260nw-270775046.jpg" alt="filter press here"></img>
            <hr></hr>
            <button className="personal">My Page</button>
            <hr></hr>
            <button className="cart">My Cart</button>
        </header>
    )
}
export default Navbar