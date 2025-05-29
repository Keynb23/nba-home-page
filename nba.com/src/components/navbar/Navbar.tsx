import './Navbar.css'




function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <img src="https://cdn.nba.com/logos/leagues/logo-nba.svg" alt="NBA Logo" />
            </div>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li className='navbar-item'>Games</li>
                    <li className='navbar-item'>Playoffs</li>
                    <li className='navbar-item'>News</li>
                    <li className='navbar-item'>Watch</li>
                    <li className='navbar-item'>Standings</li>
                    <li className='navbar-item'>Stats</li>
                    <li className='navbar-item'>Team</li>
                    <li className='navbar-item'>Players</li>
                    <li className='navbar-item'>Draft</li>
                    <li className='navbar-item'>Fantasy</li>
                    <li className='navbar-item'>BET</li>
                </ul>

                <div className="nav-right">
                    <div className="Search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="basketball-hover"
                        />
                    </div>



                    <div className="League-Pass">
                        League Pass
                    </div>
                    <div className="Login">
                        Login
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;