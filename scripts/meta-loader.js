fetch('/config/meta.json')
  .then(res => res.json())
  .then(meta => {
    const head = document.head;

    // Helper
    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      head.appendChild(el);
    };

    // Basic Meta
    add('meta', { name: 'title', content: meta.site.title });
    add('meta', { name: 'description', content: meta.site.description });
    add('meta', { name: 'keywords', content: meta.seo.keywords.join(', ') });
    add('meta', { name: 'robots', content: meta.seo.robots });
    add('meta', { name: 'language', content: meta.site.language });

    // Open Graph
    add('meta', { property: 'og:type', content: 'website' });
    add('meta', { property: 'og:url', content: meta.site.url });
    add('meta', { property: 'og:title', content: meta.site.title });
    add('meta', { property: 'og:description', content: meta.site.description });
    add('meta', { property: 'og:image', content: meta.social.image });

    // Twitter
    add('meta', { name: 'twitter:card', content: meta.social.twitter_card });
    add('meta', { name: 'twitter:title', content: meta.site.title });
    add('meta', { name: 'twitter:description', content: meta.site.description });
    add('meta', { name: 'twitter:image', content: meta.social.image });
    add('meta', { name: 'twitter:creator', content: meta.social.twitter_handle });
  })
  .catch(console.error);
