import './App.css';
import Navbar from './HeadNavbar';
import ItemLi from './itemLi';
import {useState} from 'react';
import { db } from './db/database';
import Formcomp from './mycomponent/formComp';

function App() {
  const [data,setdata]= useState(db.items)
  const [formdata,setformdata]= useState([[db.username],[db.password]])
  return (
    <div className="App">
      <Navbar></Navbar>
      <main className='itemsCenter'>
        <Formcomp formTitle='Log In' group={formdata} submitName='enter'></Formcomp>
        <ul className='row'>
          {data.map((item, index) => <ItemLi item={item} key={index} name={item.name} id={item.id} imgs={item.imgs} price={item.price} inven={item.inventory}></ItemLi>)}
        </ul>
      </main>
      <footer className='footer'>
        <p>contect us on:</p>
      </footer>
    </div>
  );
}

export default App;
