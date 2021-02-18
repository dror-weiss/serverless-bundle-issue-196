
### Reproduce Issue 196

- Run `npm i -g pnpm` to install pnpm
- Go to `packages/services/example-service`
- Run `pnpm i`
- Run `pnpm run start`

The compilation fails and the lambda doesn't work (despite being stated by serverless-offline there are not issues).

If you make the changes I made in the PR to the `node_modules/serverless-bundle` package then the compilation works, 
and the lambda is now available at `http://localhost:3000/local/hello`.