import React from 'react';
import TreasureHoard from '../treasure-generator/TreasureHoard';

class MoneyTable extends React.Component {
    
    render() {
        let titles = ['Copper Pieces', 'Silver Pieces', 'Gold Pieces', 'Platinum Pieces']
        var level = this.props.hoardLevel;
        var hoard = new TreasureHoard();
        var money = hoard.money(level);
        var coins = [];

        for (var m in money) {
            coins.push(money[m]);
        }

        var display='none';
        if (coins.length > 0 && level >= 0) {
            display = 'block';
        }
        
        return(
            <div className="money-table-content card">
                <div className="card-title-line">Money</div>
                <div className="money-table-content-items card-content">
                    {
                        coins.map((coin, i) => {     
                            return (
                                <div key={i} className="money-table-content-item card">
                                    <div className="money-table-content-item-content card-content">
                                        {titles[i]}
                                    </div>
                                    <div className="card-footer-circle">{coin}</div>
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
        );
    };
}

export default MoneyTable;