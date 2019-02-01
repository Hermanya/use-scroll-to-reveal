import * as React from 'react';

export const useMyHook = (ref:any) => {
  let [revealed, setRevealed] = React.useState<boolean>(false);
  React.useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setRevealed(true)
      }
    });
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    };
  }, []);

  return revealed;
};
export default useMyHook;