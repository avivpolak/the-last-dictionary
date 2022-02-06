import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div> 
        <Link to="/random"><button>Random Section</button></Link>
        <h1>dictionary</h1>
            <SearchBar /><br/>
        </div>
    );
}
