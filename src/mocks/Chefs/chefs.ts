import {
  chefEastwood,
  chefReadfroad,
  chefScoriesh,
  chefWilliam
} from 'src/assets/Images';

export interface Chef {
  img: string;
  alt: string;
  name: string;
  position: string;
}

/**
 * Mock data for chefs section
 * TODO: Replace with API call when backend is ready
 */
export const chefsMockData: Chef[] = [
  {
    img: chefEastwood,
    alt: 'ourChef.nameEastwood',
    name: 'ourChef.nameEastwood',
    position: 'ourChef.positionChiefChef'
  },
  {
    img: chefScoriesh,
    alt: 'ourChef.nameScoriesh',
    name: 'ourChef.nameScoriesh',
    position: 'ourChef.positionAssistantChef'
  },
  {
    img: chefWilliam,
    alt: 'ourChef.nameWilliam',
    name: 'ourChef.nameWilliam',
    position: 'ourChef.positionAdvertisingChef'
  },
  {
    img: chefReadfroad,
    alt: 'ourChef.nameReadfroad',
    name: 'ourChef.nameReadfroad',
    position: 'ourChef.positionChef'
  }
];
