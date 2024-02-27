import ya from "./photos/ya.png";
import bob from "./photos/bob.jpg";
import gam from "./photos/gam.jpg";
import hello from "./photos/hello.jpg";
import lion from "./photos/lion.jpg";
import man from "./photos/man.png";
import vad from "./photos/vad.jpg";


const state = [
  {
    id: 1,
    name: "Alona",
    age: 25,
    posts: [
      {id: 1, message: "hello", likes: 10},
    ],
    newMessage:  '',
    photo: ya
  },
  {
    id: 2,
    name: "Vasia",
    age: 26,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: bob
  },
  {
    id: 3,
    name: "Mary",
    age: 27,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: gam
  },
  {
    id: 4,
    name: "John",
    age: 28,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: hello
  },
  {
    id: 5,
    name: "React",
    age: 29,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: lion
  },
  {
    id: 6,
    name: "Redux",
    age: 30,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: man
  },
  {
    id: 7,
    name: "Amir",
    age: 31,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: vad
  },
  {
    id: 8,
    name: "Alex",
    age: 32,
    posts: [
      {id: 1, message: "hello world", likes: 10},
    ],
    photo: man
  },
  {
    id: 9,
    name: "Boris",
    age: 33,
    posts: [
    ],
    photo: vad
  }
]

let rerenderEntireTrie = () => {
  console.log("qwerty")
}

export const addPost = (userId) => {

  const currentUser = state.filter(user => user.id === userId);

  const newPost = {
    id: currentUser[0].posts.length + 1,
    message: currentUser[0].newMessage,
    likes: 0
  }

  currentUser[0].posts.push(newPost);
  currentUser[0].newMessage = '';
  rerenderEntireTrie(state);
}

export const updatePost = (newMessage, userId) => {

  const currentUser = state.filter(user => user.id === userId);
  currentUser[0].newMessage = newMessage;
  rerenderEntireTrie(state);
}

export const subscribe = (observer) => {
  rerenderEntireTrie = observer;
}

export default state;