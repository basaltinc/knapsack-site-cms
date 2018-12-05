const fs = require('fs');
const { join } = require('path');
const md = require('marked');
const matter = require('gray-matter');

function sortDocs(a, b) {
  if (a.data.order < b.data.order) return -1;
  if (a.data.order > b.data.order) return 1;
  return 0;
}

module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    docs: fs
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
      })
      .sort(sortDocs),
  },
};
