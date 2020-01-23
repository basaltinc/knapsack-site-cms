const { fetch } = window;

/**
 * @param {import("netlify-cms").CMS} CMS - Main CMS
 */
export async function setup(CMS, { init }) {
  const branch = 'develop';
  const collections = [];

  function createCollection({ name, label, folder }) {
    return {
      name,
      label,
      folder,
      create: true,
      slug: '{{slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    };
  }

  /**
   * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value should be "submodule". This behavior exists in API v3 for backwards compatibility purposes. In the next major version of the API, the type will be returned as "submodule".
   */
  const isDir = ({ type }) => type === 'dir' || type === 'submodule';

  /**
   * @link https://developer.github.com/v3/repos/contents/#get-contents
   * @type {{ type: 'dir' | 'file', name: string, path: string }[]}
   */
  const folderList = await fetch(
    `https://api.github.com/repos/basaltinc/knapsack/contents?ref=${branch}`,
  ).then(res => res.json());

  const docsFolder = folderList.find(f => f.name === 'docs');

  const docsListRes = await fetch(
    `${docsFolder.git_url}?recursive=1`,
  ).then(res => res.json());

  /**
   * @type {{ path: string, type: 'blob' | 'tree' }[]}
   */
  const docsList = docsListRes.tree;

  const docFolders = docsList.filter(d => d.type === 'tree');

  // /**
  //  * @link https://developer.github.com/v3/repos/contents/#get-contents
  //  * @type {{ type: 'dir' | 'file', name: string, path: string }[]}
  //  */
  // const docs = await fetch(
  //   `https://api.github.com/repos/basaltinc/knapsack/contents/docs?ref=${branch}`,
  // ).then(res => res.json());

  // const dirs = docs.filter(isDir);

  docFolders.forEach(dir => {
    const name = dir.path.replace(/\//g, '--');
    collections.push(
      createCollection({
        name,
        label: name,
        folder: `docs/${dir.path}`,
      }),
    );
  });

  // collections.push(
  //   createCollection({
  //     name: 'docs',
  //     label: 'Docs',
  //     folder: 'docs',
  //   }),
  // );

  const navCollection = {
    name: 'navs',
    label: 'Navs',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Sidebar > More',
        name: 'sidebar-more',
        file: 'docs-site/sidebar-more.json',
        fields: [
          {
            widget: 'object',
            name: 'docs',
            fields: [
              {
                widget: 'list',
                label: 'Categories',
                allow_add: true,
                fields: [
                  {
                    widget: 'string',
                    label: 'Label',
                    name: 'label',
                  },
                  // {
                  //   widget: 'list',
                  //   label: 'Items',
                  //   name: 'items',
                  //   allow_add: true,
                  //   fields: [
                  //     {
                  //       name: 'id',
                  //       widget: 'string',
                  //       hint: 'The ID of the docs page you want here',
                  //     },
                  //     {
                  //       name: 'type',
                  //       widget: 'select',
                  //       options: ['doc', 'category'],
                  //     },
                  //   ],
                  // },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // collections.push(navCollection);

  // console.log({ docs, dirs, collections });

  /**
   * @link https://www.netlifycms.org/docs/intro
   */
  const config = {
    backend: {
      name: 'github',
      repo: 'basaltinc/knapsack',
      branch,
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
    collections,
  };

  init({
    config,
  });
  CMS.registerPreviewStyle(
    'https://unpkg.com/@knapsack/design-system@next/dist/ks-design-system.css',
  );
}
