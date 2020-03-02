export class Robot {
	constructor (head, arms, legs ) {
		this._head = head;
		this._arms = arms;
		this._legs = legs;
		console.log('robot assembled');
	}

	communicate () {
		return this._head.action();
	}

	act () {
		return this._arms.action();
	}

	move () {
		return this._legs.action();
	}
}

export class SingingHead {
	constructor() {
		console.log('Singing head assembled')
	}
	action () {
		return 'Lalalalaal!'
	}
}

export class TalkingHead {
	constructor() {
		console.log('Talking head assembled')
	}
	action () {
		return 'Blah blah uhhh ahhh'
	}
}

export class HammerArms {
	constructor() {
		console.log('Hammer arms assembled')
	}
	action () {
		return 'Bam bam bam!'
	}
}

export class SpiderLegs {
	constructor() {
		console.log('Spider legs assembled')
	}
	action () {
		return 'Crawl crawl crawl'
	}
}

export class TrackLegs {
	constructor() {
		console.log('Track legs assembled')
	}
	action () {
		return 'Wroom wroom'
	}
}

// const legs = new SpiderLegs();
// const head = new TalkingHead();
// const arms = new HammerArms();
//
// const robot = new Robot(head, arms, legs);
// robot.communicate();
// robot.act();
// robot.move();
