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
            display = '';
        }

        return(
            <div className="magic-items-table-content card collapsable" style={{display:`${display}`}}>
            <label for="magic-items-table-ckeck" className="card-title-line">Magic Items</label>
            <input id="magic-items-table-ckeck" type="checkbox" defaultChecked></input>
                <div className="card-content">
                    {
                        rows.map((row, i) => {
                            return (
                                <div key={i} className="magic-items-table-content-item card card-bordered">
                                    <div className="item-content card-content">
                                        {row.description}
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

export default MagicItemsTable;