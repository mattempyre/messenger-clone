'use client';
import { useProModal } from '@/app/hooks/use-pro-modal';
import React from 'react';
import { Drawer } from 'vaul';

type VaulModalProps = {};

const VaulModal: React.FC<VaulModalProps> = () => {
  const proModal = useProModal();
  return (
    <Drawer.Root open={proModal.isOpen}>
      <Drawer.Trigger asChild>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <Drawer.Close className="relative  ">
            <button
              className="w-full text-transparent font-bold transform translate-y-2 hover:text-zinc-400 absolute hover:translate-y-5 left-0 right-0 mx-auto transition duration-300 ease-in-out"
              aria-label="Close"
              onClick={proModal.onClose}
            >
              Close
            </button>
          </Drawer.Close>
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 hover:bg-zinc-300 hover:cursor-pointer mb-8" />
            <div className="max-w-md mx-auto">
              <div>This is content</div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
export default VaulModal;
