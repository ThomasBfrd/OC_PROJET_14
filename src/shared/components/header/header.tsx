import "./header.scss";
import {Link} from "react-router-dom";

const Header = () => {
    const menu: Array<{ title: string, path: string }> = [
        {
            title: "Employee List",
            path: "/employee-list"
        },
        {
            title: "Add Employee",
            path: "/add-employee"
        }
    ];

    return (
        <header className="header-container">
            <div className="header-content">
                <Link to="/" className="header-logo">
                    <h1 className="header-title">HRnet</h1>
                </Link>
                <nav>
                    <ul className="header-menu-list">
                        {menu.map((item: { title: string, path: string }, index: number) => {
                            return (
                                <li className="header-menu-list-item link" key={index}>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="header-menu-list-item profile-picture">
                            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
                                 alt="profile-picture"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;