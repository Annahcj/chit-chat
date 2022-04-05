import './App.css';
import Posts from './components/Posts';

const posts = [
  {id: 1, title: 'My first topic', content: 'Some example content :D', likes: 1, dislikes: 1},
  {id: 2, title: 'My second topic', content: 'Some more example content :D', likes: 5, dislikes: 0},
]
function App() {
  return (
    <div className="App">
      Welcome to ChitChat
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
