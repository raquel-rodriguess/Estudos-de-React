
import './App.css';
import HelloWorld from './components/HelloWorlds'
function sum(a,b){
  return a - b
}
const name = "Raquel"
const nome = name.toUpperCase()
function App() {
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p> olá, {nome}</p>
<p> Soma: {sum(5,2) } </p> 
  <p>Soma: {2 + 2}</p>
  <HelloWorld/>
        
    </div>
  )
}

export default App;
