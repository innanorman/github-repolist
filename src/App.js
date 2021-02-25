import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import MainList from './MainList';

function App() {
  const username = "innanorman";
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  const url = `https://api.github.com/users/${username}/repos`

  useEffect(() => {
    fetch(url)
    .then(res => {
      if(!res.ok){
        throw Error('could not fetch data')
      }
      return res.json()
    })
    .then(data => {
      setDataList(data)
      setIsLoading(false)
      setError(null)
    })
    .catch(err => {
      setIsLoading(false)
      setError(err.message)
    })
  }, []);


  return (
    <div className="App">
      { error && <div>{ error }</div>}
      <h1>Github Repository List</h1>
      { isLoading && <div>Loading...</div>}
      {dataList && <MainList data={dataList}/>}
    </div>
  );
}

export default App;
