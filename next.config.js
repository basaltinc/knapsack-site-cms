const fs = require('fs');
const { join } = require('path');
const md = require('marked');
const matter = require('gray-matter');

const docs = fs
  .readdirSync(join(__dirname, 'docs'))
  .filter(f => f.endsWith('md'))
  .map(doc => {
    const results = matter(
      fs.readFileSync(join(__dirname, 'docs', doc)),
      'utf8',
    );
    return {
      ...results,
      content: md.parse(results.content),
      id: doc.replace('.md', ''),
    };
  });

module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    docs,
  },
  exportPathMap: defaultPathMap => {
    const pathMap = {
      ...defaultPathMap,
    };

    // now every file in `./docs` will be available at `/docs/file-name` <- if it was `docs/file-name.md`
    docs.forEach(doc => {
      pathMap[`/docs/${doc.id}`] = {
        page: '/docs',
        query: {
          item: doc.id,
        },
      };
    });

    return pathMap;
  },
};
