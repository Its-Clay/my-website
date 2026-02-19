# my-website

Website code to be hosted on itsClay.net.

## Articles workflow (static option)

1. Create a new HTML file in `articles/` (you can copy an existing article as a starter).
2. Add a new object in `scripts/articles.js` with:
   - `title`
   - `date` (`YYYY-MM-DD`)
   - `summary`
   - `url`
   - `featured` (`true` to include in the Featured Articles carousel)
3. Commit and push.

The homepage Featured Articles block rotates through posts marked `featured: true`.
If none are featured, it rotates over all posts.
