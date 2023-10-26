import useClickOutside from "@/hooks/use-click-outside";
import { XIcon } from "lucide-react";
import React, { cloneElement, useRef, useState } from "react";

type ModalProps = {
  trigger: React.ReactElement<{ onClick: () => void }>;
  heading: string;
  children: React.ReactNode;
};

export default function Modal({ trigger, children, heading }: ModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  useClickOutside(containerRef, () => {
    setShowModal(false);
  });

  return (
    <React.Fragment>
      {cloneElement(trigger, {
        onClick: () => {
          setShowModal(true);
        },
      })}

      {showModal ? (
        <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500/10 backdrop-blur-sm">
          <div
            className="bg-white border p-4 w-full max-w-2xl space-y-4 rounded-md"
            ref={containerRef}
          >
            <div className="flex justify-between">
              <div className="text-xl font-bold">{heading}</div>
              <div
                className="p-2 border rounded cursor-pointer"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <XIcon className="w-4 h-4" />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100"></div>

            {children}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
