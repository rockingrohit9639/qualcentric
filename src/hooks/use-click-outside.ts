/**
 * This hook is used to detect if a user clicks outside the container
 * @param ref: reference for the container for which you want to detect outside click
 * @param handler: a function to handle outside click
 */

import { useEffect } from "react";

export default function useClickOutside(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        handler();
      }
    }

    /** Binding the event to document */
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      /** Unbinding the listener from document when component unmounts */
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, ref]);
}
