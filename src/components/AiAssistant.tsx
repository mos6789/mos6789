import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, MessageSender } from '../types';
import { sendMessageToAi } from '../services/geminiService';
import GeminiIcon from './icons/GeminiIcon';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: MessageSender.AI, text: "Hello! I'm Dr. Sajeev's AI assistant. How can I help you with information about his qualifications and experience?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: MessageSender.USER, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = [...messages, userMessage];
      const aiResponseText = await sendMessageToAi(history);
      const aiMessage: ChatMessage = { sender: MessageSender.AI, text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: ChatMessage = { sender: MessageSender.AI, text: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-primary text-surface rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
        aria-label="Open AI Assistant"
      >
        <ChatIcon className="w-8 h-8" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
          <div className="relative w-full max-w-2xl mx-4 bg-surface rounded-2xl shadow-2xl flex flex-col h-[80vh]">
            <header className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <GeminiIcon className="w-8 h-8 text-primary"/>
                    <div>
                        <h2 className="font-bold text-text-primary text-lg">AI Assistant</h2>
                        <p className="text-sm text-text-secondary">Powered by Google Gemini</p>
                    </div>
                </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close chat">
                <CloseIcon className="w-6 h-6 text-text-secondary" />
              </button>
            </header>
            <div className="flex-grow p-4 overflow-y-auto flex flex-col space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end gap-2 ${msg.sender === MessageSender.USER ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === MessageSender.AI && <div className="w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center"><GeminiIcon className="w-5 h-5 text-primary" /></div>}
                  <div className={`max-w-md px-4 py-3 rounded-2xl ${msg.sender === MessageSender.USER ? 'bg-primary text-surface' : 'bg-gray-100 text-text-primary'}`}>
                    <p className="text-base leading-6">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center"><GeminiIcon className="w-5 h-5 text-primary" /></div>
                    <div className="max-w-md px-4 py-3 rounded-2xl bg-gray-100 text-text-primary">
                        <div className="flex items-center space-x-1">
                            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
                        </div>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my clinical rotations..."
                  className="flex-grow bg-gray-100 text-text-primary px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="ml-3 bg-primary text-surface px-5 py-3 rounded-full font-semibold hover:bg-opacity-90 disabled:bg-opacity-50 disabled:cursor-not-allowed transition-colors"
                  disabled={isLoading}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
