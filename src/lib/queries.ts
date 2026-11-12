export const newsListQuery = `
  *[_type == "news"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, category, excerpt,
    image { asset -> { url } }
  }
`;

export const newsPreviewQuery = `
  *[_type == "news"] | order(publishedAt desc) [0..2] {
    _id, title, slug, publishedAt, category, excerpt,
    image { asset -> { url } }
  }
`;

export const newsBySlugQuery = `
  *[_type == "news" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, category, excerpt,
    image { asset -> { url } },
    body
  }
`;
