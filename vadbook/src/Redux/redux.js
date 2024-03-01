import bob from "./photos/bob.jpg"
import gam from "./photos/gam.jpg";
import vad from "./photos/vad.jpg";
import lion from "./photos/lion.jpg";


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let store = {

  subscribe(observer) {
    this._subscriber = observer;
  },

  _subscriber() {
    console.log('_subscriber');
  },

  _state: [
    {
      id: 1,
      name: "bob",
      age: 23,
      posts: [
        {id: 1,
          name: "bob",
          message: "hello bob",
          likes: 1,
          photo: bob},
      ],
      newMessage: ''
    },
    {
      id: 2,
      name: "gam",
      age: 23,
      posts: [
        {id: 1,
          name: "gam",
          message: "hellogam",
          likes: 5,
          photo: gam}
      ],
      newMessage: ''
    },
    {
      id: 3,
      name: "vad",
      age: 23,
      posts: [
        {id: 1,
          name: "lion",
          message: "hellolion",
          likes: 1,
          photo: lion}
      ],
      newMessage: ''
    }
  ],

  getState() {
    return this._state;
  },

  getStateById(userId) {
    return this._state.find(stateId => stateId.id === userId)
  },

  addMessage(userId) {
    let getState = this.getStateById(userId)
    let newPost = {
      id: getState.posts.length + 1,
      name: 'my',
      message: getState.newMessage,
      likes: 0,
      photo: vad
    }
    getState.posts.push(newPost);
    getState.newMessage = '';
    this._subscriber(store);
  },

  updateMessage(newValue, userId) {
    let currentState = this.getStateById(userId);
    currentState.newMessage = newValue;
    this._subscriber(store);
  },

  dispatch(action) { // type: "ADD-MESSAGE"
    switch (action.type) {
      case ADD_MESSAGE:
        this.addMessage(action.userId);
        break;
      case UPDATE_MESSAGE:
        this.updateMessage(action.newValue, action.userId);
        break;
      default:
        break;
    }
  },
}

export let addPostActionCreator = (userId) => ({type: ADD_MESSAGE, userId: userId})

export let updatePostActionCreator = (userId, newValue) =>
  ({type: UPDATE_MESSAGE, userId: userId, newValue: newValue})


export default store;

window.store = store;