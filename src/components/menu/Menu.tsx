
export default function Menu() {
    return (
        <div className="dropdown text-end">
            <a  className="d-block link-dark text-decoration-none dropdown-toggle"
                href="#"                
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fs-4 bi bi-person-circle">
                </i>
            </a>
            <ul className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1">
                <li>
                    <a className="dropdown-item"
                        href="#">
                        Item 1
                        </a>
                </li>
                <li>
                    <a className="dropdown-item"
                        href="#">
                        Item 2
                        </a>
                </li>
                <li>
                    <a className="dropdown-item"
                        href="#">
                        Item 3
                        </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item"
                        href="#">
                        Salir
                        </a>
                </li>
            </ul>
        </div>
    )
}
