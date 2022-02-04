# Companies Browser

This is a [Next.js](https://nextjs.org/) (please ignore any template leftovers).

## Running Development Server

Requires Node.js installed (the exact version can be found in `node.version` file).

```bash
npm run dev
open http://localhost:3000
```

## Posible Improvements

- Storing the data: as JSON file gets larger it should be put into a cloud storage,
  e.g. BigQuery, if the data is relatively static, Firebase otherwise.
- Querying the server: passing the filters through the search params interface can
  become tedious, so the endpoint could be updated to use GraphQL instead.
- UI: lazy-loading rows behind the fold (i.e. infinite scrolling) can improve the
  perceived performance.
