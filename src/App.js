import './App.css';
import Counter from './Counter';
import {decrease,increase,increaseByAmount} from './redux/counterSlice';
import {useDispatch,useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      
      <Counter />
      <button onClick={()=>{
        dispatch(increase())
      }

      } >Increase</button>
      <button>Decrease</button>
      <button>IncreaseByAmount</button>
    
    </div>
  );
}

export default App;
