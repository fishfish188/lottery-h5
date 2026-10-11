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

const containerImage = '/assets/container/empty-bottle.webp';

export const recipeGroups: RecipeGroup[] = [
  {
    id: 'jasmine-grape-cloud',
    title: 'Jasmine Grape Cloud',
    containerImage,
    ingredients: [
      { id: 'group-1-green-grape', name: 'Green Grape', image: '/assets/ingredients/group-1-green-grape.webp' },
      { id: 'group-1-ice-cream', name: 'Ice Cream', image: '/assets/ingredients/group-1-ice-cream.webp' },
      { id: 'group-1-jasmine-tea', name: 'Jasmine Tea', image: '/assets/ingredients/group-1-jasmine-tea.webp' },
      { id: 'group-1-milk', name: 'Milk', image: '/assets/ingredients/group-1-milk.webp' },
    ],
    resultDrink: {
      id: 'group-1-drink',
      name: 'Jasmine Grape Cloud',
      image: '/assets/drinks/group-1-drink.webp',
    },
  },
  {
    id: 'pecan-coffee-cloud',
    title: 'Pecan Coffee Cloud',
    containerImage,
    ingredients: [
      { id: 'group-2-coffee', name: 'Coffee', image: '/assets/ingredients/group-2-coffee.webp' },
      { id: 'group-2-cream', name: 'Cream', image: '/assets/ingredients/group-2-cream.webp' },
      { id: 'group-2-milk', name: 'Milk', image: '/assets/ingredients/group-2-milk.webp' },
      { id: 'group-2-pecan', name: 'Pecan', image: '/assets/ingredients/group-2-pecan.webp' },
    ],
    resultDrink: {
      id: 'group-2-drink',
      name: 'Pecan Coffee Cloud',
      image: '/assets/drinks/group-2-drink.webp',
    },
  },
  {
    id: 'strawberry-milk-pearl',
    title: 'Strawberry Milk Pearl',
    containerImage,
    ingredients: [
      { id: 'group-3-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-3-coconut-jelly.webp' },
      { id: 'group-3-milk', name: 'Milk', image: '/assets/ingredients/group-3-milk.webp' },
      { id: 'group-3-strawberry', name: 'Strawberry', image: '/assets/ingredients/group-3-strawberry.webp' },
      { id: 'group-3-tapioca', name: 'Tapioca', image: '/assets/ingredients/group-3-tapioca.webp' },
    ],
    resultDrink: {
      id: 'group-3-drink',
      name: 'Strawberry Milk Pearl',
      image: '/assets/drinks/group-3-drink.webp',
    },
  },
  {
    id: 'classic-milk-tea',
    title: 'Classic Milk Tea',
    containerImage,
    ingredients: [
      { id: 'group-4-ice', name: 'Ice', image: '/assets/ingredients/group-4-ice.webp' },
      { id: 'group-4-milk', name: 'Milk', image: '/assets/ingredients/group-4-milk.webp' },
      { id: 'group-4-red-tea', name: 'Red Tea', image: '/assets/ingredients/group-4-red-tea.webp' },
      { id: 'group-4-tapioca', name: 'Tapioca', image: '/assets/ingredients/group-4-tapioca.webp' },
    ],
    resultDrink: {
      id: 'group-4-drink',
      name: 'Classic Milk Tea',
      image: '/assets/drinks/group-4-drink.webp',
    },
  },
  {
    id: 'grape-cream-cooler',
    title: 'Grape Cream Cooler',
    containerImage,
    ingredients: [
      { id: 'group-5-cream', name: 'Cream', image: '/assets/ingredients/group-5-cream.webp' },
      { id: 'group-5-green-grape', name: 'Green Grape', image: '/assets/ingredients/group-5-green-grape.webp' },
      { id: 'group-5-ice', name: 'Ice', image: '/assets/ingredients/group-5-ice.webp' },
      { id: 'group-5-purple', name: 'Purple Grape', image: '/assets/ingredients/group-5-purple.webp' },
    ],
    resultDrink: {
      id: 'group-5-drink',
      name: 'Grape Cream Cooler',
      image: '/assets/drinks/group-5-drink.webp',
    },
  },
  {
    id: 'passion-lemon-jelly',
    title: 'Passion Lemon Jelly',
    containerImage,
    ingredients: [
      { id: 'group-6-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-6-coconut-jelly.webp' },
      { id: 'group-6-ice', name: 'Ice', image: '/assets/ingredients/group-6-ice.webp' },
      { id: 'group-6-passion-fruit', name: 'Passion Fruit', image: '/assets/ingredients/group-6-passion-fruit.webp' },
      { id: 'group-6-yellow-lemon', name: 'Yellow Lemon', image: '/assets/ingredients/group-6-yellow-lemon.webp' },
    ],
    resultDrink: {
      id: 'group-6-drink',
      name: 'Passion Lemon Jelly',
      image: '/assets/drinks/group-6-drink.webp',
    },
  },
  {
    id: 'strawberry-yakult-jelly',
    title: 'Strawberry Yakult Jelly',
    containerImage,
    ingredients: [
      { id: 'group-7-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-7-coconut-jelly.webp' },
      { id: 'group-7-ice', name: 'Ice', image: '/assets/ingredients/group-7-ice.webp' },
      { id: 'group-7-strawberry', name: 'Strawberry', image: '/assets/ingredients/group-7-strawberry.webp' },
      { id: 'group-7-yakult', name: 'Yakult', image: '/assets/ingredients/group-7-yakult.webp' },
    ],
    resultDrink: {
      id: 'group-7-drink',
      name: 'Strawberry Yakult Jelly',
      image: '/assets/drinks/group-7-drink.webp',
    },
  },
  {
    id: 'mango-pomelo-coconut',
    title: 'Mango Pomelo Coconut',
    containerImage,
    ingredients: [
      { id: 'group-8-coconut-jelly', name: 'Coconut Jelly', image: '/assets/ingredients/group-8-coconut-jelly.webp' },
      { id: 'group-8-coconut-milk', name: 'Coconut Milk', image: '/assets/ingredients/group-8-coconut-milk.webp' },
      { id: 'group-8-mango', name: 'Mango', image: '/assets/ingredients/group-8-mango.webp' },
      { id: 'group-8-pomelo', name: 'Pomelo', image: '/assets/ingredients/group-8-pomelo.webp' },
    ],
    resultDrink: {
      id: 'group-8-drink',
      name: 'Mango Pomelo Coconut',
      image: '/assets/drinks/group-8-drink.webp',
    },
  },
  {
    id: 'lemon-black-tea',
    title: 'Lemon Black Tea',
    containerImage,
    ingredients: [
      { id: 'group-9-fragrant-lemon', name: 'Fragrant Lemon', image: '/assets/ingredients/group-9-fragrant-lemon.webp' },
      { id: 'group-9-ice', name: 'Ice', image: '/assets/ingredients/group-9-ice.webp' },
      { id: 'group-9-red-tea', name: 'Red Tea', image: '/assets/ingredients/group-9-red-tea.webp' },
      { id: 'group-9-yellow-lemon', name: 'Yellow Lemon', image: '/assets/ingredients/group-9-yellow-lemon.webp' },
    ],
    resultDrink: {
      id: 'group-9-drink',
      name: 'Lemon Black Tea',
      image: '/assets/drinks/group-9-drink.webp',
    },
  },
  {
    id: 'matcha-pearl-cloud',
    title: 'Matcha Pearl Cloud',
    containerImage,
    ingredients: [
      { id: 'group-10-cream', name: 'Cream', image: '/assets/ingredients/group-10-cream.webp' },
      { id: 'group-10-macha-ice-cream', name: 'Matcha Ice Cream', image: '/assets/ingredients/group-10-macha-ice-cream.webp' },
      { id: 'group-10-macha', name: 'Matcha', image: '/assets/ingredients/group-10-macha.webp' },
      { id: 'group-10-tapioca', name: 'Tapioca', image: '/assets/ingredients/group-10-tapioca.webp' },
    ],
    resultDrink: {
      id: 'group-10-drink',
      name: 'Matcha Pearl Cloud',
      image: '/assets/drinks/group-10-drink.webp',
    },
  },
];

export const rollingPool: Ingredient[] = recipeGroups.flatMap((group) => group.ingredients);
