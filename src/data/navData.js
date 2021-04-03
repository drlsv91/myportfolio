import { Person, Markunread, AccountBox, Work } from '@material-ui/icons'

const navData = [{
        id: 1,
        icon: < Person className = "material-icon" / > ,
        name: 'Profile',
        isActive: true,
    },
    {
        id: 2,
        icon: < AccountBox className = "material-icon" / > ,
        name: 'Resume',
        isActive: false,
    },
    {
        id: 3,
        icon: < Work className = "material-icon" / > ,
        name: 'Projects',
        isActive: false,
    },
    {
        id: 4,
        icon: < Markunread className = "material-icon" / > ,
        name: 'Contact',
        isActive: false,
    },
]

export default navData