const urlGenerator= require('./urlGenerator.js');
const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

let a = 'lessons_2'

it('Проверяет наличие цифры', () => {
    expect(typeof urlGenerator(a)).toBe('string');
    expect(urlGenerator(a)).toMatch(urlRegEx);
});