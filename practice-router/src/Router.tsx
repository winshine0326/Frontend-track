import { Link } from 'react-router-dom';


export default function Router() {
    return (
        <>
            <nav className="topnav">
                <Link to="/">Home</Link>
                <Link to="/card">Card</Link>
                <Link to="/cardList">CardList</Link>
                <Link to="/about">about</Link>
            </nav>
        </>
    );
}