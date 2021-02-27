const random = require('./index');

//part 1
xtest('choose your random number', ()=> {
	expect(random(3)).toBe(3);
});

//part 2
describe('some random case', () => {
	it('choose num 1', () => {
		const num = random(1);
		expect(num).toBe(1);
	}),
		it('choose num 2', () => {
			const num = random(2);
			expect(num).toBe(2);
		});
	it('choose num 3', () => {
		const num = random(3);
		expect(num).toBe(3);
	});
	it('choose num 4', () => {
		const num = random(4);
		expect(num).toBe(4);
	});
	it('choose num 5', () => {
		const num = random(5);
		expect(num).toBe(`Неудача, ты выбрал 5`);
	});
});
