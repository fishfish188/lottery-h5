import { motion } from 'framer-motion';
import { SlotScreen } from './SlotScreen';
import type { Ingredient } from '../data/recipeGroups';

type SlotMachineProps = {
  ingredients: Ingredient[];
  rollingSlots: boolean[];
  isLeverPulling: boolean;
  disabled: boolean;
  onStart: () => void;
};

export function SlotMachine({
  ingredients,
  rollingSlots,
  isLeverPulling,
  disabled,
  onStart,
}: SlotMachineProps) {
  return (
    <motion.button
      className="slot-machine"
      type="button"
      onClick={onStart}
      disabled={disabled}
      aria-label="Start the drink lottery"
      whileTap={disabled ? undefined : { scale: 0.985 }}
    >
      <div className="machine-casing">
        <div className="screen-bezel">
          <SlotScreen ingredients={ingredients} rollingSlots={rollingSlots} />
        </div>
        <div className="machine-body">
          <div className="decor-buttons">
            <span />
            <span />
            <span />
          </div>
          <div className="coin-slot"><span /></div>
          <div className="credit-display">CREDITS: 1250</div>
        </div>
      </div>
      <motion.div
        className="lever"
        animate={isLeverPulling ? { rotate: [0, 24, -5, 0], x: [0, 8, -2, 0], y: [0, 14, 0, 0] } : { rotate: 0, x: 0, y: 0 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="lever-ball" />
        <span className="lever-stick" />
        <span className="lever-base" />
      </motion.div>
    </motion.button>
  );
}
