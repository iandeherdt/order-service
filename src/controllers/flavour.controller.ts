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
        name: 'lemon zest\r\n',
      },
      {
        id: 2,
        name: 'lemon grass\r\n',
      },
      {
        id: 3,
        name: 'seville orange zest\r\n',
      },
      {
        id: 4,
        name: 'kaffir lime\r\n',
      },
      {
        id: 5,
        name: 'grapefruit zest\r\n',
      },
      {
        id: 6,
        name: 'lime zest\r\n',
      },
      {
        id: 7,
        name: 'sweet orange zest\r\n',
      },
    ],
  },
  {
    id: 2,
    name: 'floral',
    botanicals: [
      {
        id: 9,
        name: 'rose petals\r\n',
      },
      {
        id: 10,
        name: 'hibiscus',
      },
      {
        id: 11,
        name: 'chamomile\r\n',
      },
      {
        id: 12,
        name: 'rose hip\r\n',
      },
      {
        id: 13,
        name: '\r\nlavender',
      },
      {
        id: 14,
        name: 'lemon balm\r\n',
      },
      {
        id: 15,
        name: 'pot marigold\r\n',
      },
      {
        id: 16,
        name: 'elder blossom\r\n',
      },
      {
        id: 17,
        name: 'orange blossom\r\n',
      },
      {
        id: 19,
        name: '\r\npoppy',
      },
    ],
  },
  {
    id: 3,
    name: 'fruity',
    botanicals: [
      {
        id: 21,
        name: 'elderberry\r\n',
      },
      {
        id: 22,
        name: 'hawthorn berry\r\n',
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
        name: 'cilantro\r\n',
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
        name: 'hawthorn berry\r\n',
      },
      {
        id: 63,
        name: '\r\nblessed thistle',
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
        name: 'young pine buds\r\n',
      },
      {
        id: 39,
        name: 'young pine needles\r\n',
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
        name: 'cardamom\r\n',
      },
      {
        id: 43,
        name: 'cassia bark\r\n',
      },
      {
        id: 44,
        name: 'frankincense\r\n',
      },
      {
        id: 45,
        name: 'myrrh\r\n',
      },
      {
        id: 46,
        name: 'dragon blood\r\n',
      },
      {
        id: 47,
        name: 'coriander',
      },
      {
        id: 49,
        name: 'clove\r\n',
      },
    ],
  },
  {
    id: 7,
    name: 'spicy - heat',
    botanicals: [
      {
        id: 50,
        name: 'allspice\r\n',
      },
      {
        id: 51,
        name: 'pink pepper\r\n',
      },
      {
        id: 53,
        name: 'timut pepper\r\n',
      },
      {
        id: 54,
        name: 'grains of selim\r\n',
      },
      {
        id: 55,
        name: 'grains of paradise\r\n',
      },
      {
        id: 56,
        name: 'cubed berry\r\n',
      },
      {
        id: 57,
        name: 'szechuan pepper\r\n',
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
