import { checkForUrl } from "../src/client/js/urlChecker"

describe("Testing the url validation functionality", () => {

    test("Testing the checkForUrl() function", () => {
           expect(checkForUrl).toBeDefined();
    }),

    test("Testing correct url", () => {
        expect(checkForUrl('http://google.com')).toEqual(true);
    }),

    test("Testing incorrect url", () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});

        expect(checkForUrl('http://google')).toEqual(false);
        expect(window.alert).toBeCalledWith('Invalid URL! Please correct URL and try again');
    })

});