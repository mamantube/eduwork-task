import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/about/AboutMe.jsx';
import ContactMe from './components/contact/ContactMe.jsx';
import Header from "./components/header/Header.jsx"
import MyProject from './components/myproject/MyProject.jsx';
import "./index.css"


function App() {
  return (
    <body>
      <Header />
      <AboutMe />
      <MyProject />
      <ContactMe />
    </body>
  );
}

export default App;
