import { getAssetPath } from '../utils/assetPath';

// Assignments / Work Projects Data
export const projectsData = [
  {
    id: 'movie-posters',
    number: '01',
    title: 'MOVIE POSTERS',
    category: 'Poster Design / Visual Design',
    year: '2025',
    featured: true,
    shortDescription: 'A visual design project exploring movie posters through typography, composition, imagery, and visual storytelling.',
    about: 'A collection of poster design explorations created to experiment with typography, composition, visual hierarchy, imagery, and different visual moods. Each poster explores a different approach to communicating an idea through layout and visual storytelling.',
    idea: 'The projects focus on turning simple concepts into visually engaging posters. I experimented with type as a visual element, image placement, colour palettes, scale, and composition to create distinct visual identities for each piece.',
    process: 'The process involved exploring different layouts, typography combinations, imagery, colour palettes, and compositions before developing the final posters. I focused on creating designs that feel visually strong while still communicating the central idea clearly.',
    finalWork: 'The final collection includes three poster explorations with distinct visual directions, ranging from editorial and photographic compositions to typography-led designs.',
    tools: ['Canva', 'Adobe Photoshop', 'Adobe Illustrator'],
    heroImage: getAssetPath('/images/assignments/movie-posters/poster-03-sometimes.jpg'),
    gallery: [
      { id: 1, title: "DON'T WORRY DARLING", aspect: 'auto', image: getAssetPath('/images/assignments/movie-posters/poster-03-sometimes.jpg') },
      { id: 2, title: 'INSIDE OUT', aspect: 'auto', image: getAssetPath('/images/assignments/movie-posters/poster-01-fleur.png') },
      { id: 3, title: 'LA LA LAND', aspect: 'auto', image: getAssetPath('/images/assignments/movie-posters/poster-02-matcha.png') }
    ]
  },
  {
    id: 'cactus',
    number: '02',
    title: 'CACTUS',
    category: 'Branding & Visual Identity',
    year: '2025',
    featured: true,
    isGroupProject: true,
    groupLabel: 'GROUP PROJECT',
    shortDescription: 'A group branding project developing a sustainable fashion brand through visual identity, packaging, digital touchpoints, and brand applications.',
    about: 'Cactus is a sustainable fashion brand concept developed as a group branding project. The project focused on building a cohesive visual identity around sustainability, circularity, ethical production, and timeless design.',
    idea: 'The brand was built around the idea that style should not come at the cost of the planet. Inspired by the resilience and simplicity of the cactus, the identity combines earthy tones, organic textures, and minimal graphic elements to communicate a thoughtful and sustainable approach to fashion.',
    process: 'We explored the brand through moodboards, logo and brand-mark development, colour and typography studies, packaging concepts, clothing applications, and digital touchpoints. The visual system was then carried across the different brand materials to create a consistent identity.',
    finalWork: 'The final brand system includes the Cactus logo and brand mark, colour palette, typography, packaging, clothing applications, product tags, and a responsive website concept.',
    contribution: 'Contributed to the visual identity, branding, and design development of the Cactus brand concept.',
    tools: ['CANVA', 'ADOBE ILLUSTRATOR', 'ADOBE PHOTOSHOP'],
    heroImage: getAssetPath('/images/assignments/cactus/cactus-site.png'),
    gallery: [
      { 
        id: 'brand-identity', 
        title: 'Brand Identity', 
        description: 'Logo, brand mark, colour palette and typography',
        image: getAssetPath('/images/assignments/cactus/cactus-brandboard-official.png') 
      },
      { 
        id: 'website-concept', 
        title: 'Website Concept', 
        description: 'Applying the Cactus visual identity across digital touchpoints',
        image: getAssetPath('/images/assignments/cactus/cactus-site.png') 
      },
      { 
        id: 'visual-direction', 
        title: 'Visual Direction', 
        description: 'Moodboard and visual exploration',
        image: getAssetPath('/images/assignments/cactus/cactus-mood.png') 
      },
      { 
        id: 'packaging', 
        title: 'Packaging', 
        description: 'Sustainable packaging and product presentation',
        image: getAssetPath('/images/assignments/cactus/cactus-packaging.png') 
      },
      { 
        id: 'brand-touchpoints', 
        title: 'Brand Touchpoints', 
        description: 'Product tags and supporting brand details',
        image: getAssetPath('/images/assignments/cactus/cactus-tag.png') 
      },
      { 
        id: 'clothing-application', 
        title: 'Clothing Application', 
        description: 'Extending the identity onto apparel and fabric',
        image: getAssetPath('/images/assignments/cactus/cactus-clothing.png') 
      }
    ]
  },
  {
    id: 'photo-essay',
    number: '03',
    title: 'PHOTO ESSAY',
    category: 'Photography / Editorial',
    year: '2025',
    featured: false,
    shortDescription: 'A photography project exploring campus life through a visual sequence, using composition and framing to create a narrative.',
    about: 'A photographic narrative project exploring visual storytelling through a sequence of photographs. The project uses a series of photographs to tell a visual story and convey emotion.',
    idea: 'Translating an emotional narrative into a cohesive visual sequence through photography, using composition, framing, light, colour, and visual details to build a story across multiple images.',
    process: 'The project involved planning and capturing the photographs, selecting and sequencing the strongest images, and refining the final visual presentation so that the photographs work together as a continuous narrative.',
    finalWork: 'A photo essay presented as a sequential visual narrative, with each photograph contributing to the overall story and emotional progression.',
    tools: ['DIGITAL PHOTOGRAPHY', 'ADOBE LIGHTROOM'],
    heroImage: '',
    gallery: [
      {
        id: 1,
        title: 'CAMPUS THROUGH A FRAME',
        subtitle: 'by: Mugdha Patnaik',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-01-cover.jpg')
      },
      {
        id: 2,
        title: 'In Focus',
        caption: 'Focus during lectures.',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-02-in-focus.jpg')
      },
      {
        id: 3,
        title: 'Shelves of Knowledge',
        caption: 'The library; a place for study and growth.',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-03-shelves.jpg')
      },
      {
        id: 4,
        title: 'A Moment to Pause',
        caption: 'A moment of relaxation and personal space.',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-04-moment-to-pause.jpg')
      },
      {
        id: 5,
        title: 'Midday Break',
        caption: 'Social moments at lunch.',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-05-midday-break.jpg')
      },
      {
        id: 6,
        title: 'Lost in Thought',
        caption: 'A playful pause in the day.',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-06-lost-in-thought.jpg')
      },
      {
        id: 7,
        title: 'Late Night Focus',
        caption: 'Focused moments under the quiet glow.',
        image: getAssetPath('/images/assignments/photo-essay/photo-essay-07-late-night-focus.jpg')
      }
    ]
  },
  {
    id: 'pygame',
    number: '04',
    title: 'PYGAME',
    subTitle: 'SKY HOPPER',
    category: 'Creative Coding / Game Design',
    year: '2025',
    featured: false,
    isGameProject: true,
    shortDescription: 'A game development project creating an interactive 2D arcade game using Python and Pygame, with player movement, obstacles, scoring, and collision detection.',
    about: 'A 2D arcade-style game developed using Python and Pygame, exploring basic game mechanics, player movement, collision detection, scoring, and interactive game states.',
    idea: 'A simple arcade game where the player controls a bird navigating through moving pipes while trying to achieve the highest possible score.',
    features: [
      'Player-controlled jumping',
      'Gravity-based movement',
      'Moving obstacles',
      'Collision detection',
      'Score tracking',
      'Start screen',
      'Game-over state',
      'Restart functionality',
      'Moving clouds and a simple illustrated game environment'
    ],
    process: 'I developed the game by building the player movement and gravity system first, then adding the pipe obstacles, collision detection, scoring system, game states, and visual elements.',
    tools: ['PYTHON', 'PYGAME'],
    gameEmbed: {
      src: getAssetPath('/games/sky-hopper/index.html')
    }
  },
  {
    id: 'character-design',
    number: '05',
    title: 'CHARACTER DESIGN',
    category: 'Illustration / Concept Art',
    year: '2025',
    featured: true,
    shortDescription: 'An original character design project exploring personality, expressions, visual identity, and character development through illustration.',
    about: 'Leo is an original character created as an exploration of personality-driven character design. He is an overthinking, slightly stressed leopard who copes with life through food. His chubby appearance, messy details, expressions, and snack-filled backpack were designed to reflect his personality.',
    idea: 'The character was built around the idea of an anxious overthinker who is usually caught in his own thoughts. His love for snacks became an important part of his personality and visual identity, helping make him feel more relatable, humorous, and recognisable.',
    process: 'The project began with initial character sketches and silhouette explorations before developing Leo\'s appearance and personality. I explored different poses, expressions, proportions, clothing, props, and small details such as his backpack and snacks to build a consistent character.',
    finalWork: 'The final character sheet brings together Leo\'s character design, initial sketches, expressions, poses, and props. It shows how his personality was translated into his visual appearance and supporting details.',
    tools: ['Canva', 'Digital Illustration'],
    heroImage: getAssetPath('/images/assignments/character-design/leo-character-sheet.jpg'),
    gallery: [
      { id: 1, title: 'LEO — FULL CHARACTER DESIGN SHEET', aspect: 'auto', image: getAssetPath('/images/assignments/character-design/leo-character-sheet.jpg') }
    ]
  },
  {
    id: 'others',
    number: '06',
    title: 'OTHERS',
    category: 'Miscellaneous Assignments',
    year: '2025',
    featured: false,
    shortDescription: 'A collection of creative course assignments exploring typography, editorial design, magazine layouts, and other visual experiments.',
    about: 'A collection of miscellaneous course assignments and creative experiments.',
    idea: 'Exploring diverse mediums, visual briefs, and hands-on exercises.',
    process: 'Iterative experimentation across print, digital, and interactive formats.',
    finalWork: 'A collection of experimental creative outputs across typography, editorial design, and visual composition.',
    tools: ['CANVA', 'ADOBE ILLUSTRATOR', 'ADOBE PHOTOSHOP'],
    heroImage: getAssetPath('/images/assignments/others/hero-placeholder.svg'),
    gallery: []
  }
];
