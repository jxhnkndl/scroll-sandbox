// import SectionBasic from "./components/SectionBasic";
// import SectionCascade from "./components/SectionCascade";
// import SectionCircle from "./components/SectionCircle";
import SectionFadeIn from './components/SectionFadeIn';

import { motion } from 'framer-motion';
import heroImg from './assets/parallax-hero.jpg';

/** BASIC ANIMATIONS
 *  
 *  motion:
 *  - component that converts any element into an animatable component
 *  - variants define the various stages of animation
 *      - variants can be called whatever you want them to be called
 *      - variants take regular css properties to define the animation stage
 *  - the initial and animate props accept a variant by name as a value and
 *    use the css properties contained in the variant to animate the component
 *  - css transition properties can be added using the transition prop
 * 
 */

export default function App() {
  return (
    <div>
      <div className="min-h-screen w-full relative mb-12">
        <motion.h1
          className="relative text-9xl text-center text-white top-[150px]"
          variants={{
            initial: { opacity: 0, y: 100 },
            rendered: { opacity: 1, y: 0 },
          }}
          initial="initial"
          animate="rendered"
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
        >
          SCROLL SANDBOX
        </motion.h1>
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <SectionFadeIn />
      <SectionFadeIn />
      <SectionFadeIn />
      <SectionFadeIn />
      <SectionFadeIn />
    </div>
  );
}
