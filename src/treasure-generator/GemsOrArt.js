import Roll from './Roll.js'

var roll = new Roll();;

class GemsOrArt {
	
	getLoot(hoardLevel, d100) {
		var loot = [];
        var qty;
        var i;
		
		if (hoardLevel >= 17) {
			if (d100 >= 96) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.gemValue5000());
			} else if (d100 >= 91) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.artValue7500());
			} else if (d100 >= 86) {
				qty = roll.die(10);
				for (i=0; i<qty; i++) loot.push(this.artValue2500());
			} else if (d100 >= 81) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 79) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.gemValue5000());
			} else if (d100 >= 77) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.artValue7500());
			} else if (d100 >= 75) {
				qty = roll.die(10);
				for (i=0; i<qty; i++) loot.push(this.artValue2500());
			} else if (d100 >= 73) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 72) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.gemValue5000());
			} else if (d100 >= 71) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.artValue7500());
			} else if (d100 >= 70) {
				qty = roll.die(10);
				for (i=0; i<qty; i++) loot.push(this.artValue2500());
			} else if (d100 >= 69) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 64) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.gemValue5000());
			} else if (d100 >= 59) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.artValue7500());
			} else if (d100 >= 53) {
				qty = roll.die(10);
				for (i=0; i<qty; i++) loot.push(this.artValue2500());
			} else if (d100 >= 47) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 39) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.gemValue5000());
			} else if (d100 >= 31) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.artValue7500());
			} else if (d100 >= 23) {
				qty = roll.die(10);
				for (i=0; i<qty; i++) loot.push(this.artValue2500());
			} else if (d100 >= 15) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 12) {
				qty = roll.die(8);
				for (i=0; i<qty; i++) loot.push(this.gemValue5000());
			} else if (d100 >= 9) {
				qty = roll.die(4);
				for (i=0; i<qty; i++) loot.push(this.artValue7500());
			} else if (d100 >= 6) {
				qty = roll.die(10);
				for (i=0; i<qty; i++) loot.push(this.artValue2500());
			} else if (d100 >= 3) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			}
			
		} else if (hoardLevel >= 11) {
			if (d100 >= 99) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 97) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 95) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 93) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 91) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 89) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 86) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 83) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 81) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 79) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 77) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 75) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 73) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 71) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 69) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 67) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 63) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 59) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 55) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 51) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 46) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 41) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 36) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 30) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 27) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 24) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 20) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 16) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 13) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue1000());
			} else if (d100 >= 11) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue500());
			} else if (d100 >= 7) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue750());
			} else if (d100 >= 4) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			}
			
		} else if (hoardLevel >= 5) {
			if (d100 === 100) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 === 99) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 97) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 95) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 92) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 89) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 85) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 81) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 === 80) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 79) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 77) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 75) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 73) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 70) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 67) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 64) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 60) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 55) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 50) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 45) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 41) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 37) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 33) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 29) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 23) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue250());
			} else if (d100 >= 17) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue100());
			} else if (d100 >= 11) {
				qty = roll.dice(6, 3);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 5) {
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			}
						
		} else {
			if (d100 === 100) {
				qty = roll.dice(6,2);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 98){
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 93){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 86){
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 81){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 79){
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 76){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue10());
			} else if (d100 >= 71){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 66){
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 61){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue10());
			} else if (d100 >= 53){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 45){
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 37){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue10());
			} else if (d100 >= 27){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue50());
			} else if (d100 >= 17){
				qty = roll.dice(4, 2);
				for (i=0; i<qty; i++) loot.push(this.artValue25());
			} else if (d100 >= 7){
				qty = roll.dice(6, 2);
				for (i=0; i<qty; i++) loot.push(this.gemValue10());
			}
		}
        
		return loot;
	}

	gemValue10() {
		var number = roll.die(12);
		
		switch(number) {
		
			case 1: 
				return "Azurite (opaque mottled deep blue) - 10 GP";
			case 2:
				return "Banded agate (translucent striped brown, blue, white, or red) - 10 GP";
			case 3:
				return "Blue quartz (transparent pale blue) - 10 GP";
			case 4:
				return "Eye agate (translucent circles of gray, white, brown, blue, or green) - 10 GP";
			case 5:
				return "Hematite (opaque gray-black) - 10 GP";
			case 6:
				return "Lapis lazuli (opaque light and dark blue with yellow flecks) - 10 GP";
			case 7:
				return "Malachite (opaque striated light and dark green) - 10 GP";
			case 8:
				return "Moss agate (translucent pink or yellow-white with mossy gray or green markings) - 10 GP";
			case 9:
				return "Obsidian (opaque black) - 10 GP";
			case 10:
				return "Rhodochrosite (opaque light pink) - 10 GP";
			case 11:
				return "Tiger eye (translucent brown with golden center) - 10 GP";
			case 12:
				return "Turquoise (opaque light blue-green) - 10 GP";
			default:
				return "";
		}
	}
	
	gemValue50() {
		var number = roll.die(12);
		
		switch(number) {
		
			case 1:
				return "Bloodstone (opaque dark gray with red flecks) - 50 GP";
			case 2:
				return "Carnelian (opaque orange to red-brown) - 50 GP";
			case 3:
				return "Chalcedony (opaque white) - 50 GP";
			case 4:
				return "Chrysoprase (translucent green) - 50 GP";
			case 5:
				return "Citrine (transparent pale yellow-brown) - 50 GP";
			case 6:
				return "Jasper (opaque blue, black, or brown) - 50 GP";
			case 7:
				return "Moonstone (translucent white with pale blue glow) - 50 GP";
			case 8:
				return "Onyx (opaque bands of black and white, or pure black or white) - 50 GP";
			case 9:
				return "Quartz (transparent white, smoky gray, or yellow) - 50 GP";
			case 10:
				return "Sardonyx (opaque bands of red and white) - 50 GP";
			case 11:
				return "Star rose quartz (translucent rosy stone with white star-shaped center) - 50 GP";
			case 12:
				return "Zircon (transparent pale blue-green) - 50 GP";
			default:
				return "";
		}
	}
	
	gemValue100() {
		var number = roll.die(10);
		
		switch(number) {
		
			case 1:
				return "Amber (transparent watery gold to rich gold) - 100 GP";
			case 2:
				return "Amethyst (transparent deep purple) - 100 GP";
			case 3:
				return "Chrysoberyl (transparent yellow-green to pale green) - 100 GP";
			case 4:
				return "Coral (opaque crimson) - 100 GP";
			case 5:
				return "Garnet (transparent red, brown-green, or violet) - 100 GP";
			case 6:
				return "Jade (translucent light green, deep green, or white) - 100 GP";
			case 7:
				return "Jet (opaque deep black) - 100 GP";
			case 8:
				return "Pearl (opaque lustrous white, yellow, or pink) - 100 GP";
			case 9:
				return "Spinel (transparent red, red-brown, or deep green) - 100 GP";
			case 10:
				return "Tourmaline (transparent pale green, blue, brown, or red) - 100 GP";
			default:
				return "";
		}
	}
	
	gemValue500() {
		var number = roll.die(6);
		
		switch(number) {
		
			case 1:
				return "Alexandrite (transparent dark green) - 500 GP";
			case 2:
				return "Aquamarine (transparent pale blue-green) - 500 GP";
			case 3:
				return "Black pearl (opaque pure black) - 500 GP";
			case 4:
				return "Blue spinel (transparent deep blue) - 500 GP";
			case 5:
				return "Peridot (transparent rich olive green) - 500 GP";
			case 6:
				return "Topaz (transparent golden yellow) - 500 GP";
			default:
				return "";
		}
	}
	
	gemValue1000() {
		var number = roll.die(8);
		
		switch(number) {
		
			case 1:
				return "Black opal (translucent dark green with black mottling and golden flecks) - 1000 GP";
			case 2:
				return "Blue sapphire (transparent blue-white to medium blue) - 1000 GP";
			case 3:
				return "Emerald (transparent deep bright green) - 1000 GP";
			case 4:
				return "Fire opal (translucent fiery red) - 1000 GP";
			case 5:
				return "Opal (translucent pale blue with green and golden mottling) - 1000 GP";
			case 6:
				return "Star ruby (translucent ruby with white star-shaped center) - 1000 GP";
			case 7:
				return "Star sapphire (translucent blue sapphire with white star-shaped center) - 1000 GP";
			case 8:
				return "Yellow sapphire (transparent fiery yellow or yellow green) - 1000 GP";
			default:
				return "";
		}
	}
	
	gemValue5000() {
		var number = roll.die(4);
		
		switch(number) {
		
			case 1:
				return "Black sapphire (translucent lustrous black with glowing highlights) - 5000 GP";
			case 2:
				return "Diamond (transparent blue-white, canary, pink, brown, or blue) - 5000 GP";
			case 3:
				return "Jacvarh (transparent fiery orange) - 5000 GP";
			case 4:
				return "Ruby (transparent clear red to deep crimson) - 5000 GP";
			default:
				return "";
		}
	}
	
	artValue25() {
		var number = roll.die(10);
		
		switch (number) {
			
			case 1:
				return "Silver ewer - 25 GP";
			case 2:
				return "Carved bone statuette - 25 GP";
			case 3:
				return "Small gold bracelet - 25 GP";
			case 4:
				return "Cloth-of-gold vestments - 25 GP";
			case 5:
				return "Black velvet mask stitched with silver thread - 25 GP";
			case 6:
				return "Copper chalice with silver filigree - 25 GP";
			case 7:
				return "Pair of engraved bone dice - 25 GP";
			case 8:
				return "Small mirror set in a painted wooden frame - 25 GP";
			case 9:
				return "Embroidered silk handkerchief - 25 GP";
			case 10:
				return "Gold locket with a painted portrait inside - 25 GP";
			default:
				return "";
		}
	}
	
	artValue250() {
		var number = roll.die(10);
		
		switch (number) {
			
			case 1:
				return "Gold ring set with bloodstones - 250 GP";
			case 2:
				return "Carved ivory statuette - 250 GP";
			case 3:
				return "Large gold bracelet - 250 GP";
			case 4:
				return "Silver necklace with a gemstone pendant - 250 GP";
			case 5:
				return "Bronze crown - 250 GP";
			case 6:
				return "Silk robe with gold embroidery - 250 GP";
			case 7:
				return "Large well-made tapestry - 250 GP";
			case 8:
				return "Brass mug with jade inlay - 250 GP";
			case 9:
				return "Box of turquoise animal figurines - 250 GP";
			case 10:
				return "Gold bird cage with electrum filigree - 250 GP";
			default:
				return "";
		}
	}
	
	artValue750() {
		var number = roll.die(10);
		
		switch (number) {
			
			case 1:
				return "Silver chalice set with moonstones - 750 GP";
			case 2:
				return "Silver-plated steellongsword with jet set in hilt - 750 GP";
			case 3:
				return "Carved harp of exotic wood with ivory inlay and zircon gems - 750 GP";
			case 4:
				return "Small gold idol - 750 GP";
			case 5:
				return "Gold dragon comb set with red garnets as eyes - 750 GP";
			case 6:
				return "Bottle stopper cork embossed with gold leaf and set with amethysts - 750 GP";
			case 7:
				return "Ceremonial electrum dagger with a black pearl in the pommel - 750 GP";
			case 8:
				return "Silver and gold brooch - 750 GP";
			case 9:
				return "Obsidian statuette with gold fittings and inlay - 750 GP";
			case 10:
				return "Painted gold war mask - 750 GP";
			default:
				return "";
		}
	}
	
	artValue2500() {
		var number = roll.die(10);
		
		switch (number) {
			
			case 1:
				return "Fine gold chain set with a fire opal - 2500 GP";
			case 2:
				return "Old masterpiece painting - 2500 GP";
			case 3:
				return "Embroidered silk and velvet mantle set with numerous moonstones - 2500 GP";
			case 4:
				return "Platinum bracelet set with a sapphire - 2500 GP";
			case 5:
				return "Embroidered glove set with jewel chips - 2500 GP";
			case 6:
				return "Jeweled anklet - 2500 GP";
			case 7:
				return "Gold music box - 2500 GP";
			case 8:
				return "Gold circlet set with four aquamarines - 2500 GP";
			case 9:
				return "Eye patch with a mock eye set in blue sapphire andmoonstone - 2500 GP";
			case 10:
				return "A necklace string of small pink pearls - 2500 GP";
			default:
				return "";
		}
	}
	
	artValue7500() {
		var number = roll.die(8);
		
		switch (number) {
			
			case 1:
				return "Jeweled gold crown - 7500 GP";
			case 2:
				return "Jeweled platinum ring - 7500 GP";
			case 3:
				return "Small gold statuette set with rubies - 7500 GP";
			case 4:
				return "Gold cup set with emeralds - 7500 GP";
			case 5:
				return "Gold jewelry box with platinum filigree - 7500 GP";
			case 6:
				return "Painted gold child's sarcophagus - 7500 GP";
			case 7:
				return "Jade game board with solid gold playing pieces - 7500 GP";
			case 8:
				return "Bejeweled ivory drinking horn with gold filigree - 7500 GP";
			default:
				return "";
		}
	}
}

export default GemsOrArt;