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
            display = '';
        }

        return(
            <div className="gems-table-content card collapsable"  style={{display:`${display}`}}>
                <label for="gems-table-ckeck" className="card-title-line">Gems or Art Objects</label>
                <input id="gems-table-ckeck" type="checkbox" defaultChecked></input>
                <div className="card-content">
                    {
                        rows.map((row, i) => {
                            return (
                                <div key={i} className="card card-bordered">
                                    <div className="gems-table-content-item card-content">
                                        <div>
                                            {row.value}
                                        </div>
                                        <div>
                                            {row.description}
                                        </div>
                                    </div>
                                    <div className="card-footer-circle">{row.quantity}</div>
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
