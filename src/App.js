import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import Fetch from './components/Fetch';
import Conditional from './components/Conditional';
import Counter from './components/Counter';
import ImageShowHide from './components/ImageShowHide';
import ImageSideBar from './components/ImageSideBar';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';

function App() {
  // installation command = npm i react-router-dom
  const router = createBrowserRouter([
    {
      path:'' ,
      element:<ToDoList/>
    },
    {
      path:'todo' ,
      element:<ToDoList/>
    },
    {
      path:'fetch' ,
      element:<Fetch/>
    },
    {
      path:'conditional' ,
      element:<Conditional/>
    },
    {
      path:'counter' ,
      element:<Counter/>
    },
    {
      path:'Image-Show' ,
      element:<ImageShow />,
      children:[
        {
          path:'single',
          element:<ImageShowHide />
        },
        {
          path:'multiple',
          element:<ImageSideBar />
        },
        {
          path:'',
          element:<ImageSideBar />
        }
      ]
    }
  ])
  return (
    <div className="App">
      {/* <ToDoList/> */}
      {/* <Fetch/> */}
      {/* <Conditional/> */}
      {/* <Counter /> */}
      {/* <ImageShowHide/> */}
      {/* <ImageSideBar /> */}
      
      <RouterProvider router={router} />
    </div>
  );
}


function ImageShow()
{
  const navigate = useNavigate();

  return<div>
          <button
          onClick={()=>navigate('./single')}
          >Single</button>
          <button
          onClick={()=>navigate('./multiple')}
          >mutilple</button>
          <Outlet/>
        </div>
}

export default App;
