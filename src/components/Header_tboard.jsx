import React from 'react';

const Header_tboard = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto">T-board</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="">Help</a>
            </nav>
            <a className="btn btn-outline-primary mx-1" href="">Log Out</a>
            <a className="btn btn-outline-primary mr-2" href="">User</a>
        </div>
    );
}

export default Header_tboard;
