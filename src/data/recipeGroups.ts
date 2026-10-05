export type Ingredient = {
  id: string;
  name: string;
  image: string;
};

export type RecipeGroup = {
  id: string;
  title: string;
  ingredients: Ingredient[];
  containerImage: string;
  resultDrink: {
    id: string;
    name: string;
    image: string;
  };
};

const containerImage = '/assets/container/empty-bottle.png';

export const recipeGroups: RecipeGroup[] = [
  {
    id: 'jasmine-grape-cloud',
    title: 'Jasmine Grape Cloud',
    containerImage,
    ingredients: [
      { id: 'group-1-green-grape', name: 'Green Grape', image: '/assets/ingredients/group-1-green-grape.png' },
      { id: 'group-1-ice-cream', name: 'Ice Cream', image: '/assets/ingredients/group-1-ice-cream.png' },
      { id: 'group-1-jasmine-tea', name: 'Jasmine Tea', image: '/assets/ingredients/group-1-jasmine-tea.png' },
      { id: 'group-1-milk', name: 'Milk', image: '/assets/ingredients/group-1-milk.png' },
    ],
    resultDrink: {
      id: 'group-1-drink',
      name: 'Jasmine Grape Cloud',
      image: '/assets/drinks/group-1-drink.png',
    },
  },
  {
    id: 'pecan-coffee-cloud',
    title: 'Pecan Coffee Cloud',
    containerImage,
    ingredients: [
      { id: 'group-2-coffee', name: 'Coffee', image: '/assets/ingredients/group-2-coffee.png' },
      { id: 'group-2-cream', name: 'Cream', image: '/assets/ingredients/group-2-cream.png' },
      { id: 'group-2-milk', name: 'Milk', image: '/assets/ingredients/group-2-milk.png' },
      { id: 'group-2-pecan', name: 'Pecan', image: '/assets/ingredients/group-2-pecan.png' },
    ],
    resultDrink: {
      id: 'group-2-drink',
      name: 'Pecan Coffee Cloud',
      image: '/assets/drinks/group-2-drink.png',
    },
  },
  {
    id: 'strawberry-milk-pearl',
    title: 'Strawberry Milk Pearl',
    containerImage,
    ingredients: [
      { id: 'group-3-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-3-coconut-jelly.png' },
      { id: 'group-3-milk', name: 'Milk', image: '/assets/ingredients/group-3-milk.png' },
      { id: 'group-3-strawberry', name: 'Strawberry', image: '/assets/ingredients/group-3-strawberry.png' },
      { id: 'group-3-tapioca', name: 'Tapioca', image: '/assets/ingredients/group-3-tapioca.png' },
    ],
    resultDrink: {
      id: 'group-3-drink',
      name: 'Strawberry Milk Pearl',
      image: '/assets/drinks/group-3-drink.png',
    },
  },
  {
    id: 'classic-milk-tea',
    title: 'Classic Milk Tea',
    containerImage,
    ingredients: [
      { id: 'group-4-ice', name: 'Ice', image: '/assets/ingredients/group-4-ice.png' },
      { id: 'group-4-milk', name: 'Milk', image: '/assets/ingredients/group-4-milk.png' },
      { id: 'group-4-red-tea', name: 'Red Tea', image: '/assets/ingredients/group-4-red-tea.png' },
      { id: 'group-4-tapioca', name: 'Tapioca', image: '/assets/ingredients/group-4-tapioca.png' },
    ],
    resultDrink: {
      id: 'group-4-drink',
      name: 'Classic Milk Tea',
      image: '/assets/drinks/group-4-drink.png',
    },
  },
  {
    id: 'grape-cream-cooler',
    title: 'Grape Cream Cooler',
    containerImage,
    ingredients: [
      { id: 'group-5-cream', name: 'Cream', image: '/assets/ingredients/group-5-cream.png' },
      { id: 'group-5-green-grape', name: 'Green Grape', image: '/assets/ingredients/group-5-green-grape.png' },
      { id: 'group-5-ice', name: 'Ice', image: '/assets/ingredients/group-5-ice.png' },
      { id: 'group-5-purple', name: 'Purple Grape', image: '/assets/ingredients/group-5-purple.png' },
    ],
    resultDrink: {
      id: 'group-5-drink',
      name: 'Grape Cream Cooler',
      image: '/assets/drinks/group-5-drink.png',
    },
  },
  {
    id: 'passion-lemon-jelly',
    title: 'Passion Lemon Jelly',
    containerImage,
    ingredients: [
      { id: 'group-6-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-6-coconut-jelly.png' },
      { id: 'group-6-ice', name: 'Ice', image: '/assets/ingredients/group-6-ice.png' },
      { id: 'group-6-passion-fruit', name: 'Passion Fruit', image: '/assets/ingredients/group-6-passion-fruit.png' },
      { id: 'group-6-yellow-lemon', name: 'Yellow Lemon', image: '/assets/ingredients/group-6-yellow-lemon.png' },
    ],
    resultDrink: {
      id: 'group-6-drink',
      name: 'Passion Lemon Jelly',
      image: '/assets/drinks/group-6-drink.png',
    },
  },
  {
    id: 'strawberry-yakult-jelly',
    title: 'Strawberry Yakult Jelly',
    containerImage,
    ingredients: [
      { id: 'group-7-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-7-coconut-jelly.png' },
      { id: 'group-7-ice', name: 'Ice', image: '/assets/ingredients/group-7-ice.png' },
      { id: 'group-7-strawberry', name: 'Strawberry', image: '/assets/ingredients/group-7-strawberry.png' },
      { id: 'group-7-yakult', name: 'Yakult', image: '/assets/ingredients/group-7-yakult.png' },
    ],
    resultDrink: {
      id: 'group-7-drink',
      name: 'Strawberry Yakult Jelly',
      image: '/assets/drinks/group-7-drink.png',
    },
  },
  {
    id: 'mango-pomelo-coconut',
    title: 'Mango Pomelo Coconut',
    containerImage,
    ingredients: [
      { id: 'group-8-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-8-coconut-jelly.png' },
      { id: 'group-8-coconut-milk', name: 'Coconut Milk', image: '/assets/ingredients/group-8-coconut-milk.png' },
      { id: 'group-8-mango', name: 'Mango', image: '/assets/ingredients/group-8-mango.png' },
      { id: 'group-8-pomelo', name: 'Pomelo', image: '/assets/ingredients/group-8-pomelo.png' },
    ],
    resultDrink: {
      id: 'group-8-drink',
      name: 'Mango Pomelo Coconut',
      image: '/assets/drinks/group-8-drink.png',
    },
  },
  {
    id: 'lemon-black-tea',
    title: 'Lemon Black Tea',
    containerImage,
    ingredients: [
      { id: 'group-9-fragrant-lemon', name: 'Fragrant Lemon', image: '/assets/ingredients/group-9-fragrant-lemon.png' },
      { id: 'group-9-ice', name: 'Ice', image: '/assets/ingredients/group-9-ice.png' },
      { id: 'group-9-red-tea', name: 'Red Tea', image: '/assets/ingredients/group-9-red-tea.png' },
      { id: 'group-9-yellow-lemon', name: 'Yellow Lemon', image: '/assets/ingredients/group-9-yellow-lemon.png' },
    ],
    resultDrink: {
      id: 'group-9-drink',
      name: 'Lemon Black Tea',
      image: '/assets/drinks/group-9-drink.png',
    },
  },
  {
    id: 'matcha-pearl-cloud',
    title: 'Matcha Pearl Cloud',
    containerImage,
    ingredients: [
      { id: 'group-10-cream', name: 'Cream', image: '/assets/ingredients/group-10-cream.png' },
      { id: 'group-10-macha-ice-cream', name: 'Matcha Ice Cream', image: '/assets/ingredients/group-10-macha-ice-cream.png' },
      { id: 'group-10-macha', name: 'Matcha', image: '/assets/ingredients/group-10-macha.png' },
      { id: 'group-10-tapioca', name: 'Tapioca', image: '/assets/ingredients/group-10-tapioca.png' },
    ],
    resultDrink: {
      id: 'group-10-drink',
      name: 'Matcha Pearl Cloud',
      image: '/assets/drinks/group-10-drink.png',
    },
  },
];

export const rollingPool: Ingredient[] = recipeGroups.flatMap((group) => group.ingredients);
