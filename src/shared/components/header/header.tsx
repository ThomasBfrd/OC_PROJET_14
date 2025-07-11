import "./header.scss";

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <h1 className="header-title">HRnet</h1>
                <menu>
                    <ul className="header-menu-list">
                        <li className="header-menu-list-item link">Dashboard</li>
                        <li className="header-menu-list-item link">Employees</li>
                        <li className="header-menu-list-item link">Account</li>
                        <li className="header-menu-list-item profile-picture">
                            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
                                 alt="profile-picture"/>
                        </li>
                    </ul>
                </menu>
            </div>
        </header>
    );
};

export default Header;