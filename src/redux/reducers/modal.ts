interface ModalInterface  {
    isOpen: boolean
}

const intialModalRequest: ModalInterface = {
    isOpen: false
}

const modal = (state = intialModalRequest, action) => {
    switch (action.type) {
        case 'OPEN':
            return action.payload;  
            break;
        case 'CLOSE':
            return action.payload;    
            break;
        default:
            return state;
            break;
    }
}

export default modal;