import LikeButton from "./components/LikeButton";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="App">
      <Profile name="Muhammad Firman Hidayat" job="Front End Web Developer" />
      <LikeButton />
    </div>
  );
}

export default App;
