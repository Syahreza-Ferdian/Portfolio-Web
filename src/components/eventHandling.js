import { useEffect } from 'react';

function EventHandling() {
  useEffect(() => {
    function handleFocus() {
      document.title = 'My Portfolio | Syahreza';
    }

    // function handleBlur() {
    //     document.title = 'Come back :(';
    // }

    window.addEventListener('focus', handleFocus);
    // window.addEventListener('blur', handleBlur);
  });

  return null;
}

export default EventHandling;
