describe("The Question List", () => {
	beforeEach(() => {
		console.log("Before Each!");
	});
	beforeAll(() => {
		console.log("Before All!");
	});
	afterEach(() => {
		console.log("After Each!");
	});
	afterAll(() => {
		console.log("After All!");
	});
	it.only("Should Display a list of items", () => {
		expect(2 + 2).toEqual(4);
	});
	it.skip("Should Display a list of items", () => {
		expect(2 + 2).toEqual(4);
	});
	it("Should Display a list of items", () => {
		expect(2 + 2).toEqual(4);
	});
});
