import { IClients, IFaq, IHeaders, IProducts } from "../type"

import client1 from '../public/assets/images/client1.png';
import client2 from '../public/assets/images/client2.png';
import client3 from '../public/assets/images/client3.png';
import client4 from '../public/assets/images/client4.png';
import client5 from '../public/assets/images/client5.png';
import client6 from '../public/assets/images/client6.png';
import client7 from '../public/assets/images/client7.png';
import client8 from '../public/assets/images/client8.png';

import dataAnalystics from '../public/assets/images/data-analytics.jpg';
import enterprise from '../public/assets/images/enterprise.jpg';
import machineLearning from '../public/assets/images/machine-learning.png';
import systemProgramming from '../public/assets/images/system-programming.jpg';
import webApp from '../public/assets/images/web-app.png';
import rendering from '../public/assets/images/3d.jpg';


export const headers:IHeaders[] = [
    {
        name: 'Home'
    },
    {
        name: 'About'
    },
    {
        name: 'Products'
    },
    {
        name: 'Resources'
    },
    {
        name: 'Careers'
    },
    {
        name: 'Contact'
    },
]

export const clients = [
    {
        image_path: client1,
        name: 'client1',
    },
    {
        image_path: client2,
        name: 'client2',
    },
    {
        image_path: client5,
        name: 'client5',
    },
    {
        image_path: client4,
        name: 'client4',
    },
    {
        image_path: client6,
        name: 'client6',
    },
    {
        image_path: client1,
        name: 'client7',
    },
    {
        image_path: client8,
        name: 'client8',
    },
    {
        image_path: client3,
        name: 'client3',
    },
]

export const products:IProducts[] = [
    {
        id: 1,
        name: 'Enterprise Architecture',
        title: 'Complex Yet High Performance',
        description: 'Lumen simulates light bouncing off of surfaces dynamically, providing incredibly realistic multi-bounce indirect lighting, sky lighting, and reflections in the huge open world.',
        image_path: enterprise
    },
    {
        id: 2,
        name: 'System Programming',
        title: 'Updated to Current Times',
        description: 'World Partition automatically divides large maps into a grid and streams the necessary cells, making it easier to build and manage massive open worlds like the city you see in the demo.',
        image_path: systemProgramming
    },
    {
        id: 3,
        name: 'Web & Mobile',
        title: 'Fluid Experience Everywhere',
        description: 'Nanite renders this vast city environment at unprecedented level of detail, from buildings with intricately carved moldings and reliefs, to chain link fences, to dense traffic filled with thousands of cars, all modelled down to the nuts and bolts.',
        image_path: webApp
    },
    {
        id: 4,
        name: 'Machine Learning',
        title: 'Growing Neurals Within',
        description: 'Unreal Engine???s high-performance physics system is used to achieve cinematic-quality levels of destruction in real time and simulate the movement of cloth, hair, vehicles, and more.',
        image_path: machineLearning
    },
    {
        id: 5,
        name: '3D Rendering',
        title: 'Visualization is the Way',
        description: 'The city in the experience is procedurally generated by combining the power of Houdini and UE5. This enables teams to work at speed and scale, significantly reducing the number of people needed to create a large open world.',
        image_path: rendering
    },
    {
        id: 6,
        name: 'Data Analytics',
        title: 'Understanding Data Game',
        description: 'A new rules-based data structure system ingests the Houdini point cloud of the city and enables the huge dataset to be managed at speed in UE5. ',
        image_path: dataAnalystics
    },
]

export const faqs:IFaq[] = [
    {
        title: 'The A-Team',
        subheading: 'Swimming is awesome, but we make boats - the same way we build solutions that dwarf our challenges. ',
        description: 'Our assorted team of industry leaders envision what\'s needed tomorrow and simplifies them today. Being multidisciplinary in their expertise, developing solutions never feels like work at all. ',
        buttons: ['Meet Our Team', 'What the Tech']
    },
    {
        title: 'Wanna know how we do it?',
        subheading: 'We present you the secret sauce',
        description: 'Discover our all-encompassing roadmap for each department and the progressive role you play in it. You\'ll also get a clear sense of our creative collaboration among teams to come up with world-class products',
        buttons: ['Play Book']
    },
    {
        title: 'Community Engement',
        subheading: 'Doing our share by giving it back',
        description: 'Neoito Learning program is for programmers and graduates who have the intrest to learn the latest web development skills',
        buttons: ['Nullcast', 'Open Source']
    }
]