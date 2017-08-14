import {ADD_POST} from '../constants'
import update from 'react-addons-update';


const initialState = {
    posts: JSON.parse(localStorage.getItem('items')) || []
},
    localObj =  [];

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_POST:
            localObj.push(action.post);
            localStorage.setItem('items', JSON.stringify(localObj));
            return update(state, {
                posts: {
                        $push: [{
                            ...action.post
                        }]
                    }
                });


        default:
            return state;
    }
}

