function Fighter(obj) {
	let data = obj,
			name = data.name,
			damage = data.damage,
			hp = data.hp,
			maxHp = data.hp,
			agility = data.agility,
			wins = 0,
			losses = 0;

	this.getName = function () {
		return name;
	}
	this.getDamage = function () {
		return damage;
	}
	this.getAgility = function () {
		return agility;
	}
	this.getHealth = function () {
		return hp;
	}
	this.dealDamage = function (damage) {
		if (hp > 0 && hp > damage) {
			hp -= damage;
		} else {
			hp = 0;
		}
	}
	this.attack = function (defFighter) {
		let maxSuccess = 100;
		let successAttack = maxSuccess - defFighter.getAgility();
		let random = Math.random() * maxSuccess;
		if (successAttack >= random) {
			defFighter.dealDamage(damage);
			console.log(`${name} make ${damage} damage to ${defFighter.getName()}`);
		} else {
			console.log(`${name} attack missed`);
		}
	}
	this.logCombatHistory = function () {
		console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
	}
	this.heal = function (heal) {
		if (hp + heal <= maxHp) {
			hp += heal;
			console.log(`${name} has HP: ${hp}`);
		} else {
			hp = maxHp;
			console.log(`${name} has max of HP: ${hp}`);
		}
	}
	this.addWin = function () {
		wins += 1;
	}
	this.addLoss = function () {
		losses += 1;
	}
}

function battle(first, second) {
	let firstHP = first.getHealth();
	let secondHP = second.getHealth();
	if (firstHP > 0 && secondHP > 0) {
		while (firstHP > 0 && secondHP > 0) {
			if (firstHP > 0) {
				first.attack(second);
				secondHP = second.getHealth();
			}
			if (secondHP > 0) {
				second.attack(first);
				firstHP = first.getHealth();
			}
		}
		if (firstHP > 0) {
			first.addWin();
			second.addLoss();
			console.log(`${first.getName()} beat ${second.getName()}`);
		} else {
			second.addWin();
			first.addLoss();
			console.log(`${second.getName()} beat ${first.getName()}`);
		}
		return console.log(`${first.getName()} HP:${firstHP} ${second.getName()} HP:${secondHP}`);
	} else {
		if (firstHP === 0) {
			return console.log(`${first.getName()} is dead and can't fight`);
		} else {
			return console.log(`${second.getName()} is dead and can't fight`);
		}
	}
}

const Fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const Fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

console.log(battle(Fighter1, Fighter2));
