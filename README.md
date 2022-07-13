# Reproduction for [jest-community/jest-extended#456](https://github.com/jest-community/jest-extended/issues/456)

1. `git clone https://github.com/Maxim-Mazurok/jest-extended-456-reproduction`
2. `cd jest-extended-456-reproduction`
3. `npm start` will run `npm ci` and `tsc`
4. Observe:

   ```text
   test.spec.ts:12:5 - error TS2345: Argument of type '() => void' is not assignable to parameter of type 'Mock<any, any>'.
    Type '() => void' is missing the following properties from type 'Mock<any, any>': getMockName, mock, mockClear, mockReset, and 12 more.

    12     MyClass.prototype.finalize
        ~~~~~~~~~~~~~~~~~~~~~~~~~~


    Found 1 error in test.spec.ts:12
   ```
