import { motion, useScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';
import { useRef } from 'react';
// import { useSpring } from 'framer-motion';

/** ADDING A REF:
 *  - when you want to monitor the scroll progress within a certain container element,
 *    you can attach a ref to the container
 *  - then pass the ref into useScroll() as the target, or the element that the upper
 *    and lower boundaries get (the [0, 1] in useTransform()) applied to
 * 
 *  OFFSET ex: ['start start', 'end start']
 *  - the offset is an array containing at least two intersections, or points where the
 *    target element meets the edge of its container
 *  - intersection values can be: 
 *      - numbers between 0-1
 *      - shorthand strings start (0), center (0.5), and end (1)
 *      - px, %, vw, or vh
 *  - examples:
 *      - "start start" -> start of animated element meets start of container edge
 *      - "start end"   -> start of animated element meets end of container edge
 *      - "end start"   -> end of animated element meets start of container edge
 *      - "end end"     -> end of animated element meets end of container edge
 *  
 */

export default function SectionCascade() {
  // create ref on parent container to set scroll boundaries from
  let ref = useRef(null);

  let { scrollYProgress } = useScroll({
    // use container div to set scroll boundaries
    target: ref,
    // start animation when lower edge of progress bar is at bottom of container
    // end animation when lower edge of progress bar is at top of container
    offset: ['end end', 'start start']
  });

  let width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="w-3/4 mx-auto">
      <div className="space-y-8">
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
      </div>
      <motion.div
        className="w-full h-6 bg-orange-500 mt-4 mb-10"
        style={{
          width
        }}
      />
    </div>
  );
}
