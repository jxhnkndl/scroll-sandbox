import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function SectionCircle() {
  let ref = useRef(null);

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  // let progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="w-3/4 mx-auto grid grid-cols-4">
      <div className="col-span-1">
        {/* use svg elements to create progress elements with custom shapes */}
        <svg height="100" width="100" viewBox="0 0 100 100" className='-rotate-90'>
          <circle
            className="opacity-30 stroke-orange-500 fill-none"
            cx="50"
            cy="50"
            r="40"
            pathLength={1}
            style={{ strokeWidth: '18%' }}
          />
          <motion.circle
            className="stroke-orange-500 fill-none"
            cx="50"
            cy="50"
            r="40"
            pathLength={1}
            // the scroll progress takes the starting path length of 1 and increases it
            // to values ranging from 1-100 with 100 being the complete path of the svg
            style={{ strokeWidth: '18%', pathLength: scrollYProgress }}
          />
        </svg>
      </div>
      <div className="space-y-8 col-span-3">
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
    </div>
  );
}
