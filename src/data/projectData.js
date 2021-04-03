import stanlabStudent from '../assets/stanlab_student/dashboardmain.png'
import stanlabTeacher from '../assets/stanlab_teacher/Welcome.png'
import farmCorps from '../assets/Farmcorps/farmcorps.png'
import Jelight from '../assets/JetLight/jetlight.png'
import emaily from '../assets/github/emaily.png'
import vidly from '../assets/github/vidly.png'
import stanlabTeacher1 from '../assets/stanlab_teacher/SIgnUp.png'
import stanlabTeacher2 from '../assets/stanlab_teacher/Students.png'
import stanlabTeacher3 from '../assets/stanlab_teacher/Teacher_Dashboard.png'
import stanlabStudent1 from '../assets/stanlab_student/loginstudent.png'
import stanlabStudent2 from '../assets/stanlab_student/pricing_plan.png'
import stanlabStudent3 from '../assets/stanlab_student/signup.png'
import stanlabStudent4 from '../assets/stanlab_student/teachers_request.png'

const projectData = [{
        id: 0,
        title: 'StanLab Student App',
        imageUrl: stanlabStudent,
        status: 'Fresh',
        technologies: ['Reactjs', 'Redux', 'Nodejs', 'Expressjs'],
        details: {
            description: 'Website developed to manage students for stanlab',
            moreTech: [
                'MongoDB',
                'Stripe',
                'Sendgrid',
                'Bootstrap',
                'Json web token (JWt)',
            ],
            link: 'https://stanlab-student-app.herokuapp.com/',
            status: 'development',
            githubUrl: '',
            images: [
                stanlabStudent1,
                stanlabStudent2,
                stanlabStudent3,
                stanlabStudent4,
            ],
        },
    },
    {
        id: 1,
        title: 'StanLab Teacher App',
        imageUrl: stanlabTeacher,
        status: 'Fresh',
        technologies: ['Reactjs', 'Redux', 'Nodejs', 'Expressjs'],
        details: {
            description: 'Website developed to manage teachers for stanlab',
            moreTech: [
                'MongoDB',
                'Stripe',
                'Sendgrid',
                'Bootstrap',
                'Json web token (JWt)',
            ],
            link: 'https://stanlab-teacher-app.herokuapp.com/',
            status: 'development',
            githubUrl: '',
            images: [stanlabTeacher1, stanlabTeacher2, stanlabTeacher3],
        },
    },
    {
        id: 2,
        title: 'Farmcorps',
        imageUrl: farmCorps,
        status: '',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel'],
        details: {
            description: 'Website developed to connect local farmers and offtakers',
            moreTech: ['Bootstrap'],
            link: 'http://farmcorps.net/',
            status: 'production',
            githubUrl: '',
            images: [],
        },
    },
    {
        id: 3,
        title: 'JetLight',
        imageUrl: Jelight,
        status: 'Contract',
        technologies: ['Reactjs', 'CSS', 'Bootstrap', 'Nodejs'],
        details: {
            description: 'Website developed to sell inverters',
            moreTech: [],
            link: '',
            status: 'production',
            githubUrl: '',
            images: [],
        },
    },
    {
        id: 4,
        title: 'Vidly',
        imageUrl: vidly,
        statusBgColor: 'redBg',
        status: 'Github',
        technologies: ['Reactjs', 'CSS', 'Bootstrap', 'Nodejs', 'expressjs'],
        details: {
            description: 'An imaginary video rental serve web application build from scratch after taking nodejs course',
            moreTech: ['Json web token (JWt)', 'React Router'],
            link: 'https://stark-chamber-40000.herokuapp.com',
            status: 'Practice',
            githubUrl: 'https://github.com/drlsv91/node_course',
            images: [],
        },
    },
    {
        id: 5,
        title: 'Emaily',
        imageUrl: emaily,
        statusBgColor: 'redBg',
        status: 'Github',
        technologies: ['Reactjs', 'CSS', 'Bootstrap', 'Nodejs', 'expressjs'],
        details: {
            description: 'An imaginary Email messaging web application build from scratch after taking nodejs course',
            moreTech: ['Json web token (JWt)', 'React Router'],
            link: 'https://mailnodeapp.herokuapp.com/surveys#',
            status: 'Practice',
            githubUrl: 'https://github.com/drlsv91/maily-app.github.io',
            images: [],
        },
    },
]

export default projectData