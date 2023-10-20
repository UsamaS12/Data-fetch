import { Link } from "react-router-dom";
import './index.css';

function App() {
    return (
        <>
            <h1 className="head">Data fetching using React query</h1>
            <p>Click on Products</p>
            <div className="sub-head">
                <Link to="/">Home</Link> <br />
                <Link to="/products">Products</Link>
            </div>
        </>
    );
}

export default App;