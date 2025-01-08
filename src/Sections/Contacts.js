import './Contacts.css'
import { useInView } from "react-intersection-observer";

const Contacts= ({ id, onIntersect}) => {
    const { ref} = useInView({
        threshold: 0.6,
        triggerOnce: false,
        onChange: (inView) => {
            
          if (inView)
            {
                 onIntersect(id);
            }
        },
      });
    return (  <div id={id} ref={ref} className="Contacts">
     
        </div>);
};

export default Contacts;