function bench(): [number, number];
function bench(start: [number, number]): number;
function bench(start?: [number, number]) {
	if (!start) return process.hrtime();
	const stop = process.hrtime(start);
	return (stop[0] * 1e9 + stop[1]) / 1e6;
}

const rand = (() => Math.random() * 500)();
const random = new Array(10000).fill(rand);

const start = bench();
const total = random.reduce((acc, v) => (acc += v), 0);
const stop = bench(start);

console.log({ total, elapsed: `${stop}ms` });
