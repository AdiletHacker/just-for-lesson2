

const ADD_MESSAGE = 'ADD_MESSAGE';


const initialState = {
    messages: []
};

export let dialogs = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.newMessage]
            };
        default: return state;
    }
};

export let addMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });




























