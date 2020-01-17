export function setup(CMS, { init }) {
  // https://www.netlifycms.org/docs/intro
  const config = {
    backend: {
      name: 'github',
      repo: 'basaltinc/knapsack',
      branch: 'develop',
      open_authoring: true,
      commit_messages: {
        create: 'docs: Create {{collection}} “{{slug}}”',
        update: 'docs: Update {{collection}} “{{slug}}”',
        delete: 'docs: Delete {{collection}} “{{slug}}”',
        uploadMedia: 'docs: Upload “{{path}}”',
        deleteMedia: 'docs: Delete “{{path}}”',
        openAuthoring: 'docs: "{{message}}"',
      },
    },
    site_url: 'https://www.knapsack.cloud',
    logo_url: 'https://www.knapsack.cloud/assets/knapsack-icon.png',
    publish_mode: 'editorial_workflow',
    squash_merges: true,
    media_folder: 'docs-site/static/assets',
    public_folder: '/assets',
    collections: [
      {
        name: 'docs',
        label: 'Docs',
        folder: 'docs',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
          },
          {
            label: 'ID',
            name: 'id',
            widget: 'string',
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
          },
        ],
      },
      {
        name: 'navs',
        label: 'Navs',
        files: [
          {
            label: 'Sidebar > More',
            name: 'sidebar-more',
            file: 'docs-site/sidebar-more.json',
            fields: [
              {
                label: 'More Info',
                name: 'More Info',
                widget: 'list',
                field: {
                  widget: 'string',
                  name: 'id',
                  label: 'Doc ID',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  init({
    config,
  });
  CMS.registerPreviewStyle(
    'https://unpkg.com/@knapsack/design-system@next/dist/ks-design-system.css',
  );
}
