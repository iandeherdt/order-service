import { Router, Request, Response } from 'express';

export default Router({ mergeParams: true })
  .get('/', (_req:Request, res: Response, next: any) => {
    try {
      res.json(flavours);
    } catch (err) {
      next(err);
    }
  },
);

const flavours = [
  {
    id: 1,
    name: 'citrus',
    botanicals: [
      {
        id: 1,
        name: 'lemon zest',
      },
      {
        id: 2,
        name: 'lemon grass',
      },
      {
        id: 3,
        name: 'seville orange zest',
      },
      {
        id: 4,
        name: 'kaffir lime',
      },
      {
        id: 5,
        name: 'grapefruit zest',
      },
      {
        id: 6,
        name: 'lime zest',
      },
      {
        id: 7,
        name: 'sweet orange zest',
      },
    ],
  },
  {
    id: 2,
    name: 'floral',
    botanicals: [
      {
        id: 9,
        name: 'rose petals',
      },
      {
        id: 10,
        name: 'hibiscus',
      },
      {
        id: 11,
        name: 'chamomile',
      },
      {
        id: 12,
        name: 'rose hip',
      },
      {
        id: 13,
        name: 'lavender',
      },
      {
        id: 14,
        name: 'lemon balm',
      },
      {
        id: 15,
        name: 'pot marigold',
      },
      {
        id: 16,
        name: 'elder blossom',
      },
      {
        id: 17,
        name: 'orange blossom',
      },
      {
        id: 19,
        name: 'poppy',
      },
    ],
  },
  {
    id: 3,
    name: 'fruity',
    botanicals: [
      {
        id: 21,
        name: 'elderberry',
      },
      {
        id: 22,
        name: 'hawthorn berry',
      },
      {
        id: 23,
        name: 'physalis',
      },
      {
        id: 24,
        name: 'cucumber',
      },
    ],
  },
  {
    id: 4,
    name: 'herbal - green notes',
    botanicals: [
      {
        id: 26,
        name: 'thyme',
      },
      {
        id: 30,
        name: 'mint',
      },
      {
        id: 31,
        name: 'cilantro',
      },
      {
        id: 32,
        name: 'olives',
      },
      {
        id: 33,
        name: 'bay leaf',
      },
      {
        id: 34,
        name: 'hawthorn berry',
      },
      {
        id: 63,
        name: 'blessed thistle',
      },
    ],
  },
  {
    id: 5,
    name: 'piney',
    botanicals: [
      {
        id: 36,
        name: 'rosemary',
      },
      {
        id: 37,
        name: 'juniper',
      },
      {
        id: 38,
        name: 'young pine buds',
      },
      {
        id: 39,
        name: 'young pine needles',
      },
    ],
  },
  {
    id: 6,
    name: 'spicy - aromatic',
    botanicals: [
      {
        id: 40,
        name: 'nutmeg',
      },
      {
        id: 42,
        name: 'cardamom',
      },
      {
        id: 43,
        name: 'cassia bark',
      },
      {
        id: 44,
        name: 'frankincense',
      },
      {
        id: 45,
        name: 'myrrh',
      },
      {
        id: 46,
        name: 'dragon blood',
      },
      {
        id: 47,
        name: 'coriander',
      },
      {
        id: 49,
        name: 'clove',
      },
    ],
  },
  {
    id: 7,
    name: 'spicy - heat',
    botanicals: [
      {
        id: 50,
        name: 'allspice',
      },
      {
        id: 51,
        name: 'pink pepper',
      },
      {
        id: 53,
        name: 'timut pepper',
      },
      {
        id: 54,
        name: 'grains of selim',
      },
      {
        id: 55,
        name: 'grains of paradise',
      },
      {
        id: 56,
        name: 'cubed berry',
      },
      {
        id: 57,
        name: 'szechuan pepper',
      },
    ],
  },
  {
    id: 8,
    name: 'sweet earthy tones',
    botanicals: [
      {
        id: 58,
        name: 'liquorice',
      },
      {
        id: 62,
        name: 'angelica',
      },
    ],
  },
];
