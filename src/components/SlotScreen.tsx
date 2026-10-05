import { motion } from 'framer-motion';
import { rollingPool, type Ingredient } from '../data/recipeGroups';

type SlotScreenProps = {
  ingredients: Ingredient[];
  rollingSlots: boolean[];
};

export function SlotScreen({ ingredients, rollingSlots }: SlotScreenProps) {
  return (
    <div className="screen" aria-label="Selected ingredients">
      {ingredients.map((ingredient, index) => (
        <div className="slot-column" key={`${ingredient.id}-${index}`}>
          {rollingSlots[index] ? (
            <motion.div
              className="slot-reel"
              animate={{ y: ['0%', '-74%'] }}
              transition={{ duration: 0.48, ease: 'linear', repeat: Infinity }}
            >
              {[...rollingPool, ...rollingPool, ...rollingPool].map((item, itemIndex) => (
                <img key={`${item.id}-${itemIndex}`} src={item.image} alt="" draggable={false} />
              ))}
            </motion.div>
          ) : (
            <motion.img
              className="slot-final"
              src={ingredient.image}
              alt={ingredient.name}
              draggable={false}
              initial={{ y: -26, scale: 0.94, opacity: 0.85 }}
              animate={{ y: [18, -7, 0], scale: [1, 1.05, 1], opacity: 1 }}
              transition={{ duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
