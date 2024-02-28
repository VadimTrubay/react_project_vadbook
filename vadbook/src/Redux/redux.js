import bob from "./photos/bob.jpg"
import gam from "./photos/gam.jpg";
import vad from "./photos/vad.jpg";


let store = {

  state: [
    {
      id: 1,
      name: "bob",
      age: 23,
      posts: [
        {id: 1, name: "bob", message: "hello bob", likes: 1},
      ],
      newMessage: '',
      photo: bob
    },
    {
      id: 2,
      name: "gam",
      age: 23,
      posts: [
        {id: 1, name: "gam", message: "hellogam", likes: 5}
      ],
      newMessage: '',
      photo: gam
    },
    {
      id: 3,
      name: "vad",
      age: 23,
      posts: [
        {id: 1, name: "vad", message: "hellovad", likes: 1}
      ],
      newMessage: '',
      photo: vad
    }
  ],

  getState() {
    return this.state
  },

  getStateById(userId) {
    return this.state.find(state => state.id === userId)
  },

  getPostsByUserId(userId) {
    return this.state.find(state => state.id === userId).posts
  },

  addPost(userId) {
    const newPost = {
      id: this.getStateById(userId).posts.length + 1,
      name: 'my',
      message: this.getStateById(userId).newMessage,
      likes: 0,
    }
    this.getStateById(userId).posts.push(newPost);
    this.getStateById(userId).newMessage = '';
    this._subscriber();
    console.log('addPost!!!!!!!', this.getStateById(userId).posts)
  },

  updatePost(newMessage, userId) {
    this.getStateById(userId).newMessage += newMessage;
    const res = this.getStateById(userId).newMessage
    console.log(res, '!!!!!!!!!')
    this._subscriber();
  },

  _subscriber() {
    // console.log('sub')
  },

  subscribe(observer) {
    this._subscriber = observer;
  },
}

window.store = store;

export default store;


