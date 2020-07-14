export class Roll {

	die(d) {
		return 1 + Math.floor((d) * Math.random());
	}
		
	dice(d, numberOfDice) {
		var result = 0;
		for (var i=0;i<numberOfDice;i++) {
			result += this.die(d);
		}
			
		return result;
	}
		
	stats() {
		for (var j=0; j<6; j++) {
			var dice = [];
			
			for (var i=0; i<4; i++) dice.push(this.die(6));
			dice.sort().reverse().pop();
				
			var sum = 0;
			for (var d in dice) {
				sum = sum + dice[d];
			}
			
			return sum;
		}
			
	}
} export default Roll;
