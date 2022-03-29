const{calculate} = require('./public/js/home');

test('51/(0.5*0.5)', () =>{
    expect(calculate(1,0.5)).toBe(0.5);
});


test.each([[1,0.5,0.5]])(
    '%i /(%i * %i )equals %i', (a, b, expected) => {
        expect(calculate(a,b)).toBe(expected);
    }

);
test('51/(0.5*0.5)', () =>{
    expect(diagnose(0.5)).toBe("Under Weight");
});