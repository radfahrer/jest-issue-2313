var codeUnderTest = '../some_module';


jest.unmock(codeUnderTest);

describe('some test suite', () => {
	var myModule;
	beforeEach(() => {
		myModule = require(codeUnderTest);
	})
	describe('someFunk', () => {
		it('should return some text', () => {
			let test = myModule.someFunk();
			pluralize.plural.mockReturnValue('boxxen');
			expect(test).toEqual('boxxen');
		})
	})
})
