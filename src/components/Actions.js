export const actions = {
    ADDBEER: "ADDBEER",

    ADDONE: "ADDONE",
    REMOVEONE: "REMOVEONE"


}

export const add = (beerItem) => ({
   
  x: beerItem,
  
  type: actions.ADDBEER,
  

});

export const addOne = (id, quantity) => ({
  objAdd: {
       id: id,
       quantity: quantity, 
  },

  type: actions.ADDONE
  
})

export const removeOne = (id, quantity) => {
}

