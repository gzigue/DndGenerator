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

            var row = [];
            for (var detail in itemDetails) {
                row.push(<td key={detail}>{itemDetails[detail]}</td>);
            }
            rows.push(<tr className="negative" key={item}>{row}</tr>);
        }

        if (rows.length > 0 && displayGems) {
            display = 'block';
        }

        return(
            <div className="ui segment" style={{display:`${display}`}}>
                <div className="ui red header">Gems or Art Objects</div>
                <table className="ui red table">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default GemsTable;