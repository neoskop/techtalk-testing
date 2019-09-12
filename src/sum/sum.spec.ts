import { defineFeature, loadFeature } from 'jest-cucumber';
import { sum } from './sum';

const feature = loadFeature(`${__dirname}/sum.feature`);

defineFeature(feature, test => {
    test('adding x and y', ({ when, then }) => {
        let s : number;

        when(/^adding (-?\d+) and (-?\d+)$/, (xStr : string, yStr : string) => {
            const x = Number.parseInt(xStr, 10);
            const y = Number.parseInt(yStr, 10);

            s = sum(x, y);
        });

        then(/^the sum is (-?\d+)$/, (sumStr : string) => {
            const sum = Number.parseInt(sumStr, 10);

            expect(s).toBe(sum);
        });
    })
})