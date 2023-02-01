import { CHANGE_NOTIFY } from "../constants/actionType";
import { NOTIFY_READY } from "../constants/messege";
const initialState = NOTIFY_READY;
const notify = (state = initialState,action)=>{
    switch (action.type) {
        case CHANGE_NOTIFY:
            state = action.payload;
            return state;
            
    
        default:
            return state
    }
}

export default  notify;
