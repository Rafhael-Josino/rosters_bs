import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App'
import './style/index.css';
import './style/roster.css';

const router = createBrowserRouter([{
    path: "/*",
    element: <App />
}]);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<RouterProvider router={router} />);