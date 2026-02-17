import {
  menuDecorativeDessert,
  menuDecorativeDrinks,
  menuDecorativeMain,
  menuDecorativeStarter
} from 'src/assets/Images';

export interface MenuItem {
  name: string;
  description: string;
  kCal: number;
  price: number;
}

export interface MenuSection {
  id: number;
  title: string;
  decorativeImg: string;
  items: MenuItem[];
}

const fullMenuMockData: MenuSection[] = [
  {
    id: 1,
    title: 'Starter Menu',
    decorativeImg: menuDecorativeStarter,
    items: [
      {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        kCal: 560,
        price: 32
      },
      {
        name: 'Berries and creme tart',
        description: 'Gorgonzola, ricotta, mozzarella, taleggio',
        kCal: 700,
        price: 43
      },
      {
        name: 'Tormentoso Bush Pizza Pintoage',
        description: 'Ground cumin, avocados, peeled and cubed',
        kCal: 1000,
        price: 14
      },
      {
        name: 'Spicy Vegan Potato Curry',
        description: 'Spreadable cream cheese, crumbled blue cheese',
        kCal: 560,
        price: 35
      }
    ]
  },
  {
    id: 2,
    title: 'Main Course',
    decorativeImg: menuDecorativeMain,
    items: [
      {
        name: 'Optic Big Breakfast Combo Menu',
        description: 'Toasted French bread topped with romano, cheddar',
        kCal: 560,
        price: 32
      },
      {
        name: 'Cashew Chicken With Stir-Fry',
        description: 'Gorgonzola, ricotta, mozzarella, taleggio',
        kCal: 700,
        price: 43
      },
      {
        name: ' Vegetables & Green Salad',
        description: 'Ground cumin, avocados, peeled and cubed',
        kCal: 1000,
        price: 14
      },
      {
        name: 'Spicy Vegan Potato Curry',
        description: 'Spreadable cream cheese, crumbled blue cheese',
        kCal: 560,
        price: 35
      }
    ]
  },
  {
    id: 3,
    title: 'Dessert',
    decorativeImg: menuDecorativeDessert,
    items: [
      {
        name: 'Fig and lemon cake',
        description: 'Toasted French bread topped with romano, cheddar',
        kCal: 560,
        price: 32
      },
      {
        name: 'Creamy mascarpone cake',
        description: 'Gorgonzola, ricotta, mozzarella, taleggio',
        kCal: 700,
        price: 43
      },
      {
        name: 'Pastry, blueberries, lemon juice',
        description: 'Ground cumin, avocados, peeled and cubed',
        kCal: 1000,
        price: 14
      },
      {
        name: 'Pain au chocolat',
        description: 'Spreadable cream cheese, crumbled blue cheese',
        kCal: 560,
        price: 35
      }
    ]
  },
  {
    id: 4,
    title: 'Drinks',
    decorativeImg: menuDecorativeDrinks,
    items: [
      {
        name: 'Caffè macchiato',
        description: 'Toasted French bread topped with romano, cheddar',
        kCal: 560,
        price: 32
      },
      {
        name: 'Aperol Spritz Capacianno',
        description: 'Gorgonzola, ricotta, mozzarella, taleggio',
        kCal: 700,
        price: 43
      },
      {
        name: 'Caffe Latte Campuri',
        description: 'Ground cumin, avocados, peeled and cubed',
        kCal: 1000,
        price: 14
      },
      {
        name: 'Tormentoso BushTea Pintoage',
        description: 'Spreadable cream cheese, crumbled blue cheese',
        kCal: 560,
        price: 35
      }
    ]
  }
];

export default fullMenuMockData;
