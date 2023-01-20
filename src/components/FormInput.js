import React, {useState} from 'react';


const FormInput = ({saveNewItem}) => {
     
    const [input, setInput] = useState({
        id: "",
        nome: "",
        prezzo:"",
        disponibilità: "",
        img: ""
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      saveNewItem(input)
    }
    

    const handleChange = (e) => {
      setInput({...input, [e.target.name]: e.target.value} );
    }
    

  return (
    <form>
    <input
    placeholder="nome"
        type="text"
        name="nome"
        value={input.nome}
        onChange={handleChange}
    />
     <input
     placeholder="prezzo"
        type="text"
        name="prezzo"
        value={input.prezzo}
        onChange={handleChange}
    />
     <input
     placeholder="disponibilità"
        type="text"
        name="disponibilità"
        value={input.disponibilità}
        onChange={handleChange}
    />
     <input
     placeholder="link immagine"
        type="text"
        name="img"
        value={input.img}
        onChange={handleChange}
    />
      

      <button onClick={handleSubmit}>Add Item</button>
    </form>
 
  )}

export default FormInput;
