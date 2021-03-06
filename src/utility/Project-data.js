import filmhouse from 'assets/img//works/filmhouse.jpg';
import aiico from 'assets/img//works/aiico.jpg';
import spectranet from 'assets/img//works/spectranet.jpg';
import ebonylife from 'assets/img//works/ebonylife.jpg';
import osp from 'assets/img//works/osp.jpg';
import ekitiwater from 'assets/img//works/ekitiwater.jpg';
import hmb from 'assets/img//works/hmb.jpg';
import artisanbutchery from 'assets/img//works/artisanbutchery.jpg';
import summitech from 'assets/img//works/summitech.png';
import flipeet from 'assets/img//works/flipeet.jpg';
import remita from 'assets/img/works/remita.jpg';
import iecc from 'assets/img//works/iecc.jpg';
import corona from 'assets/img//works/corona.jpg';

const projectData = [
  {
    id: 1,
    name: 'Filmhouse Cinema',
    category: ['Web design'],
    stack: ['React', 'Redux', 'Sass', 'Bootstrap'],
    description:
      'Enhancing easy access to movie booking from your comfort zone.',
    image: filmhouse,
    imageAlt: 'filmhouse',
    url: 'https://filmhouseng.com/',
    altUrl: ''
  },
  {
    id: 2,
    name: 'Aiico Plc',
    category: ['Web design'],
    stack: ['Angular', 'Sass', 'Ant design'],
    description:
      'Aiico is a financial services group with market leading positions in its key business lines; insurance, pensions management, health maintenance and asset management',
    image: aiico,
    imageAlt: 'aiico',
    url: 'https://www.aiicoplc.com/',
    altUrl: ''
  },
  {
    id: 3,
    name: 'Spectranet Dealer',
    category: ['UI/UX'],
    stack: ['Sketch App'],
    description:
      'A mobile app that helps spectranet dealers and agents manage inventory, retail and wholesale of spectranet products',
    image: spectranet,
    imageAlt: 'spectranet',
    url: 'https://www.behance.net/gallery/80662861/Spectranet',
    altUrl: ''
  },
  {
    id: 4,
    name: 'Ebonylife Place',
    category: ['Web design', 'Mobile app'],
    stack: ['React', 'Redux', 'Sass', 'Bootstrap'],
    description:
      'A luxury entertainment resort with cinema, hotel, restaurant and space booking',
    image: ebonylife,
    imageAlt: 'ebonylife',
    url: 'https://ebonylifeplace.com/',
    altUrl: ''
  },
  {
    id: 5,
    name: 'OSP DPR',
    category: ['Mobile app'],
    stack: ['Fusetools', 'Javascript'],
    description:
      'The OSP (Offshore Safety Permit) Project was introduced by the DPR for Safety and Personnel Accountability of all offshore workers within the Nigerian Oil and Gas Industry.',
    image: osp,
    imageAlt: 'osp',
    url: 'https://play.google.com/store/apps/details?id=com.wael.dprosp.app',
    altUrl:
      'https://itunes.apple.com/us/app/offshore-safety-permit/id1441544052?mt=8'
  },
  {
    id: 6,
    name: 'Ekiti State Water Corporation',
    category: ['Mobile app'],
    stack: ['React native', 'Redux'],
    description:
      'The mobile application counterpart of the user management dashboard for customer support, profile management and bills payment.',
    image: ekitiwater,
    imageAlt: 'stabintel',
    url:
      'https://play.google.com/store/apps/details?id=com.ekitiwatercorporation',
    altUrl: ''
  },
  {
    id: 7,
    name: 'Hackman Microfinance Bank',
    category: ['UI/UX', 'Web design'],
    stack: ['Figma', 'React', 'Redux', 'Sass', 'Bootstrap', 'Ant Design'],
    description:
      'Your one stop app for all kinds of payment accept and track payments localy and internationally.',
    image: hmb,
    imageAlt: 'hmb',
    url: 'https://eazypay.hackmanmfb.com/',
    altUrl: ''
  },
  {
    id: 8,
    name: 'Artisan Butchery',
    category: ['Web design'],
    stack: ['HTML', 'Liquid', 'Sass', 'JQuery', 'Bootstrap'],
    description:
      'A web application that helps manages insurance policy registration and renewal',
    image: artisanbutchery,
    imageAlt: 'artisanbutchery',
    url: 'https://www.theartisanbutchery.ng/',
    altUrl: ''
  },
  {
    id: 9,
    name: 'Summitech Computing Ltd',
    category: ['Web design'],
    stack: ['React', 'Sass', 'GSAP', 'Bootstrap'],
    description:
      'At Summitech, we’re daily changing the way companies engage with their consumers by applying user-centric product design practices that solve real problems.',
    image: summitech,
    imageAlt: 'summitech',
    url: 'https://summitech.ng/',
    altUrl: ''
  },
  {
    id: 10,
    name: 'Flipeet',
    category: ['UI/UX'],
    stack: ['Figma'],
    description: 'A book vendor website',
    image: flipeet,
    imageAlt: 'flipeet',
    url: 'https://www.behance.net/gallery/80661767/Flipeet-Book-App',
    altUrl: ''
  },
  {
    id: 11,
    name: 'IECC Care',
    category: ['UI/UX'],
    stack: ['figma'],
    description:
      'IECC Care is a Premier Care Provider specialized in individualised personal care to meet service users holistic needs – physical, social and psychological wellbeing.',
    image: iecc,
    imageAlt: 'motomata',
    url: 'https://www.behance.net/gallery/80661573/IECC-Mobile-App',
    altUrl: ''
  },
  {
    id: 12,
    name: 'Remita',
    category: ['UI/UX', 'Web design'],
    stack: ['Photoshop', 'HTML/CSS', 'JQuery'],
    description:
      'Remita is an all-in-one mobile app that allows you switch between your personal and corporate profiles on your device so you authorise payments quickly.',
    image: remita,
    imageAlt: 'remita',
    url:
      'https://www.behance.net/gallery/80662637/Remita?tracking_source=project_owner_other_projects',
    altUrl: ''
  },
  //   {
  //     id: 13,
  //     name: 'Loopmi',
  //     category: ['Mobile app'],
  //     stack: ['Nativescript', 'CSS'],
  //     description:
  //       'LoopMi offers to take out the hassle involved in communication and access management in communities by providing a centralized and transparent platform for all stakeholders involved',
  //     image: loopmi,
  //     imageAlt: 'loopmi',
  //     url: 'https://play.google.com/store/apps/details?id=com.antwire.loopmi',
  //     altUrl:
  //       'https://iphone.apkpure.com/loopmi/com.antwire.loopmi?utm_source=APKPure&utm_medium=down_link'
  //   },
  {
    id: 14,
    name: 'Corona Multichoice',
    category: ['Web design'],
    stack: ['Angular', 'Sass', 'Bootstrap'],
    description:
      'A monitoring and tracking tool on the operation of certain field activities with valid reports and oversight of the field activities.',
    image: corona,
    imageAlt: 'corona',
    url: 'http://corona-fe-qa.s3-website-eu-west-1.amazonaws.com/home',
    altUrl: ''
  }
];

export default projectData;
