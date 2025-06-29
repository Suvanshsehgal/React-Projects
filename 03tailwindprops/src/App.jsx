import './App.css'
import Card from './compoents/Card';
function App() {

  let arr = [1,2,3,4]
  return (             
    <>
      <h1 className='bg-green-400 rounded-3xl p-4 '>hello world</h1>

      <Card title="props padh rha hu" no={arr}/>
    </>
  )
}

export default App;
