

describe('Merge ', function(){
    beforeEach(function() {
        arr = [9,1,6,3]
    });

    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });

    it('handles sorts an array', function(){
        expect( mergeSort(arr) ).toEqual( [1,3,6,9] );
    });

    // beforeAll(function () {
    //     spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    // });
    // it('optimizes search by returning when elements are in order', function () {
    //     bubbleSort(arr);
    //     expect(window.swap.calls.count()).toEqual(3);
    // });

});