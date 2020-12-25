export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fe5e03dd3fff9cd41fec289',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p1pupojj',
                  apiId: '5f613a2d-fac9-470c-8dd4-495f4665623f'
                },
                {
                  buildHookId: '5fe5e03e11f3288940c9c9e5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-giq7k86e',
                  apiId: '0ea125eb-8193-4891-9ab4-1acdb50bebb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dawnerdawn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-giq7k86e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
