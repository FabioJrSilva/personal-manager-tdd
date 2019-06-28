describe('Basico', () => {
  it('Devo conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
  });

  test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'Fabio', email: 'fabio@exemplo.com.br' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Fabio');
    expect(obj.name).toBe('Fabio');
    expect(Object.keys(obj).length).toBe(2);
  });
});
