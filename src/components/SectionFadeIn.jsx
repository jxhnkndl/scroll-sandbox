import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function SectionFadeIn() {
  const ref = useRef(null);

  // add ref to content container into useInView hook
  // once: true prevents the animation from happening a second time if element
  // falls out of view
  const isInView = useInView(ref, { once: true });

  // use this to control the animation when element comes into viewport
  const mainControls = useAnimation();

  // listen for elements to come into the viewport
  // start animating to the rendered variant when element comes into view
  useEffect(() => {
    if (isInView) {
      mainControls.start('rendered');
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-3/4 mx-auto p-8 my-8">
      <motion.div
        className="space-y-8"
        variants={{
          initial: { opacity: 0, y: 50 },
          rendered: { opacity: 1, y: 0 },
        }}
        initial="initial"
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
    </div>
  );
}
