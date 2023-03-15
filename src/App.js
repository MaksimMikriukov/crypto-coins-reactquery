import './App.css';
import {useQuery} from "react-query";
import axios from 'axios';
import {useState} from "react";
import Coins from "./components/Coins";
import Container from "./components/Container";
import Button from "./components/UI/Button";


async function fetchCoins(skip = 0) {
  const {data} = await axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=14&currency=EUR`
  );
  return data.coins
}

function App() {
  const [page, setPage] = useState(0)
  const {data, isLoading, isError} = useQuery (["coins", page], () =>
  fetchCoins(page), {
      keepPreviousData: true,
    }
  );

  if(isLoading){
    return <h3>Идет загрузка...</h3>
  }
  if(isError){
    return <h3>Ошибка при получении данных</h3>
  }
  if(!data){
    return <h3>Нет данных</h3>
  }


  return (
    <div className="App">
          <Coins data={data}/>
          <Button onClick={() => setPage((p) => p - 14)} disabled={!page}>Назад</Button>
          <Button onClick={() => setPage((p) => p + 14)}>Далее</Button>
    </div>
  );
}

export default App;
