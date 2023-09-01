import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

/** REVEAL ANIMATIONS
 * 
 *  useInView():
 *  - hook that takes in a ref to an element
 *      - returns false when element is not in the viewport
 *      - returns true when element is inside of the viewport
 *  - accepts a once parameter that prevents hook from refiring when element scrolls
 *    into/out of the viewport again
 * 
 *  useAnimation():
 *  - used to control motion.div animations as side effects to other actions
 * 
 *  GENERAL STRATEGY
 *  - a ref has been put on the elements being tracked in/out of the viewport
 *  - isInView is tracking whether an element is in the viewport
 *  - two sets of animation controls have been created:
 *      - one for swipe revealing the content
 *      - one for animating the text when it appears
 *  - the useEffect() hook is monitoring the isInView hook
 *      - when the element comes into view, the .start() method is called on each
 *        set of animation controls and told which variant to animate to
 *  - the motion.divs animate prop has been updated to listen to the animation controls
 * 
 */

export default function SectionReveal() {
  const ref = useRef(null);

  // add ref to content container into useInView hook
  // once: true prevents the animation from happening a second time if element
  // falls out of view
  const isInView = useInView(ref, { once: true });

  // control text animation
  const mainControls = useAnimation();

  // control reveal animation
  const revealControls = useAnimation();

  // listen for elements to come into the viewport
  // start both text and reveal animations when element comes into view
  useEffect(() => {
    if (isInView) {
      mainControls.start('rendered');
      revealControls.start('visible')
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-3/4 mx-auto p-8 my-8">
      <motion.div
        className="space-y-8"
        variants={{
          initial: { opacity: 0, y: 50 },
          rendered: { opacity: 1, y: 0 },
        }}
        initial={'initial'}
        // use the useAnimation() hook to control the animation
        animate={mainControls}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          voluptate consequuntur nisi fuga adipisci, ab inventore nemo minus
          obcaecati fugiat laboriosam aut non nam ipsum cum iusto amet provident
          error eveniet delectus culpa pariatur id consequatur? Tenetur magni
          dicta inventore est, repudiandae illo cum velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facilis, adipisci sint quibusdam doloribus quas. Quo ab
          dolore molestias at possimus nihil error velit maxime tempora
          accusantium consequatur necessitatibus omnis vero exercitationem atque
          sint sunt deserunt distinctio architecto repudiandae animi,
          dignissimos dolorem recusandae. Sapiente dignissimos atque accusantium
          esse exercitationem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          magni qui nemo, explicabo harum voluptas. Labore delectus quibusdam
          incidunt similique?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
          facilis illo doloremque excepturi sit quibusdam harum, fuga
          perferendis, qui debitis. Alias, totam illum fugiat suscipit in
          aliquam vel, odio quisquam, similique adipisci architecto ullam?
        </p>
      </motion.div>
      <motion.div 
        className='absolute inset-0 bg-orange-500 z-20'
        variants={{
          hidden: { right: 0 },
          visible: { right: '100%'}
        }}
        initial={'hidden'}
        // second useAnimation() hook is controling this animation
        animate={revealControls}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.1 }}
      />
    </div>
  );
}
