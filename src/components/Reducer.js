import {actions} from './Actions';

 const reducerData = (state={items: []}, data ) => {
    
switch (data.type) {
    case actions.ADDBEER:
        console.log(data);
    
        return {items: [...state.items, data.x]};
        break;
        

        
        case actions.ADDONE:
            let findIndex = state.items.findIndex(x=> x.id === data.x.id);
             items[findIndex].quantity + 1
            return findIndex;
        default:
            break;
    }
}

export default reducerData;





