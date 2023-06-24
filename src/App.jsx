
import './App.css';
import { Sidebar } from './Pages/Sidebar';
import {Feed} from "./Pages/Feed"
import { Widgets } from "./Pages/Widgets"

function App() {
  return (
    <div className="App">
     {/* Sidebar */}
     <Sidebar />
     {/* FeedArea  */}
     <Feed />

     {/* RightWidget */}
     <Widgets />
    </div>
  );
}

export default App;
