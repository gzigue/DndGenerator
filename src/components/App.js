import React from 'react';

import Header from './Header';
import MoneyTable from './MoneyTable';
import GemsTable from './GemsTable';
import MagicItemsTable from './MagicItemsTable';
import Roll from '../treasure-generator/Roll.js';

var roll = new Roll();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.changeLevel = this.changeLevel.bind(this);

        this.state = { 
            hoardLevel: -1,
            displayMoney : false,
            displayGems: false,
            displayMagic: false
        };
    }

    changeLevel(level) {
        this.setState({ 
            hoardLevel : level,
            displayMoney : true,
            displayGems : true,
            displayMagic : true
         });
    };

    render() {
        var d100 = roll.die(100);
        return (
            <div>
                <Header onButtonClick={this.changeLevel}/>
                <MoneyTable
                    hoardLevel={this.state.hoardLevel}
                    display={this.state.displayMoney}
                />
                <GemsTable
                    hoardLevel={this.state.hoardLevel}
                    d100={d100}
                    display={this.state.displayGems}
                />
                <MagicItemsTable
                    hoardLevel={this.state.hoardLevel}
                    d100={d100}
                    display={this.state.displayMagic}
                />
            </div>
        );
    };

}

export default App;
