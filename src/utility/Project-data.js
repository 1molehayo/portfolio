import filmhouse from 'assets/img//works/filmhouse.jpg';
import aiico from 'assets/img//works/aiico.jpg';
import spectranet from 'assets/img//works/spectranet.jpg';
import ebonylife from 'assets/img//works/ebonylife.jpg';
import ekitiwater from 'assets/img//works/ekitiwater.jpg';
import summitech from 'assets/img//works/summitech.png';
import flipeet from 'assets/img//works/flipeet.jpg';
import iecc from 'assets/img//works/iecc.jpg';
import estateintel from 'assets/img//works/estate-intel.png';
import flutterwaveweb from 'assets/img//works/flutterwave-website.png';
import flutterwave4biz from 'assets/img//works/flutterwave-for-business.png';
import flutterwavesupport from 'assets/img//works/flutterwave-support.png';
import mtnchamps from 'assets/img//works/mtnchamps.png';
import paymentlinks from 'assets/img//works/payment-links.png';
import propel from 'assets/img//works/propel-community.png';
import sendapp from 'assets/img//works/send-app.png';
import spencerzill from 'assets/img//works/spencerzill.jpg';

const projectData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    name: 'Estate Intel',
    category: ['Web design'],
    stack: ['HTML', 'JQuery', 'Sass', 'Bootstrap'],
    description: 'Power your Real Estate Deals with Data',
    image: estateintel,
    imageAlt: 'estate intel',
    url: 'https://estateintel.com/',
    altUrl: ''
  },
  {
    id: 7,
    name: 'SpencerZill',
    category: ['Web design'],
    stack: ['React', 'Sass', 'Framer motion'],
    description:
      'You can find SpencerZill in a variety of projects for local, worldwide brands and agencies',
    image: spencerzill,
    imageAlt: 'SpencerZill',
    url: 'https://spencerzill.com/',
    altUrl: ''
  },
  {
    id: 8,
    name: 'MTN Champs',
    category: ['Web design'],
    stack: ['Laravel', 'Vue', 'Sass'],
    description:
      'We are focused on discovering and developing athletic potential in Nigeria.',
    image: mtnchamps,
    imageAlt: 'MTN Champs',
    url: 'https://mtnchamps.com/',
    altUrl: ''
  },
  {
    id: 9,
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
    id: 10,
    name: 'Aiico Plc',
    category: ['Web design'],
    stack: ['Angular', 'Sass', 'Ant design', 'Joomla', 'JQuery'],
    description:
      'Aiico is a financial services group with market leading positions in its key business lines; insurance, pensions management, health maintenance and asset management',
    image: aiico,
    imageAlt: 'aiico',
    url: 'https://www.aiicoplc.com/',
    altUrl: ''
  },
  {
    id: 11,
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
    id: 12,
    name: 'Flutterwave Support',
    category: ['Web design'],
    stack: ['Nuxt.js', 'Redux', 'Sass', 'Contentful CMS'],
    description: "We'd like to hear from you",
    image: flutterwavesupport,
    imageAlt: 'flutterwave support',
    url: 'https://flutterwave.com/support',
    altUrl: ''
  },
  {
    id: 13,
    name: 'Flutterwave Payment Links',
    category: ['Web design'],
    stack: ['Nuxt.js', 'Redux', 'Sass', 'Node.js'],
    description: 'Collect payments in minutes, without a line of code',
    image: paymentlinks,
    imageAlt: 'flutterwave payment links',
    url: 'https://flutterwave.com/pay/olusegunomilabutrtk',
    altUrl: ''
  },
  {
    id: 14,
    name: 'Flutterwave For Business',
    category: ['Web design'],
    stack: ['Nuxt.js', 'Redux', 'Sass', 'Node.js'],
    description: 'Send money to anyone or business globally',
    image: flutterwave4biz,
    imageAlt: 'flutterwave for business',
    url: 'https://app.flutterwave.com/',
    altUrl: ''
  },
  {
    id: 15,
    name: 'Propel',
    category: ['Web design'],
    stack: ['Laravel', 'Vue', 'Sass', 'Bootstrap'],
    description:
      'Find your dream job, discover perks, and access services through your community today.',
    image: propel,
    imageAlt: 'propel',
    url: 'https://propel.community/',
    altUrl: ''
  },
  {
    id: 16,
    name: 'Send App',
    category: ['Web design'],
    stack: ['Nuxt.js', 'Redux', 'Sass', 'Node.js'],
    description:
      'Make international transfers to local bank accounts and mobile money wallets.',
    image: sendapp,
    imageAlt: 'send app',
    url: 'https://send.flutterwave.com/',
    altUrl: ''
  },
  {
    id: 17,
    name: 'Flutterwave website',
    category: ['Web design'],
    stack: ['Nuxt.js', 'Redux', 'Sass', 'Node.js'],
    description: 'Endless possibilities for all',
    image: flutterwaveweb,
    imageAlt: 'flutterwave website',
    url: 'https://flutterwave.com/',
    altUrl: ''
  }
];

export default projectData;
