import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Hoard Level</h1>
                <div className="header-cards-container">
                    <div className="item card clickable" 
                        onClick={(e) => this.props.onButtonClick(0)}>
                        <div className="card-content">0-4</div>
                    </div>
                    <div className="item card clickable" 
                        onClick={(e) => this.props.onButtonClick(5)}>
                        <div className="card-content">5-10</div>
                    </div>
                    <div className="item card clickable" 
                        onClick={(e) => this.props.onButtonClick(11)}>
                        <div className="card-content">11-16</div>
                    </div>
                    <div className="item card clickable" 
                        onClick={(e) => this.props.onButtonClick(17)}>
                        <div className="card-content">17+</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;