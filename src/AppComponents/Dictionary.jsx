import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Main from "./DictionaryComponents/Main";

export default function Dictionary() {
    return (
        <div>
           <Link to="/random"><button>Random Section</button></Link>
           <Link to="/"><button>Home</button></Link><br />
            <SearchBar />
            <Main />
        </div>
    );
}
