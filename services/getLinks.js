export const links = [
  {
    categories_slugs: ['productivity'],
    name: 'Kanbanote',
    description: 'Evernote as a Kanban board',
    url: 'https://www.kanbanote.com',
    icon: '/images/logos/kanban.png'
  },
  {
    categories_slugs: ['open-source'],
    name: 'Darkmode.js',
    description: 'Add a dark-mode / night-mode to your website in a few seconds',
    url: 'https://darkmodejs.learn.uno/',
    icon: '/images/logos/darkmode.png'
  }
]

export function getLinks(slug) {
  return links.filter((item) => {
    return item.categories_slugs.includes(slug)
  })
}
