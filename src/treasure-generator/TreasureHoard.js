import Roll from './Roll.js';
import GemsOrArt from './GemsOrArt.js';
import MagicItems from './MagicItems.js';

var roll = new Roll();
var gemsOrArt = new GemsOrArt();
var magicItems = new MagicItems();

export class TreasureHoard {

	money(hoardLevel) {
		var coin = [];
			
		if (hoardLevel>16) {
			coin.push(0);
			coin.push(0);
			coin.push(roll.dice(6, 12)*1000);
			coin.push(roll.dice(6, 8)*1000);
		} else if (hoardLevel>10) {
			coin.push(0);
			coin.push(0);
			coin.push(roll.dice(6, 4)*1000);
			coin.push(roll.dice(6, 5)*100);
		} else if (hoardLevel>4) {
			coin.push(roll.dice(6, 2)*100);
			coin.push(roll.dice(6, 2)*1000);
			coin.push(roll.dice(6, 6)*100);
			coin.push(roll.dice(6, 3)*10);
		} else {
			coin.push(roll.dice(6, 6)*100);
			coin.push(roll.dice(6, 3)*100);
			coin.push(roll.dice(6, 2)*10);
			coin.push(0);
		}
		return coin;
	}
	
	gemsOrArt(hoardLevel, d100) {
		var items = [];
		var loot = gemsOrArt.getLoot(hoardLevel, d100);		
		var distinctLoot = new Set(loot);

		distinctLoot.forEach(item => {
			var quantity = this.countInArray(loot, item);
			
	 		if (quantity > 1) {
	 			items.push(quantity + " x " + item + " each");
	 		} else {
	 			items.push(item);
			}		
		});
				
		return items;
	}

	gemDetails(item) {
		var details = item.split(" x ");
		if (details.length < 2) {
			details.unshift("1");
		}

		var desc = details[1].split(" - ");
		var detail = {
			quantity: details[0],
			description: desc[0],
			value: desc[1]
		};

		return detail;
	}
	
	magicItems(hoardLevel, d100) {
		var items = [];
		var loot = magicItems.getLoot(hoardLevel, d100);
		var distinctLoot = new Set(loot);

		distinctLoot.forEach(item => {
			var quantity = this.countInArray(loot, item);
			
			if (quantity > 1) {
				items.push(quantity + " x " + item);
			} else {
				items.push(item);
			}
		});

		return items;
	}

	magicDetails(item) {
		var details = item.split(" x ");
		if (details.length < 2) {
			details.unshift("1");
		}
		
		return {
			quantity: details[0],
			description: details[1]
		};
	}

	countInArray(array, value) {
   		return array.reduce((count, item) => count + (item === value), 0);
	}
	
} export default TreasureHoard;