# Sadie Braun

sadie@knoblau.ch

[https://github.com/mousemke/test/tree/up42-test](https://github.com/mousemke/test/tree/up42-test)

## A test : a shopping experience

This is a test. Given the retrieval a list of blocks for sale, we should be able to add them to cart and buy them with available credits.

## Usage

After cloning the repo, install the deps with npm

```bash
npm install
```

Then start the project. This will build the project as well as start the node server.

```bash
npm run serve
```

## Testing

You can run all the tests together with the test command

```bash
npm test
```

You can also run the tests individually

```bash
npm run prettier                      // forcefully applies many code styles
npm run test:lint                     // checks code styles and conventions
npm run test:types                    // checks the typescript types
npm run test:unit                     // runs unit tests through jest
npm run test:unit:printCoverageLink   // prints a shortcut link to the code coverage report
```
