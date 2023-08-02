'use client';

import useConversation from '@/app/hooks/useConversation';
import { FullMessageType } from '@/app/types';
import { useEffect, useRef, useState } from 'react';
import MessasgeBox from './MessasgeBox';
import axios from 'axios';

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [Messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {Messages.map((message, i) => (
        <MessasgeBox
          isLast={i === Messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
