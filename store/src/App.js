import './App.css';
import Navbar from './HeadNavbar';
import ItemLi from './itemLi';
import items from './db';
import {useState} from 'react';

function App() {
  const [data,setdata]= useState(items)
  return (
    <div className="App">
      <Navbar></Navbar>
      <main className='itemsCenter'>
        <ul className='row'>
          {data.map((item, index) => <ItemLi key={index} name={item.name} imgs={item.imgs} price={item.price} inven={item.inventory}></ItemLi>)}
        </ul>
      </main>
      <footer className='footer'>
        <p>contect us on:</p>
      </footer>
    </div>
  );
}

export default App;
