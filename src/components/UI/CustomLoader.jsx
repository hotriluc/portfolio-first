import { useEffect, useState } from 'react';

import { useProgress } from '@react-three/drei';

const CustomLoader = () => {
  const { active, progress } = useProgress();
  const [shown, setShown] = useState(active);

  useEffect(() => {
    let t;
    if (active !== shown) t = setTimeout(() => setShown(active), 300);
    return () => clearTimeout(t);
  }, [shown, active]);

  return shown ? (
    <div
      style={{
        height: '100%',
        width: '100%',
        background: 'black',
        opacity: 0.3,
      }}
    >
      {progress} % loaded
    </div>
  ) : null;
};

export default CustomLoader;
