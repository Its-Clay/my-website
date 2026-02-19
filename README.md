diff --git a/README.md b/README.md
index bae2dbe6a1bc12e805d8ce31bde055df48c3846a..7065e1f410acb80ccc12c1518928135dda8f4986 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,17 @@
 # my-website
-Website code to be hosted on itsClay.net
+
+Website code to be hosted on itsClay.net.
+
+## Articles workflow (static option)
+
+1. Create a new HTML file in `articles/` (you can copy an existing article as a starter).
+2. Add a new object in `scripts/articles.js` with:
+   - `title`
+   - `date` (`YYYY-MM-DD`)
+   - `summary`
+   - `url`
+   - `featured` (`true` to include in the Featured Articles carousel)
+3. Commit and push.
+
+The homepage Featured Articles block rotates through posts marked `featured: true`.
+If none are featured, it rotates over all posts.
