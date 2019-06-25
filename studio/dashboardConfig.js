export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1222e71d4bf3ac4bd1bbf0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bvf2nxcm',
                  apiId: '8b638072-97a5-45e4-833a-61009632185a'
                },
                {
                  buildHookId: '5d1222e8256913d4078f6e80',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-35bsbryr',
                  apiId: '358be185-3771-4856-b4df-32e87df030d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/backendbox/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-35bsbryr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
