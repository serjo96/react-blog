import {ADD_POST} from '../constants'

export function addPost(post){
    return {
        type: ADD_POST,
        post
    };
}
