export const car = ({ wheels, engine }) => () => ({
	start: function () {
		return engine()
	},
	wheels: function () {
		return wheels()
	}
});

export const wheels = ({ type }) => () => {
	return type();
};

export const steelWheels = () => {
	 return 'steel wheels';
};

export const woodenWheels = () => {
	return 'wooden wheels';
};

export const engine = () => {
	return 'wroom wroom';
};
