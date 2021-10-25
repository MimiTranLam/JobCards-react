import React from "react"

const Navbar = () => {
    return <nav>
        <div id="nav-container">
            <form id="search-form">
                <input placeholder="Search job..."></input>
                <button id="search-btn" type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
    </nav>
}

export default Navbar