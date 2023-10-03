import './App.css';
import { useEffect, useState } from 'react';

function App() {


  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState('');

  useEffect ( () => {
    setLista([]);
  }, []);



  return (
    <>
    <div className='container'>
      <div className='new-item'>
      <input placeholder = 'Tarefa' value = {novoItem} onChange = { value => setNovoItem(value.target.value) } type='text'></input>
      <button onClick={() => addNovoItem()}> Adicionar </button>
      </div>
      <ul className='lista'>
        {lista.map((item, index) => (
        <li key={index} className='item'>
          {item}
          <button onClick={ () => deletarItem(index)}>
            Deletar
          </button>   
        </li>
        ))}
      </ul>
    </div>
    </>
  );

  function addNovoItem () {
    if (novoItem.length <= 0) {
      alert ('Por favor, digite algo no campo ');
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex.length >= 0) {
      alert ('Já adicionou essa tarefa ');
      return;
    }

    setLista([...lista, novoItem]);
    setNovoItem('');
  }

  function deletarItem (index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1)
    setLista(tmpArray);
  }
}

export default App;
