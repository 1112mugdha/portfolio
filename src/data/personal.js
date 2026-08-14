import { getAssetPath } from '../utils/assetPath';

// Personal Work Categories Data
export const personalData = [
  {
    id: 'brand-concepts',
    number: '01',
    title: 'BRAND CONCEPTS',
    subtitle: 'Independent explorations of branding, visual identity, and creative concepts.',
    shortDescription: 'Independent explorations of branding, visual identity, and creative concepts.',
    items: [
      { 
        id: 'bc-1', 
        title: '01 — DAISY GARDEN', 
        category: 'Brand Identity & Stationery', 
        image: getAssetPath('/images/personal/brand-concepts/01-daisy-garden.jpg') 
      },
      { 
        id: 'bc-2', 
        title: '02 — PLAYDATE', 
        category: 'Children’s Toy Brand Identity', 
        image: getAssetPath('/images/personal/brand-concepts/02-playdate.jpg') 
      },
      { 
        id: 'bc-3', 
        title: '03 — CIAO! PASTA GOURMET', 
        category: 'Gourmet Italian Food Branding', 
        image: getAssetPath('/images/personal/brand-concepts/03-ciao-pasta.jpg') 
      },
      { 
        id: 'bc-4', 
        title: '04 — HOLY SIP', 
        category: 'Cold-Pressed Juice Beverage Branding', 
        image: getAssetPath('/images/personal/brand-concepts/04-holy-sip.jpg') 
      },
      { 
        id: 'bc-5', 
        title: '05 — FLEUR', 
        category: 'Floral & Botanical Brand Identity', 
        image: getAssetPath('/images/personal/brand-concepts/05-fleur.jpg') 
      }
    ]
  },
  {
    id: 'others',
    number: '02',
    title: 'OTHERS',
    subtitle: 'A collection of independent creative experiments and personal design projects.',
    shortDescription: 'A collection of independent creative experiments and personal design projects.',
    items: [
      { 
        id: 'ot-1', 
        title: '01 — BIRTHDAY HOPPING LIST', 
        category: 'Poster Design', 
        image: getAssetPath('/images/personal/others/birthday-hopping-list.png'), 
        aspect: '3/4' 
      },
      { 
        id: 'ot-2', 
        title: '02 — MENU DESIGN', 
        category: 'Menu Layout', 
        image: getAssetPath('/images/personal/others/bakery-menu.png'), 
        aspect: '3/4' 
      },
      { 
        id: 'ot-3', 
        title: '03 — WEDDING INVITATION', 
        category: 'Print / Invitation', 
        image: getAssetPath('/images/personal/others/wedding-invitation.jpg'), 
        aspect: '3/4' 
      }
    ]
  }
];
