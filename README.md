
### Reproduce Issue 196

- Run `npm i -g pnpm` to install pnpm
- Run `pnpm run start` to run serverless-offline

The compilation fails.

If you run the changes I made in the PR to the `node_modules/serverless-bundle` package then the compilation works.

The lambda is now available at `http://localhost:3000/local/hello` and everything works.