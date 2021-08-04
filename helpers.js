function createCounter(arr) {
	return arr.reduce(function (acc, next) {
		acc[next] = (acc[next] || 0) + 1;
		return acc;
	}, {});
}
