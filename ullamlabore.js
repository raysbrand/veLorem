test('expects "." to be a string', () => {
    expect('.').toBe('.');
});

test('expects "." to match the regex', () => {
    expect('.').toMatch(/\./);
});
