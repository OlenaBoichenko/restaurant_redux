
import './App.css';
import Categories from './Components/AllCategories/Categories';
import Dishes from './Components/AllDishes/Dishes';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <Categories />
        <Cart />
      </div>
      <div className='block'>
        <Dishes />
      </div>
    </div>
  );
}

export default App;
