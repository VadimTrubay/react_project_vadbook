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
        {id: 1, name: "bob", message: "hellobob", likes: 3}
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

  // getNameById(userId) {
  //   return this.state.filter(state => state.id === userId).filter(user => user.name === userId);
  // },

  // getAge(userId) {
  //   return this.state.filter(user => user.age === userId);
  // },
  //
  // getPostId(userId, postId) {
  //   return this.state.filter(state => state.id === userId).filter(post => post.id === postId);
  // },
  //
  // getPostName(userId, postId) {
  //   return this.state.filter(state => state.id === userId).filter(post => post.id === postId).filter(post => post.name === postId);
  // },
  //
  // getPostMessage(userId, postId) {
  //   return this.state.filter(state => state.id === userId).filter(post => post.id === postId).filter(post => post.message === postId);
  // },
  //
  // getPostLikes(userId, postId) {
  //   return this.state.filter(state => state.id === userId).filter(post => post.id === postId).filter(post => post.likes === postId);
  // },

  // getPhotoById(userId) {
  //   let myPhoto = this.state.filter(state => state.id === userId);
  //   console.log(myPhoto, '!!!!!!!!!')
  //   return myPhoto;
  // },

  addPost() {
    const newPost = {
      id: this.getState().posts.length + 1,
      name: 'my',
      message: this.getState().newMessage,
      likes: 0,
      photo: vad
    }
    this.getState().posts.push(newPost);
    this.getState().newMessage = '';
    this._subscriber();
    // console.log('addPost!!!!!!!', this.getState().posts)
  },

  updatePost(newMessage) {
    this.getState().newMessage = newMessage;
    // console.log(this.getState().newMessage, '!!!!!!!!!')
    this._subscriber();
  },

  _subscriber() {
    // console.log('')
  },

  subscribe(observer) {
    this._subscriber = observer;
  },
}

export default store;


