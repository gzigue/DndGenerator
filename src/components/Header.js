import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Hoard Level</h1>
                <div className="header-cards-container">
                    <div className="card clickable" onClick={(e) => this.props.onButtonClick(0)}>0-4</div>
                    <div className="card clickable" onClick={(e) => this.props.onButtonClick(5)}>5-10</div>
                    <div className="card clickable" onClick={(e) => this.props.onButtonClick(11)}>11-16</div>
                    <div className="card clickable" onClick={(e) => this.props.onButtonClick(17)}>17+</div>
                </div>
            </div>
        );
    }
}

export default Header;