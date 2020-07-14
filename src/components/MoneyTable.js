import React from 'react';
import TreasureHoard from '../treasure-generator/TreasureHoard';

class MoneyTable extends React.Component {
    
    render() {
        var level = this.props.hoardLevel;
        var hoard = new TreasureHoard();
        var money = hoard.money(level);
        var coins = [];

        for (var m in money) {
            coins.push(<td key={m}>{money[m]}</td>);
        }

        var display='none';
        if (coins.length > 0 && level >= 0) {
            display = 'block';
        }
        
        return(
            <div className="card" style={{display:`${display}`}}>
                <div className="ui yellow header">Money</div>
                <table className="ui yellow table">
                    <thead>
                        <tr>
                            <th>Copper Pieces</th>
                            <th>Silver Pieces</th>
                            <th>Gold Pieces</th>
                            <th>Platinum Pieces</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="warning">
                            {coins}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default MoneyTable;