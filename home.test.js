const{calculate} = require('./index');

test('51/(0.5*0.5)', () =>{
    expect(calculate(51,0.5)).toBe(204);
});

test.each([[51,0.5,204]])(
    '%i /(%i * %i )equals %i', (a, b, expected) => {
        expect(calculate(a,b)).toBe(expected);
    }
);