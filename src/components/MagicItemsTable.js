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
            rows.push(itemDetails)
        }

        if (rows.length > 0 && displayMagic) {
            display = 'block';
        }

        return(
            <div className="magic-items-table-content card">
                <div className="card-title-line">Magic Items</div>
                <div className="magic-items-table-content-items card-content">
                    {
                        rows.map((row, i) => {
                            return (
                                <div key={i} className="magic-items-table-content-item card">
                                    <div className="item-quantity card-title">
                                        {row.quantity}
                                    </div>
                                    <div className="item-content card-content">
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

export default MagicItemsTable;