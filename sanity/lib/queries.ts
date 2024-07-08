import { groq } from "next-sanity";

export const HOME_QUERY = groq`
  *[_type == "home" && defined(slug.current)] {
      "slug": coalesce(slug.current, store.slug.current)
    }
`;

export const HOME_PAGE_QUERY = groq`
  *[_type == "home"][0] {
    ...,
    modules[] {
      ...,
      "palette": palette.palette
    }
  }
`;

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    modules[] {
      ...,
      "palette": palette.palette
    }
  }
`;

export const PAGES_QUERY = groq`
  *[_type == "page" && defined(slug.current)] {
      "slug": coalesce(slug.current, store.slug.current)
    }
`;

export const SETTINGS_QUERY = groq`
  *[_type == "settings"][0] {
    ...,
    navbar {
      ...,
      links[] {
        _key,
        title,
        "href": link -> slug.current
      }
    },
    footer {
      ...,
      links[] {
        _key,
        title,
        "href": link -> slug.current
      }
    }
  }
`;
