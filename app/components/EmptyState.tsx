import React from 'react';

type EmptyStateProps = {};

const EmptyState: React.FC<EmptyStateProps> = () => {
  return (
    <div
      className="
  px-4 
  py-10 
  sm:px-6
  lg:px-8h
  h-full
  flex
  justify-center
  items-center
  bg-gray-100
  "
    >
      <div className="text-center items-center flex flex-col">
        <h3
          className="
        mt-2
        text-2xl
        font-semibold
        text-gray-900
        "
        >
          Select a chat for start a new conversation
        </h3>
      </div>
    </div>
  );
};
export default EmptyState;
