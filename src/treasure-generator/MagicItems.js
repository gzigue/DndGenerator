import Roll from './Roll.js';

var roll = new Roll();

class MagicItems {

	getLoot(hoardLevel, d100) {
		var loot = [];
        var qty;
        var i;
		
		if (hoardLevel >= 17) {
			if (d100 >= 96) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableI());
			} else if (d100 >= 91) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableI());
			} else if (d100 >= 86) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableI());
			} else if (d100 >= 81) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableI());
			} else if (d100 >= 79) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 77) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 75) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 73) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 72) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 71) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 70) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 69) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 64) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableE());
			} else if (d100 >= 59) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableE());
			} else if (d100 >= 53) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableE());
			} else if (d100 >= 47) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableE());
			} else if (d100 >= 39) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 31) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 23) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 15) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 12) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 9) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 6) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 3) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			}
			
		} else if (hoardLevel >= 11) {
			if (d100 >= 99) {
				loot.push(this.tableI());
			} else if (d100 >= 97) {
				loot.push(this.tableI());
			} else if (d100 >= 95) {
				loot.push(this.tableI());
			} else if (d100 >= 93) {
				loot.push(this.tableI());
			} else if (d100 >= 91) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 89) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 86) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 83) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableH());
			} else if (d100 >= 81) {
				loot.push(this.tableF());
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 79) {
				loot.push(this.tableF());
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 77) {
				loot.push(this.tableF());
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 75) {
				loot.push(this.tableF());
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 73) {
				loot.push(this.tableE());
			} else if (d100 >= 71) {
				loot.push(this.tableE());
			} else if (d100 >= 69) {
				loot.push(this.tableE());
			} else if (d100 >= 67) {
				loot.push(this.tableE());
			} else if (d100 >= 63) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 59) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 55) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 51) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableD());
			} else if (d100 >= 46) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 41) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 36) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 30) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 27) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableA());
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 24) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableA());
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 20) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableA());
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 16) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableA());
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			}
			
		} else if (hoardLevel >= 5) {
			if (d100 === 100) {
				loot.push(this.tableH());
			} else if (d100 === 99) {
				loot.push(this.tableH());
			} else if (d100 >= 97) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 95) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableG());
			} else if (d100 >= 92) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableF());
			} else if (d100 >= 89) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableF());
			} else if (d100 >= 85) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableF());
			} else if (d100 >= 81) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableF());
			} else if (d100 === 80) {
				loot.push(this.tableD());
			} else if (d100 >= 79) {
				loot.push(this.tableD());
			} else if (d100 >= 77) {
				loot.push(this.tableD());
			} else if (d100 >= 75) {
				loot.push(this.tableD());
			} else if (d100 >= 73) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 70) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 67) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 64) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 60) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 55) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 50) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 45) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 41) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			} else if (d100 >= 37) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			} else if (d100 >= 33) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			} else if (d100 >= 29) {
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			}
						
		} else {
			if (d100 === 100) {
				loot.push(this.tableG());
			} else if (d100 >= 98){
				loot.push(this.tableG());
			} else if (d100 >= 93){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableF());
			} else if (d100 >= 86){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableF());
			} else if (d100 >= 81){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 79){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 76){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableC());
			} else if (d100 >= 71){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 66){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 61){
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.tableB());
			} else if (d100 >= 53){
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			} else if (d100 >= 45){
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			} else if (d100 >= 37){
				qty = roll.die(6);
				for (i=0; i<qty; i++) loot.push(this.tableA());
			}
		}
		
		return loot;
	}
	
	tableA() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Driftglobe";
		} else if (d100 >= 99) {
			return "Bag of holding";
		} else if (d100 >= 95) {
			return "Potion of greater healing";
		} else if (d100 >= 91) {
			return "Spell scroll (2nd level): " + this.spell2();
		} else if (d100 >= 71) {
			return "Spell scroll (1st level): " + this.spell1();
		} else if (d100 >= 61) {
			return "Potion of climbing";
		} else if (d100 >= 51) {
			return "Spell scroll (cantrip): " + this.cantrip();
		}
		return "Potion of healing";
	}
	
	tableB() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Wand of secrets";
		} else if (d100 >= 99) {
			return "Wand of magic detection";
		} else if (d100 >= 98) {
			return "Saddle of the cavalier";
		} else if (d100 >= 97) {
			return "Rope of climbing";
		} else if (d100 >= 96) {
			return "Robe of useful items";
		} else if (d100 >= 95) {
			return "Ring of swimming";
		} else if (d100 >= 94) {
			return "Potion of poison";
		} else if (d100 >= 93) {
			return "Mithral armor (" + this.metalArmor() +")";
		} else if (d100 >= 92) {
			return "Mariner's armor (" + this.armor() +")";
		} else if (d100 >= 91) {
			return "Lantern of revealing";
		} else if (d100 >= 90) {
			return "Immovable rod";
		} else if (d100 >= 89) {
			return "Helm of comprehending languages";
		} else if (d100 >= 88) {
			return "Goggles of night";
		} else if (d100 >= 87) {
			return "Driftglobe";
		} else if (d100 >= 86) {
			return "Cloak of the manta ray";
		} else if (d100 >= 85) {
			return "Cap of water breathing";
		} else if (d100 >= 84) {
			return "Alchemy jug";
		} else if (d100 >= 82) {
			return "Philter of love";
		} else if (d100 >= 80) {
			return "Elemental gem";
		} else if (d100 >= 78) {
			return "Dust of sneezing and choking";
		} else if (d100 >= 76) {
			return "Dust of dryness";
		} else if (d100 >= 74) {
			return "Dust of disappearance";
		} else if (d100 >= 71) {
			return "Oil of slipperiness";
		} else if (d100 >= 68) {
			return "Keoghtom's ointment";
		} else if (d100 >= 65) {
			return "Bag of holding";
		} else if (d100 >= 60) {
			return "Spell scroll (3rd level): " + this.spell3();
		} else if (d100 >= 55) {
			return "Spell scroll (2nd level): " + this.spell2();
		} else if (d100 >= 50) {
			return "Potion of water breathing";
		} else if (d100 >= 45) {
			return "Potion of growth";
		} else if (d100 >= 40) {
			return "Potion of hill giant strength";
		} else if (d100 >= 35) {
			return "Potion of animal friendship";
		} else if (d100 >= 30) {
			return "Ammunition, +1 (" + this.ammunition() + ")";
		} else if (d100 >= 23) {
			return "Potion of resistance (" + this.resistanceType() + ")";
		} else if (d100 >= 16) {
			return "Potion of fire breath";
		}
		return "Potion of greater healing";
	}
	
	tableC() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Sending Stones";
		} else if (d100 >= 99) {
			return "Periapt of health";
		} else if (d100 >= 98) {
			return "Necklace of fireballs";
		} else if (d100 >= 97) {
			return "Horseshoes of speed";
		} else if (d100 >= 96) {
			return "Heward's handy haversack";
		} else if (d100 >= 95) {
			return "Folding boat";
		} else if (d100 >= 94) {
			return "Eyes of minute seeing";
		} else if (d100 >= 93) {
			return "Decanter of endless water";
		} else if (d100 >= 92) {
			return "Chime of opening";
		} else if (d100 >= 90) {
			return "Bead of force";
		} else if (d100 >= 88) {
			return "Bag of beans";
		} else if (d100 >= 85) {
			return "Scroll of protection";
		} else if (d100 >= 82) {
			return "Quaal's feather token";
		} else if (d100 >= 79) {
			return "Potion of fire giant strength";
		} else if (d100 >= 76) {
			return "Oil of etherealness";
		} else if (d100 >= 73) {
			return "Elixir of health";
		} else if (d100 >= 68) {
			return "Spell scroll (5thlevel): " + this.spell5();
		} else if (d100 >= 63) {
			return "Potion of mind reading";
		} else if (d100 >= 58) {
			return "Potion of invulnerability";
		} else if (d100 >= 53) {
			return "Potion of heroism";
		} else if (d100 >= 48) {
			return "Potion of stone giant strength";
		} else if (d100 >= 43) {
			return "Potion of frost giant strength";
		} else if (d100 >= 38) {
			return "Potion of gaseous form";
		} else if (d100 >= 33) {
			return "Potion of diminution";
		} else if (d100 >= 28) {
			return "Potion of clairvoyance";
		} else if (d100 >= 23) {
			return "Ammunition, +2 (" + this.ammunition() + ")";
		} else if (d100 >= 16) {
			return "Spell scroll (4thlevel): " + this.spell4();
		}
		return "Potion of superior healing";
	}
	
	tableD() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Portable hole";
		} else if (d100 >= 99) {
			return "Bag of devouring";
		} else if (d100 >= 96) {
			return "Nolzur's marvelous pigments";
		} else if (d100 >= 93) {
			return "Horseshoes of a zephyr";
		} else if (d100 >= 88) {
			return "Spell scroll (8thlevel): " + this.spell8();
		} else if (d100 >= 83) {
			return "Potion of vitality";
		} else if (d100 >= 78) {
			return "Potion of longevity";
		} else if (d100 >= 73) {
			return "Potion of cloud giant strength";
		} else if (d100 >= 68) {
			return "Potion of flying";
		} else if (d100 >= 63) {
			return "Oil of sharpness";
		} else if (d100 >= 58) {
			return "Ammunition, +3 (" + this.ammunition() + ")";
		} else if (d100 >= 51) {
			return "Spell scroll (7thlevel): " + this.spell7();
		} else if (d100 >= 41) {
			return "Spell scroll (6thlevel): " + this.spell6();
		} else if (d100 >= 31) {
			return "Potion of speed";
		} else if (d100 >= 21) {
			return "Potion of invisibility";
		}
		return "Potion of supreme healing";
	}
	
	tableE() {
		var d100 = roll.die(100);
		
		if (d100 >= 99) {
			return "Sovereign glue";
		} else if (d100 >= 94) {
			return "Arrow of slaying";
		} else if (d100 >= 86) {
			return "Universal solvent";
		} else if (d100 >= 71) {
			return "Spell scroll (9th level): " + this.spell9();
		} else if (d100 >= 56) {
			return "Potion of supreme healing";
		} else if (d100 >= 31) {
			return "Potion of storm giant strength";
		}
		return "Spell scroll (8thlevel): " + this.spell8();
	}
	
	tableF() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Winged boots";
		} else if (d100 >= 99) {
			return "Wind fan";
		} else if (d100 >= 98) {
			return "Stone of good luck";
		} else if (d100 >= 97) {
			return "Quiver of Ehlonna";
		} else if (d100 >= 96) {
			return "Ring of water walking";
		} else if (d100 >= 95) {
			return "Ring of warmth";
		} else if (d100 >= 94) {
			return "Ring of mind shielding";
		} else if (d100 >= 93) {
			return "Ring of jumping";
		} else if (d100 >= 92) {
			return "Pipes of the sewers";
		} else if (d100 >= 91) {
			return "Pipes of haunting";
		} else if (d100 >= 90) {
			return "Periapt of wound closure";
		} else if (d100 >= 89) {
			return "Necklace of adaptation";
		} else if (d100 >= 88) {
			return "Medallion of thoughts";
		} else if (d100 >= 87) {
			return "Instrument of the bards (Mac-Fuimidh cittern)";
		} else if (d100 >= 86) {
			return "Instrument of the bards (Fochlucan bandore)";
		} else if (d100 >= 85) {
			return "Instrument of the bards (Doss lute)";
		} else if (d100 >= 84) {
			return "Helm of telepathy";
		} else if (d100 >= 83) {
			return "Headband of intellect";
		} else if (d100 >= 82) {
			return "Gloves of thievery";
		} else if (d100 >= 81) {
			return "Gloves of swimming and climbing";
		} else if (d100 >= 80) {
			return "Gloves of missile snaring";
		} else if (d100 >= 79) {
			return "Gem of brightness";
		} else if (d100 >= 78) {
			return "Figurine of wondrous power (silver raven)";
		} else if (d100 >= 77) {
			return "Eyes of the eagle";
		} else if (d100 >= 76) {
			return "Eyes of charming";
		} else if (d100 >= 75) {
			return "Eversmoking bottle";
		} else if (d100 >= 74) {
			return "Deck of illusions";
		} else if (d100 >= 73) {
			return "Circlet of blasting";
		} else if (d100 >= 72) {
			return "Boots of the winterlands";
		} else if (d100 >= 71) {
			return "Bag of tricks (tan)";
		} else if (d100 >= 70) {
			return "Bag of tricks (rust)";
		} else if (d100 >= 69) {
			return "Bag of tricks (gray)";
		} else if (d100 >= 68) {
			return "Adamantine armor (scale mail)";
		} else if (d100 >= 67) {
			return "Adamantine armor (chain shirt)";
		} else if (d100 >= 66) {
			return "Adamantine armor (chain mail)";
		} else if (d100 >= 64) {
			return "Weapon of warning (" + this.weapon() + ")";
		} else if (d100 >= 62) {
			return "Wand of web";
		} else if (d100 >= 60) {
			return "Wand of the war mage, + 1";
		} else if (d100 >= 58) {
			return "Wand of magic missiles";
		} else if (d100 >= 56) {
			return "Trident of fish command";
		} else if (d100 >= 54) {
			return "Sword of vengeance";
		} else if (d100 >= 52) {
			return "Staff of the python";
		} else if (d100 >= 50) {
			return "Staff of the adder";
		} else if (d100 >= 48) {
			return "Slippers of spider climbing";
		} else if (d100 >= 46) {
			return "Rod of the pact keeper, + 1";
		} else if (d100 >= 44) {
			return "Pearl of power";
		} else if (d100 >= 42) {
			return "Javelin of lightning";
		} else if (d100 >= 40) {
			return "Hat of disguise";
		} else if (d100 >= 38) {
			return "Gauntlets of ogre power";
		} else if (d100 >= 36) {
			return "Cloak of protection";
		} else if (d100 >= 34) {
			return "Cloak of elvenkind";
		} else if (d100 >= 32) {
			return "Broom of flying";
		} else if (d100 >= 30) {
			return "Brooch of shielding";
		} else if (d100 >= 28) {
			return "Bracers of archery";
		} else if (d100 >= 26) {
			return "Boots of striding and springing";
		} else if (d100 >= 24) {
			return "Boots of elvenkind";
		} else if (d100 >= 22) {
			return "Amulet of proof against detection and location";
		} else if (d100 >= 19) {
			return "Sentinel shield";
		} else if (d100 >= 16) {
			return "Shield,+ 1";
		}
		return "Weapon, +1 (" + this.weapon() + ")";
	}
	
	tableG() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Wings of flying";
		} else if (d100 >= 99) {
			return "Wand of wonder";
		} else if (d100 >= 98) {
			return "Wand of the war mage, +2";
		} else if (d100 >= 97) {
			return "Wand of paralysis";
		} else if (d100 >= 96) {
			return "Wand of lightning bolts";
		} else if (d100 >= 95) {
			return "Wand of fireballs";
		} else if (d100 >= 94) {
			return "Wand of fear";
		} else if (d100 >= 93) {
			return "Wand of enemy detection";
		} else if (d100 >= 92) {
			return "Wand of binding";
		} else if (d100 >= 91) {
			return "Vicious weapon (" + this.weapon() + ")";
		} else if (d100 >= 90) {
			return "Tentacle rod";
		} else if (d100 >= 89) {
			return "Sword of wounding";
		} else if (d100 >= 88) {
			return "Sword of life stealing";
		} else if (d100 >= 87) {
			return "Sun blade";
		} else if (d100 >= 86) {
			return "Stone of controlling earth elementals";
		} else if (d100 >= 85) {
			return "Staff of withering";
		} else if (d100 >= 84) {
			return "Staff of the woodlands";
		} else if (d100 >= 83) {
			return "Staff of swarming insects";
		} else if (d100 >= 82) {
			return "Staff of healing";
		} else if (d100 >= 81) {
			return "Staff of charming";
		} else if (d100 >= 80) {
			return "Shield of missile attraction";
		} else if (d100 >= 79) {
			return "Shield, +2";
		} else if (d100 >= 78) {
			return "Armor of resistance ("+ this.resistanceType() + ") (scale mail)";
		} else if (d100 >= 77) {
			return "Armor, +1 (scale mail)";
		} else if (d100 >= 76) {
			return "Rope of entanglement";
		} else if (d100 >= 75) {
			return "Rod of the pact keeper, +2";
		} else if (d100 >= 74) {
			return "Rod of rulership";
		} else if (d100 >= 73) {
			return "Robe of eyes";
		} else if (d100 >= 72) {
			return "Ring of X-ray vision";
		} else if (d100 >= 71) {
			return "Ring of the ram";
		} else if (d100 >= 70) {
			return "Ring of spell storing";
		} else if (d100 >= 69) {
			return "Ring of resistance (" + this.resistanceType() + ")";
		} else if (d100 >= 68) {
			return "Ring of protection";
		} else if (d100 >= 67) {
			return "Ring of free action";
		} else if (d100 >= 66) {
			return "Ring of feather falling";
		} else if (d100 >= 65) {
			return "Ring of evasion";
		} else if (d100 >= 64) {
			return "Ring of animal influence";
		} else if (d100 >= 63) {
			return "Periapt of proof against poison";
		} else if (d100 >= 62) {
			return "Necklace of prayer beads";
		} else if (d100 >= 61) {
			return "Mantle of spell resistance";
		} else if (d100 >= 60) {
			return "Mace of terror";
		} else if (d100 >= 59) {
			return "Mace of smiting";
		} else if (d100 >= 58) {
			return "Mace of disruption";
		} else if (d100 >= 57) {
			return "Armor of resistance (" + this.resistanceType() + ") (leather)";
		} else if (d100 >= 56) {
			return "Armor, + 1 (leather)";
		} else if (d100 >= 55) {
			return "Iron bands of Bilarro";
		} else if (d100 >= 54) {
			return "loun stone (sustenance)";
		} else if (d100 >= 53) {
			return "loun stone (reserve)";
		} else if (d100 >= 52) {
			return "loun stone (protection)";
		} else if (d100 >= 51) {
			return "loun stone (awareness)";
		} else if (d100 >= 50) {
			return "Instrument ofthe bards (Cii lyre)";
		} else if (d100 >= 49) {
			return "Instrument of the bards (Canaithmandolin)";
		} else if (d100 >= 48) {
			return "Horn of Valhalla (silver or brass)";
		} else if (d100 >= 47) {
			return "Horn of blasting";
		} else if (d100 >= 46) {
			return "Helm of teleportation";
		} else if (d100 >= 45) {
			return "Clamoured studded leather";
		} else if (d100 >= 44) {
			return "Giant slayer";
		} else if (d100 >= 43) {
			return "Gem of seeing";
		} else if (d100 >= 42) {
			return "Flame tongue";
		} else if (d100 >= 41) {
			return "Elven chain";
		} else if (d100 >= 40) {
			return "Dragon slayer";
		} else if (d100 >= 39) {
			return "Dimensional shackles";
		} else if (d100 >= 38) {
			return "Dagger of venom";
		} else if (d100 >= 37) {
			return "Daern's instant fortress";
		} else if (d100 >= 36) {
			return "Cube of force";
		} else if (d100 >= 35) {
			return "Cloak of the bat";
		} else if (d100 >= 34) {
			return "Cloak of displacement";
		} else if (d100 >= 33) {
			return "Armor,+ 1 (chain shirt)";
		} else if (d100 >= 32) {
			return "Armor of resistance (" + this.resistanceType() + ") (chain shirt)";
		} else if (d100 >= 31) {
			return "Armor of resistance (" + this.resistanceType() + ") (chain mail)";
		} else if (d100 >= 30) {
			return "Armor, +1 (chain mail)";
		} else if (d100 >= 29) {
			return "Censer of controlling air elementals";
		} else if (d100 >= 28) {
			return "Cape of the mountebank";
		} else if (d100 >= 27) {
			return "Brazier of commanding fire elementals";
		} else if (d100 >= 26) {
			return "Bracers of defense";
		} else if (d100 >= 25) {
			return "Bowl of commanding water elementals";
		} else if (d100 >= 24) {
			return "Boots of speed";
		} else if (d100 >= 23) {
			return "Boots of levitation";
		} else if (d100 >= 22) {
			return "Berserker axe";
		} else if (d100 >= 21) {
			return "Belt of hill giant strength";
		} else if (d100 >= 20) {
			return "Belt of dwarvenkind";
		} else if (d100 >= 19) {
			return "Arrow-catching shield";
		} else if (d100 >= 18) {
			return "Armor of vulnerability " + this.resistanceAndVulnerability();
		} else if (d100 >= 17) {
			return "Amulet of health";
		} else if (d100 >= 16) {
			return "Adamantine armor (splint)";
		} else if (d100 >= 15) {
			return "Adamantine armor (breastplate)";
		} else if (d100 >= 12) {
			return this.figurineOfWondrousPower();
		}
		return "Weapon, +2 (" + this.weapon() + ")";
	}
	
	tableH() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Tome of understanding";
		} else if (d100 >= 99) {
			return "Tome of leadership and influence";
		} else if (d100 >= 98) {
			return "Tome of clear thought";
		} else if (d100 >= 97) {
			return "Armor of resistance (" + this.resistanceType() + ") (studded leather)";
		} else if (d100 >= 96) {
			return "Armor, + 1 studded leather";
		} else if (d100 >= 95) {
			return "Armor of resistance (" + this.resistanceType() + ") (splint)";
		} else if (d100 >= 94) {
			return "Armor, + 1 splint";
		} else if (d100 >= 93) {
			return "Spellguard shield";
		} else if (d100 >= 92) {
			return "Armor, +2 scale mail";
		} else if (d100 >= 91) {
			return "Oathbow";
		} else if (d100 >= 90) {
			return "Nine lives stealer";
		} else if (d100 >= 89) {
			return "Mirror of life trapping";
		} else if (d100 >= 88) {
			return "Manual of quickness of action";
		} else if (d100 >= 87) {
			return "Manual of golems";
		} else if (d100 >= 86) {
			return "Manual of gainful exercise";
		} else if (d100 >= 85) {
			return "Manual of bodily health";
		} else if (d100 >= 84) {
			return "Armor, +2 leather";
		} else if (d100 >= 83) {
			return "loun stone (strength)";
		} else if (d100 >= 82) {
			return "loun stone (leadership)";
		} else if (d100 >= 81) {
			return "loun stone (intellect)";
		} else if (d100 >= 80) {
			return "loun stone (insight)";
		} else if (d100 >= 79) {
			return "loun stone (fortitude)";
		} else if (d100 >= 78) {
			return "loun stone (agility)";
		} else if (d100 >= 77) {
			return "loun stone (absorption)";
		} else if (d100 >= 76) {
			return "Instrument of the bards (Anstruth harp)";
		} else if (d100 >= 75) {
			return "Horn of Valhalla (bronze)";
		} else if (d100 >= 74) {
			return "Helm of brilliance";
		} else if (d100 >= 73) {
			return "Frost brand";
		} else if (d100 >= 72) {
			return "Figurine of wondrous power (obsidian steed)";
		} else if (d100 >= 71) {
			return "Efreeti bottle";
		} else if (d100 >= 70) {
			return "Dwarven thrower";
		} else if (d100 >= 69) {
			return "Dwarven plate";
		} else if (d100 >= 68) {
			return "Dragon scale mail";
		} else if (d100 >= 67) {
			return "Demon armor";
		} else if (d100 >= 66) {
			return "Dancing sword";
		} else if (d100 >= 65) {
			return "Cloak of arachnida";
		} else if (d100 >= 64) {
			return "Armor, +2 chain shirt";
		} else if (d100 >= 63) {
			return "Armor, +2 chain mail";
		} else if (d100 >= 62) {
			return "Candle of invocation";
		} else if (d100 >= 61) {
			return "Armor of resistance (" + this.resistanceType() + ") (breastplate)";
		} else if (d100 >= 60) {
			return "Armor, + 1 breastplate";
		} else if (d100 >= 59) {
			return "Belt of frost (or stone) giant strength";
		} else if (d100 >= 58) {
			return "Belt of fire giant strength";
		} else if (d100 >= 57) {
			return "Animated shield";
		} else if (d100 >= 56) {
			return "Adamantine armor (plate)";
		} else if (d100 >= 55) {
			return "Adamantine armor (half plate)";
		} else if (d100 >= 53) {
			return "Wand of the war mage, + 3";
		} else if (d100 >= 51) {
			return "Wand of polymorph";
		} else if (d100 >= 49) {
			return "Sword of sharpnes";
		} else if (d100 >= 47) {
			return "Staff of thunder and lightning";
		} else if (d100 >= 45) {
			return "Staff of striking";
		} else if (d100 >= 43) {
			return "Staff of power";
		} else if (d100 >= 41) {
			return "Staff of frost";
		} else if (d100 >= 39) {
			return "Staff of fire";
		} else if (d100 >= 37) {
			return "Shield, +3";
		} else if (d100 >= 35) {
			return "Scimitar of speed";
		} else if (d100 >= 33) {
			return "Rod of the pact keeper, +3";
		} else if (d100 >= 31) {
			return "Rod of security";
		} else if (d100 >= 29) {
			return "Rod of alertness";
		} else if (d100 >= 27) {
			return "Rod of absorption";
		} else if (d100 >= 25) {
			return "Robe of stars";
		} else if (d100 >= 23) {
			return "Robe of scintillating colors";
		} else if (d100 >= 21) {
			return "Ring of telekinesis";
		} else if (d100 >= 19) {
			return "Ring of shooting stars";
		} else if (d100 >= 17) {
			return "Ring of regeneration";
		} else if (d100 >= 15) {
			return "Crystal ball (very rare version)";
		} else if (d100 >= 13) {
			return "Carpet of flying";
		} else if (d100 >= 11) {
			return "Amulet of the planes";
		}
		return "Weapon, +3 (" + this.weapon() + ")";
	}
	
	tableI() {
		var d100 = roll.die(100);
		
		if (d100 >= 100) {
			return "Tome of the stilled tongue";
		} else if (d100 >= 99) {
			return "Talisman of ultimate evil";
		} else if (d100 >= 98) {
			return "Talisman of the sphere";
		} else if (d100 >= 97) {
			return "Talisman of pure good";
		} else if (d100 >= 96) {
			return "Sphere of annihilation";
		} else if (d100 >= 95) {
			return "Ring of water elemental command";
		} else if (d100 >= 94) {
			return "Ring of three wishes";
		} else if (d100 >= 93) {
			return "Ring of fire elemental command";
		} else if (d100 >= 92) {
			return "Ring of earth elemental command";
		} else if (d100 >= 91) {
			return "Ring of air elemental command";
		} else if (d100 >= 90) {
			return "Plate armor of resistance (" + this.resistanceType() + ")";
		} else if (d100 >= 89) {
			return "Plate armor of etherealness";
		} else if (d100 >= 88) {
			return "loun stone (regeneration)";
		} else if (d100 >= 87) {
			return "loun stone (mastery)";
		} else if (d100 >= 86) {
			return "loun stone (greater absorption)";
		} else if (d100 >= 85) {
			return "Instrument of the bards (Ollamh harp)";
		} else if (d100 >= 84) {
			return "Horn ofValhalla (iron)";
		} else if (d100 >= 83) {
			return "Armor of resistance (" + this.resistanceType() + ") (half plate)";
		} else if (d100 >= 82) {
			return "Efreeti chain";
		} else if (d100 >= 81) {
			return "Deck of many things";
		} else if (d100 >= 80) {
			return "Cubic gate";
		} else if (d100 >= 79) {
			return "Belt of storm giant strength";
		} else if (d100 >= 78) {
			return "Armor of invulnerability";
		} else if (d100 >= 77) {
			return "Apparatus of Kwalish";
		} else if (d100 >= 76) {
			return "Magic armor, " + this.magicArmor();
		} else if (d100 >= 74) {
			return "Well of many worlds";
		} else if (d100 >= 72) {
			return "Armor, +2 studded leather";
		} else if (d100 >= 70) {
			return "Armor, +2 splint";
		} else if (d100 >= 68) {
			return "Scarab of protection";
		} else if (d100 >= 66) {
			return "Armor, +1 scale mail";
		} else if (d100 >= 64) {
			return "Rod of resurrection";
		} else if (d100 >= 62) {
			return "Robe of the archmagi";
		} else if (d100 >= 60) {
			return "Armor, +1 plate";
		} else if (d100 >= 58) {
			return "Armor, +3 leather";
		} else if (d100 >= 56) {
			return "Iron flask";
		} else if (d100 >= 54) {
			return "Armor, + 1 half plate";
		} else if (d100 >= 52) {
			return "Crystal ball (legendary version)";
		} else if (d100 >= 50) {
			return "Cloak of invisibility";
		} else if (d100 >= 48) {
			return "Armor, +3 chain shirt";
		} else if (d100 >= 46) {
			return "Armor, +3 chain mail";
		} else if (d100 >= 44) {
			return "Armor, +2 breastplate";
		} else if (d100 >= 42) {
			return "Belt of cloud giant strength";
		} else if (d100 >= 39) {
			return "Vorpal sword";
		} else if (d100 >= 36) {
			return "Staff of the magi";
		} else if (d100 >= 33) {
			return "Rod of lordly might";
		} else if (d100 >= 30) {
			return "Ring of spell turning";
		} else if (d100 >= 27) {
			return "Ring of invisibility";
		} else if (d100 >= 24) {
			return "Ring of djinni summoning";
		} else if (d100 >= 21) {
			return "Holy avenger";
		} else if (d100 >= 16) {
			return "Sword of answering";
		} else if (d100 >= 11) {
			return "Luck Blade";
		} else if (d100 >= 6) {
			return "Hammer of thunderbolts";
		}
		return "Defender";
	}
	
	figurineOfWondrousPower() {
		var d8 = roll.die(8);
		
		switch (d8) {
			case 1: return "Figurine of wondrous power (Bronze griffon)";
			case 2: return "Figurine of wondrous power (Ebony fly)";
			case 3: return "Figurine of wondrous power (Golden lions)";
			case 4: return "Figurine of wondrous power (Ivory goats)";
			case 5: return "Figurine of wondrous power (Marble elephant)";
			case 6: return "Figurine of wondrous power (Onyx dog)";
			case 7: return "Figurine of wondrous power (Onyx dog)";
			default: return "Figurine of wondrous power (Serpentine owl)";
		}
	}
	
	armor() {
		var d12 = roll.die(12);
		
		switch(d12) {
			case 1: return "Padded";
			case 2: return "Leather";
			case 3: return "Studded leather";
			case 4: return "Hide";
			case 5: return "Chain shirt";
			case 6: return "Scale mail";
			case 7: return "Breastplate";
			case 8: return "Half plate";
			case 9: return "Ring mail";
			case 10: return "Chain mail";
			case 11: return "Splint";
			default: return "Plate";
		}
	}

	magicArmor() {
		var d12 = roll.die(12);

		if (d12 > 11) return "Armor, +3 (plate)";
		else if (d12 >10) return "Armor, +3 (half plate)";
		else if (d12 > 8) return "Armor, +3 (splint)";
		else if (d12 > 6) return "Armor, +3 (breastplate)";
		else if (d12 > 4) return "Armor, +3 (studded leather)";
		else if (d12 > 2) return "Armor, +2 (plate)";
		return "Armor, +2 (half plate)";
	}

	metalArmor() {
		var d8 = roll.die(8);

		switch (d8) {
			case 1: return "Chain shirt";
			case 2: return "Scale mail";
			case 3: return "Breastplate";
			case 4: return "Half plate";
			case 5: return "Ring mail";
			case 6: return "Chain mail";
			case 7: return "Splint";
			case 8: return "Plate";
			default: return "";
		}
	}

	resistanceType() {
		var d10 = roll.die(10);

		switch (d10) {
			case 1: return "Acid";
			case 2: return "Cold";
			case 3: return "Fire";
			case 4: return "Force";
			case 5: return "Lightning";
			case 6: return "Necrotic";
			case 7: return "Poison";
			case 8: return "Psychic";
			case 9: return "Radiant";
			default: return "Thunder";
		}
	}

	resistanceAndVulnerability() {
		var d3 = roll.die(3);
		var resistance;
		var vulnerability;

		switch (d3) {
			case 1: 
				resistance = "bludgeoning";
				break;
			case 2: 
				resistance = "piercing";
				break;
			default: resistance = "slashing";
		}

		do {
			vulnerability = this.vulnerability();
		} while (resistance === vulnerability)

		return "(resistant to " + resistance + ", vulnerable to " + vulnerability + ")";
	}

	vulnerability() {
		var d3 = roll.die(3);
		
		switch (d3) {
			case 1: return "bludgeoning";
			case 2: return "piercing";
			default: return "slashing";
		}
	}
	
	weapon() {
		var weapons = [
			"Club",
			"Dagger",
			"Greatclub",
			"Handaxe",
			"javelin", 
			"Light hammer",
			"Mace",
			"Quarterstaff",
			"Sickle", 
			"Spear",
			"Light crossbow",
			"Dart", 
			"Shortbow", 
			"Sling",
			"Battleaxe",
			"Flail", 
			"Glaive",
			"Greataxe",
			"Greatsword",
			"Halberd",
			"Lance",
			"Longsword",
			"Maul",
			"Morningstar",
			"Pike", 
			"Rapier",
			"Scimitar",
			"Shortsword",
			"Trident", 
			"War pick",
			"Warhammer",
			"Whip",
			"Blowgun",
			"Hand crossbow",
			"Heavy crossbow",
			"Longbow", 
			"Net"
        ];
		var d = roll.die(weapons.length)-1;
		return weapons[d];
	}
	
	ammunition() {
		var ammunitionType = [
			"Crossbow",
			"Bow",
			"Blowgun"
        ];
		var d = roll.die(ammunitionType.length)-1;
		return ammunitionType[d];
	}
	
	cantrip() {
		var spells = [
			"Acid Splash",
			"Blade Ward",
			"Booming Blade",
			"Chill Touch",
			"Control Flames",
			"Create Bonfire",
			"Dancing Lights",
			"Druidcraft",
			"Eldritch Blast",
			"Encode Thoughts",
			"Fire Bolt",
			"Friends",
			"Frostbite",
			"Green Flame Blade",
			"Guidance",
			"Gust",
			"Infestation",
			"Light",
			"Lightning Lure",
			"Mage Hand",
			"Magic Stone",
			"Mending",
			"Message",
			"Minor Illusion",
			"Mold Earth",
			"Poison Spray",
			"Prestidigitation",
			"Primal Savagery",
			"Produce Flame",
			"Ray of Frost",
			"Resistance",
			"Sacred Flame",
			"Shape Water",
			"Shillelagh",
			"Shocking Grasp",
			"Spare the Dying",
			"Sword Burst",
			"Thaumaturgy",
			"Thorn Whip",
			"Thunderclap",
			"Toll the Dead",
			"True Strike",
			"Vicious Mockery",
			"Virtue (UA)",
			"Word of Radiance"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
	}
	
	spell1() {
		var spells = [
			"Absorb Elements",
			"Alarm",
			"Animal Friendship",
			"Armor of Agathys",
			"Arms of Hadar",
			"Bane",
			"Beast Bond",
			"Bless",
			"Burning Hands",
			"Catapult",
			"Cause Fear",
			"Ceremony",
			"Charm Person",
			"Chaos Bolt",
			"Chromatic Orb",
			"Color Spray",
			"Command",
			"Compelled Duel",
			"Comprehend Languages",
			"Create or Destroy Water",
			"Cure Wounds",
			"Detect Evil and Good",
			"Detect Magic",
			"Detect Poison and Disease",
			"Disguise Self",
			"Dissonant Whispers",
			"Divine Favor",
			"Earth Tremor",
			"Ensnaring Strike",
			"Entangle",
			"Expeditious Retreat",
			"Faerie Fire",
			"False Life",
			"Feather Fall",
			"Find Familiar",
			"Fog Cloud",
			"Goodberry",
			"Grease",
			"Guiding Bolt",
			"Guiding Hand (UA)",
			"Hail of Thorns",
			"Healing Elixir (UA)",
			"Healing Word",
			"Hellish Rebuke",
			"Heroism",
			"Hex",
			"Hunter's Mark",
			"Ice Knife",
			"Identify",
			"Illusory Script",
			"Inflict Wounds",
			"Jump",
			"Longstrider",
			"Mage Armor",
			"Magic Missile",
			"Protection from Evil and Good",
			"Puppet",
			"Purify Food and Drink",
			"Ray of Sickness",
			"Sanctuary",
			"Searing Smite",
			"Sense Emotion (UA)",
			"Shield",
			"Shield of Faith",
			"Silent Image",
			"Snare",
			"Sleep",
			"Speak with Animals",
			"Sudden Awakening",
			"Tasha's Hideous Laughter",
			"Tenser's Floating Disk",
			"Thunderous Smite",
			"Thunderwave",
			"Unearthly Chorus (UA)",
			"Unseen Servant",
			"Wild Cunning (UA)",
			"Witch Bolt",
			"Wrathful Smite",
			"Zephyr Strike"
		];
		var d = roll.die(spells.length)-1;
		return spells[d];
	}
	
	spell2() {
		var spells = [
			"Aganazzar's Scorcher",
			"Aid",
			"Alter Self",
			"Animal Messenger",
			"Arcane Lock",
			"Augury",
			"Barkskin",
			"Beast Sense",
			"Blindness/Deafness",
			"Blur",
			"Branding Smite",
			"Calm Emotions",
			"Cloud of Daggers",
			"Continual Flame",
			"Cordon of Arrows",
			"Crown of Madness",
			"Darkness",
			"Darkvision",
			"Detect Thoughts",
			"Dust Devil",
			"Dragon's Breath",
			"Earthbind",
			"Enhance Ability",
			"Enlarge/Reduce",
			"Enthrall",
			"Find Steed",
			"Find Traps",
			"Flame Blade",
			"Flaming Sphere",
			"Flock of Familiars",
			"Gentle Repose",
			"Gust of Wind",
			"Healing Spirit",
			"Heat Metal",
			"Hold Person",
			"Invisibility",
			"Knock",
			"Lesser Restoration",
			"Levitate",
			"Locate Animals or Plants",
			"Locate Object",
			"Magic Mouth",
			"Magic Weapon",
			"Maximillian's Earthen Grasp",
			"Melf's Acid Arrow",
			"Mind Spike",
			"Mirror Image",
			"Misty Step",
			"Moonbeam",
			"Nystul's Magic Aura",
			"Pass Without Trace",
			"Phantasmal Force",
			"Prayer of Healing",
			"Protection from Poison",
			"Pyrotechnics",
			"Ray of Enfeeblement",
			"Rope Trick",
			"Scorching Ray",
			"See Invisibility",
			"Shadow Blade",
			"Shatter",
			"Silence",
			"Skywrite",
			"Snilloc's Snowball Storm",
			"Spider Climb",
			"Spike Growth",
			"Spiritual Weapon",
			"Suggestion",
			"Warding Bond",
			"Warding Wind",
			"Web",
			"Zone of Truth"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell3() {
		var spells = [
			"Animate Dead", 
			"Aura of Vitality",
			"Beacon of Hope",
			"Bestow Curse",
			"Blinding Smite",
			"Blink",
			"Call Lightning",
			"Catnap",
			"Clairvoyance",
			"Conjure Animals",
			"Conjure Barrage",
			"Counterspell",
			"Create Food and Water",
			"Crusader's Mantle",
			"Daylight",
			"Dispel Magic",
			"Elemental Weapon",
			"Enemies Abound",
			"Erupting Earth",
			"Fear",
			"Feign Death",
			"Fireball",
			"Flame Arrows",
			"Fly",
			"Galder's Tower",
			"Gaseous Form",
			"Glyph of Warding",
			"Haste",
			"Hunger of Hadar",
			"Hypnotic Pattern",
			"Leomund's Tiny Hut",
			"Life Transference",
			"Lightning Arrow",
			"Lightning Bolt",
			"Magic Circle",
			"Major Image",
			"Mass Healing Word",
			"Meld into Stone",
			"Melf's Minute Meteors",
			"Nondetection",
			"Phantom Steed",
			"Plant Growth",
			"Protection from Energy",
			"Remove Curse",
			"Revivify",
			"Sending",
			"Sleet Storm",
			"Slow",
			"Speak with Dead",
			"Speak with Plants",
			"Spirit Guardians",
			"Summon Lesser Demons",
			"Stinking Cloud",
			"Thunder Step",
			"Tidal Wave",
			"Tiny Servant",
			"Tongues",
			"Vampiric Touch", 
			"Wall of Sand", 
			"Wall of Water", 
			"Water Breathing", 
			"Water Walk", 
			"Wind Wall"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell4() {
		var spells = [
			"Arcane Eye",
			"Aura of Life",
			"Aura of Purity",
			"Banishment",
			"Blight",
			"Charm Monster",
			"Compulsion",
			"Confusion",
			"Conjure Barlgura (UA)",
			"Conjure Minor Elementals",
			"Conjure Shadow Demon (UA)",
			"Conjure Woodland Beings",
			"Control Water",
			"Death Ward",
			"Dimension Door",
			"Divination",
			"Dominate Beast",
			"Elemental Bane",
			"Evard's Black Tentacles",
			"Fabricate",
			"Find Greater Steed",
			"Fire Shield",
			"Freedom of Movement",
			"Galder's Speedy Courier",
			"Giant Insect",
			"Guardian of Nature",
			"Grasping Vine",
			"Greater Invisibility",
			"Guardian of Faith",
			"Hallucinatory Terrain",
			"Ice Storm",
			"Leomund's Secret Chest",
			"Locate Creature",
			"Mordenkainen's Faithful Hound",
			"Mordenkainen's Private Sanctum",
			"Otiluke's Resilient Sphere",
			"Phantasmal Killer",
			"Polymorph",
			"Shadow of Moil",
			"Sickening Radiance",
			"Summon Greater Demon",
			"Staggering Smite",
			"Stone Shape",
			"Stoneskin",
			"Storm Sphere",
			"Vitriolic Sphere",
			"Wall of Fire",
			"Watery Sphere"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell5() {
		var spells = [
			"Animate Objects",
			"Antilife Shell", 
			"Awaken",
			"Banishing Smite",
			"Bigby's Hand",
			"Circle of Power",
			"Cloudkill",
			"Commune",
			"Commune with Nature",
			"Cone of Cold",
			"Conjure Elemental",
			"Conjure Volley",
			"Conjure Vrock (UA)",
			"Contact Other Plane",
			"Contagion",
			"Control Winds",
			"Creation",
			"Danse Macabre",
			"Dawn",
			"Destructive Wave",
			"Dispel Evil and Good",
			"Dominate Person",
			"Dream",
			"Enervation",
			"Far Step",
			"Flame Strike",
			"Geas",
			"Greater Restoration",
			"Hallow",
			"Holy Weapon",
			"Hold Monster",
			"Immolation",
			"Infernal Calling",
			"Insect Plague",
			"Legend Lore",
			"Maelstrom",
			"Mass Cure Wounds",
			"Mislead",
			"Modify Memory",
			"Negative Energy Flood",
			"Passwall",
			"Planar Binding",
			"Raise Dead",
			"Rary's Telepathic Bond",
			"Reincarnate",
			"Scrying",
			"Seeming",
			"Skill Empowerment",
			"Steel Wind Strike",
			"Synaptic Static",
			"Swift Quiver",
			"Telekinesis",
			"Teleportation Circle",
			"Transmute Rock",
			"Tree Stride",
			"Wall of Force",
			"Wall of Light",
			"Wall of Stone",
			"Wrath of Nature"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell6() {
		var spells = [
			"Arcane Gate",
			"Blade Barrier",
			"Bones of the Earth",
			"Chain Lightning",
			"Circle of Death",
			"Conjure Fey",
			"Contingency",
			"Create Homunculus",
			"Create Undead",
			"Disintegrate",
			"Drawmij's Instant Summons",
			"Druid Grove",
			"Eyebite",
			"Find the Path",
			"Flesh to Stone",
			"Forbiddance",
			"Globe of Invulnerability",
			"Guards and Wards",
			"Harm",
			"Heal",
			"Heroes' Feast",
			"Investiture of Flame",
			"Investiture of Ice",
			"Investiture of Stone",
			"Investiture of Wind",
			"Magic Jar",
			"Mass Suggestion",
			"Mental Prison",
			"Move Earth",
			"Otiluke's Freezing Sphere",
			"Otto's Irresistible Dance",
			"Planar Ally",
			"Primordial Ward",
			"Programmed Illusion",
			"Scatter",
			"Soul Cage",
			"Sunbeam",
			"Tenser's Transformation",
			"Transport via Plants",
			"True Seeing",
			"Wall of Ice",
			"Wall of Thorns",
			"Wind Walk",
			"Word of Recall"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell7() {
		var spells = [
			"Conjure Celestial",
			"Conjure Hezrou (UA)",
			"Crown of Stars",
			"Delayed Blast Fireball",
			"Divine Word",
			"Etherealness",
			"Finger of Death",
			"Fire Storm",
			"Forcecage",
			"Mirage Arcane",
			"Mordenkainen's Magnificent Mansion",
			"Mordenkainen's Sword",
			"Plane Shift",
			"Prismatic Spray",
			"Project Image",
			"Power Word: Pain",
			"Regenerate",
			"Resurrection",
			"Reverse Gravity",
			"Sequester",
			"Simulacrum",
			"Symbol",
			"Teleport",
			"Temple of the Gods",
			"Whirlwind"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell8() {
		var spells = [
			"Abi-Dalzim's Horrid Wilting",
			"Animal Shapes",
			"Antimagic Field",
			"Antipathy/Sympathy",
			"Clone",
			"Control Weather",
			"Demiplane",
			"Dominate Monster",
			"Earthquake",
			"Feeblemind",
			"Glibness",
			"Holy Aura",
			"Illusory Dragon",
			"Incendiary Cloud",
			"Maddening Daze",
			"Maze",
			"Mighty Fortress",
			"Mind Blank",
			"Power Word: Stun",
			"Sunburst",
			"Telepathy",
			"Tsunami"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}
	
	spell9() {
		var spells = [
			"Astral Projection",
			"Foresight",
			"Gate",
			"Imprisonment",
			"Invulnerability",
			"Mass Heal",
			"Mass Polymorph",
			"Meteor Swarm",
			"Power Word: Heal",
			"Power Word: Kill",
			"Prismatic Wall",
			"Psychic Scream",
			"Shapechange",
			"Storm of Vengeance",
			"Time Stop",
			"True Polymorph",
			"True Resurrection",
			"Weird",
			"Wish"
        ];
		var d = roll.die(spells.length)-1;
		return spells[d];
		
	}	
}

export default MagicItems;