import { getAssetPath } from '../utils/assetPath';

// Personal Work Categories Data
export const personalData = [
  {
    id: 'brand-concepts',
    number: '01',
    title: 'BRAND CONCEPTS',
    subtitle: 'Exploring visual identities, branding systems, and creative directions for imagined brands.',
    shortDescription: 'Exploring visual identities, branding systems, and creative directions for imagined brands.',
    items: [
      { 
        id: 'bc-1', 
        title: '01 — DAISY GARDEN', 
        category: 'Brand Identity & Stationery', 
        description: 'A stationery brand concept inspired by handwritten notes, playful florals, and thoughtful paper goods.',
        image: getAssetPath('/images/personal/brand-concepts/01-daisy-garden.jpg') 
      },
      { 
        id: 'bc-2', 
        title: '02 — PLAYDATE', 
        category: 'Children’s Toy Brand Identity', 
        description: 'A kids’ toy brand concept creating playful, imaginative toys designed with more thoughtful and sustainable materials.',
        image: getAssetPath('/images/personal/brand-concepts/02-playdate.jpg') 
      },
      { 
        id: 'bc-3', 
        title: '03 — CIAO!', 
        category: 'Gourmet Italian Food Branding', 
        description: 'An Italian gourmet food brand concept bringing together pasta, sauces, olive oils, and the joy of Italian dining.',
        image: getAssetPath('/images/personal/brand-concepts/03-ciao-pasta.jpg') 
      },
      { 
        id: 'bc-4', 
        title: '04 — HOLY SIP', 
        category: 'Cold-Pressed Juice Beverage Branding', 
        description: 'A fresh juice brand concept serving vibrant, refreshing juices in reusable glass bottles.',
        image: getAssetPath('/images/personal/brand-concepts/04-holy-sip.jpg') 
      },
      { 
        id: 'bc-5', 
        title: '05 — FLEUR', 
        category: 'Floral & Botanical Brand Identity', 
        description: 'A modern florist brand concept bringing together fresh blooms, thoughtful arrangements, and an elegant floral identity.',
        image: getAssetPath('/images/personal/brand-concepts/05-fleur.jpg') 
      }
    ]
  },
  {
    id: 'others',
    number: '02',
    title: 'OTHERS',
    subtitle: 'A collection of visual design experiments across invitations, menus, and illustrated print designs.',
    shortDescription: 'A collection of visual design experiments across invitations, menus, and illustrated print designs.',
    items: [
      { 
        id: 'ot-1', 
        title: '01 — BIRTHDAY HOPPING LIST', 
        category: 'Poster Design', 
        description: 'An illustrated restaurant-hopping guide designed as a playful birthday experience.',
        image: getAssetPath('/images/personal/others/birthday-hopping-list.png'), 
        aspect: '3/4' 
      },
      { 
        id: 'ot-2', 
        title: '02 — MENU DESIGN', 
        category: 'Menu Layout', 
        description: 'A playful bakery menu combining hand-drawn food illustrations with clean visual layout.',
        image: getAssetPath('/images/personal/others/bakery-menu.png'), 
        aspect: '3/4' 
      },
      { 
        id: 'ot-3', 
        title: '03 — WEDDING INVITATION', 
        category: 'Print / Invitation', 
        description: 'A floral wedding invitation exploring elegant typography, illustration, and composition.',
        image: getAssetPath('/images/personal/others/wedding-invitation.jpg'), 
        aspect: '3/4' 
      }
    ]
  }
];
