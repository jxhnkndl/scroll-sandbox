import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/** useScroll() return value types:
 *    - scrollX / scrollY: absolute position on page measured in pixels
 *    - scrollXProgress / scrollYProgress: scroll position between two defined offsets
 *      (0 and 1) such as the top and bottom of a parent container
 *
 *
 *  useTransform(value, input range, output range):
 *    - value: the scroll being tracked (scrollX/Y or scrollX/YProgress) to map to
 *      the input range and output range
 *    - input range: [start, stop]
 *        - start: where on the page the user's scroll triggers the animation
 *        - stop: where on the page the user's scroll stops the animation
 *        - scrollX/Y = pixel values
 *        - scrollX/YProgress = 0, 1 values where 0 is the top of the parent container
 *          and 1 is the bottom
 *    - output range: [start, stop]
 *        - start: the style value that should be applied at start of input range
 *        - stop: the style value that should be applied at end of input range
 *        - value type will correspond with style property being animated
 *            - could be pixels, percents, viewports, numeric units, etc.
 */

export default function Section() {
  let { scrollY } = useScroll();

  // monitor scroll position on y axis
  // start animation with initial value of 0% when user hits 250px down the page
  // stop animation with ending value of 20% when user hits 500px down the page
  // let x = useTransform(scrollY, [250, 500], ['0%', '20%']);

  // monitor scroll position within parent container's top/bottom boundaries
  // start animation with initial value of 0% when user is at top of parent container
  // stop animation with ending value of 20% when user is at bottom of parent container
  let x = useTransform(scrollY, [0, 1], ['0%', '100%']);

  // add a spring effect to the progress bars
  // let x = useSpring(scrollY);

  return (
    <div className="w-3/4 mx-auto">
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
          width: x,
        }}
      />
    </div>
  );
}
