import Cart from "../Cart";

test('new cart should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
})

test('added new cart', () => {
    const cart = new Cart();
    const item1 = {
        id: 1,
        name: 'Test',
        price: 300
    };

    cart.add(item1);

    expect(cart.items).toEqual([item1]);
})