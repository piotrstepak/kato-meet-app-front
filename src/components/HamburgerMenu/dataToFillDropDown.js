//data to create buttons with dropdown list or
// nested dropdown list with more buttons :D

export const contactLinks = [
    {
        path: '#facebook',
        name: 'facebook'
    },
    {
        path: '#instagram',
        name: 'instagram'
    },
    {
        path: '#email',
        name: 'email'
    }
]

export const legalInformationLinks = [
    {
        path: '/privacy-policy',
        name: 'polityka prywatności'
    },
    {
        path: '/regulations',
        name: 'regulamin'
    }
]

export const moreLinks = [
    {
        path: '/mission',
        name: 'misja'
    },
    {
        path: '/how-to-start',
        name: 'jak zacząć'
    },
    {
        path: '/application',
        name: 'aplikacja'
    }
]

export const moreButtons = [
    {
        name: 'kontakt',
        links: contactLinks
    },
    {
        name: 'informacje prawne',
        links: legalInformationLinks
    }
]
