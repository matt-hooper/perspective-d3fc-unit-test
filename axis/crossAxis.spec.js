import { domain, label, scale } from '../../perspective/packages/perspective-viewer-d3fc/src/js/axis/crossAxis';

describe('crossAxis should', () => {
    const settings = { crossValues: [{ name: 'a' }, { name: 'b' }, { name: 'c' }] };

    test('labels', () => {
        expect(label(settings)).toBe('a, b, c');
    });

    console.log("Here");
});