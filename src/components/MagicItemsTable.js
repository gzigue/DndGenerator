import React from 'react';
import TreasureHoard from '../treasure-generator/TreasureHoard';

class MagicItemsTable extends React.Component {

    render() {
        var level = this.props.hoardLevel;
        var d100 = this.props.d100;
        var hoard = new TreasureHoard();
        var magicItems = hoard.magicItems(level, d100);
        var rows = [];
        var display = 'none';

        var displayMagic = this.props.display;

        for (var item in magicItems) {
            var itemDetails = hoard.magicDetails(magicItems[item]);

            var row = [];
            for (var detail in itemDetails) {
                row.push(<td key={detail}>{itemDetails[detail]}</td>);
            }
            rows.push(<tr className="positive" key={item}>{row}</tr>);
        }

        if (rows.length > 0 && displayMagic) {
            display = 'block';
        }

        return(
            <div className="ui segment" style={{display:`${display}`}}>
                <div className="ui green header">Magic Items</div>
                <table className="ui green table">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
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

export default MagicItemsTable;