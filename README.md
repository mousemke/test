# Sadie Braun

sadie@knoblau.ch

This challenge is live at [http://test.knoblau.ch:3000/](http://test.knoblau.ch:3000/)

[https://github.com/mousemke/test/tree/up42-test](https://github.com/mousemke/test/tree/up42-test)

## A test : a shopping experience

This is a test. Given the retrieval of a list of blocks for sale, we should be able to add them to cart and buy them with available credits.

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

## Decisions

This app is built on React, Material UI, and jss in Typescript. React is an easy win as it is designed exactly for interactivity that the app uses (thought there may be similar light-weight tools for something this straight-forward). Material UI was a choice since I'm familiar with it and it has decent base styles. It made it unnecessary to dig deep into the style setup. Everything that is not Material UI is covered by JSS. Though there are plenty of modern css solutions, I find JSS both easy to use - given the js object format, but also it allows for effortless uniqueness of css classnames. This removes the need to make intentional classnames (BEM, etc) and you can instead just stick to human readable names in the same way you might handle a normal variable name.
