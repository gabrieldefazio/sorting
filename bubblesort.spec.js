

describe('Bubble Sort', function(){
    beforeEach(function() {
        arr = [9,1,6,3,7,8,2]
    });

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles sorts an array', function(){
        expect( bubbleSort(arr) ).toEqual( [1,2,3,6,7,8,9] );
    });

    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });
    it('optimizes search by returning when elements are in order', function () {
        bubbleSort(arr);
        expect(window.swap.calls.count()).toEqual(22);
    });

});