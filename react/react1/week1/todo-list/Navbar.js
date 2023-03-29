import './Navbar.css';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>To Do APP</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Create Todo</a>
            </div>
        </nav>

    );
}
 
export default Navbar;
