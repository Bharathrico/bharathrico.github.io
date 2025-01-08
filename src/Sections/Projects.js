import './Projects.css'
import { useInView } from "react-intersection-observer";

const Projects= ({ id, onIntersect}) => {
    const { ref } = useInView({
        threshold: 0.6,
        triggerOnce: false,
        onChange: (inView) => {
          if (inView) {
             onIntersect(id);
        }
        },
      });
    return (  <div id={id} ref={ref} className="Projects">
     
        </div>);
};

export default Projects;