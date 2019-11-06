

const ADD_POST = 'ADD_POST';


const initialState = {
    posts: []
};

export let profile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.newPost]
            };
        default: return state;
    }
};

export let addPost = (newPost) => ({ type: ADD_POST, newPost });

























