import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            {/* starts from here */}
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News-Catchy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/business">Business</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/general">General</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/health">Health</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/science">Science</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>  </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode"}`}</label>
                        </div>
                    </div>

                </div>
            </nav>
            {/*End Here */}
        </div>
    )
}
export default Navbar
