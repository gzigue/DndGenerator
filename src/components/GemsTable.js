import React from 'react';
import TreasureHoard from '../treasure-generator/TreasureHoard';

class GemsTable extends React.Component {

    render() {
        var level = this.props.hoardLevel;
        var d100 = this.props.d100;
        var hoard = new TreasureHoard();
        var gemsOrArt = hoard.gemsOrArt(level, d100);
        var rows = [];
        var display = 'none';

        var displayGems = this.props.display;

        for (var item in gemsOrArt) {
            var itemDetails = hoard.gemDetails(gemsOrArt[item]);

            rows.push(itemDetails);
        }


        if (rows.length > 0 && displayGems) {
            display = 'block';
        }

        return(
            <div className="gems-table-content card">
                <div className="card-title-line">Gems or Art Objects</div>
                <div className="gems-table-content-items card-content">
                    {
                        rows.map((row, i) => {     
                            return (
                                <div key={i} className="gems-table-content-item card">
                                    <div className="card-title">
                                        <span className="item-quantity">{row.quantity}</span>
                                        <span className="item-description">
                                            <div>{row.value}</div>
                                        </span>
                                    </div>
                                    <div className="gems-table-content-item-content card-content">
                                        {row.description}
                                    </div>
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
        );
    };
}

export default GemsTable;