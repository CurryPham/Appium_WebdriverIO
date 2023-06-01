describe('Account', () => {
    
    before(() => {
        console.log('Before Account')
    });

    after(() => {
        console.log('After Account')
    });

    beforeEach(() => {
        console.log('Before each Account')
    });

    afterEach(() => {
        console.log('Before each Account')
    });

    it('Test 1', () => {
        console.log('Testing 1')
    });

    it('Test 2', () => {
        console.log('Testing 2')
    });
});