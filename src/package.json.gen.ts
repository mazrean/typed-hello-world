/**
* @generated
*/

export default {
  "name": "typed-hello-world",
  "displayName": "typed-hello-world",
  "description": "",
  "version": "0.0.1",
  "engines": {
    "vscode": "^1.93.0"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [],
  "main": "./dist/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "typed-hello-world.helloWorld",
        "title": "Hello World"
      }
    ],
    "configuration": {
      "title": "Typed Hello World",
      "properties": {
        "typed-hello-world.message": {
          "type": "string",
          "default": "Hello World",
          "description": "The message to display in the Hello World notification"
        }
      }
    }
  },
  "scripts": {
    "vscode:prepublish": "pnpm run package",
    "compile": "pnpm run check-types && pnpm run lint && node esbuild.js",
    "watch": "npm-run-all -p watch:*",
    "watch:esbuild": "node esbuild.js --watch",
    "watch:tsc": "tsc --noEmit --watch --project tsconfig.json",
    "package": "pnpm run check-types && pnpm run lint && node esbuild.js --production",
    "compile-tests": "tsc -p . --outDir out",
    "watch-tests": "tsc -p . -w --outDir out",
    "pretest": "pnpm run compile-tests && pnpm run compile && pnpm run lint",
    "check-types": "tsc --noEmit",
    "lint": "eslint src",
    "test": "vscode-test",
    "gen:packageJson": "node ./scripts/packageJson2ts.mjs"
  },
  "devDependencies": {
    "@types/vscode": "^1.93.0",
    "@types/mocha": "^10.0.7",
    "@types/node": "20.x",
    "@typescript-eslint/eslint-plugin": "^8.3.0",
    "@typescript-eslint/parser": "^8.3.0",
    "eslint": "^9.9.1",
    "esbuild": "^0.23.1",
    "npm-run-all": "^4.1.5",
    "typescript": "^5.5.4",
    "@vscode/test-cli": "^0.0.10",
    "@vscode/test-electron": "^2.4.1"
  },
  "packageManager": "pnpm@9.7.0+sha512.dc09430156b427f5ecfc79888899e1c39d2d690f004be70e05230b72cb173d96839587545d09429b55ac3c429c801b4dc3c0e002f653830a420fa2dd4e3cf9cf"
} as const;
