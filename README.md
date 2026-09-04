# Shilin Ma — Academic Homepage

A lightweight, responsive academic homepage for `https://msssl.github.io/`.
It is plain HTML and CSS, so GitHub Pages can serve it directly without a
build step. The existing `SAFE-Pruner/` project page remains available.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Update content

- Edit the biography, experience, and publication entries in `index.html`.
- Add an email or Google Scholar link to the profile link group when available.
- Keep local images optimized before adding them to `images/`.

## Template sources

The homepage structure and styling are adapted from
[Jon Barron's public academic homepage](https://github.com/jonbarron/website).

## Publish

Push the repository's `main` branch to GitHub. For a user site named
`msssl.github.io`, GitHub Pages will serve the root `index.html` at the matching
public URL once Pages is enabled for the repository.
