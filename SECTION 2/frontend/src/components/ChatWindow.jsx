import React, { useState, useEffect, useRef } from 'react';

const ChatWindow = ({ selectedChat, onSendMessage }) => {
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [selectedChat?.messages]);

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!selectedChat) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <h2 className="text-2xl font-bold text-gray-800">Select a chat to start</h2>
                    <p className="text-gray-500 mt-2">Choose a conversation from the list or start a new one</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-white shadow-sm">
                <div className="flex items-center gap-3">
                    <img
                        src={selectedChat.avatar}
                        alt={selectedChat.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{selectedChat.name}</h3>
                        <p className="text-sm text-gray-500">{selectedChat.status}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-gray-700 p-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493m7.528 0l1.498-4.493a1 1 0 01.948-.684H19a2 2 0 012 2v3m-21 4v6a2 2 0 002 2h16a2 2 0 002-2v-6" />
                        </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 p-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
                {selectedChat.messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.sender !== 'you' && (
                            <img
                                src={selectedChat.avatar}
                                alt="avatar"
                                className="w-8 h-8 rounded-full mr-2 flex-shrink-0"
                            />
                        )}
                        <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'you'
                                ? 'bg-blue-500 text-white rounded-br-none'
                                : 'bg-gray-200 text-gray-800 rounded-bl-none'
                                }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === 'you' ? 'text-blue-100' : 'text-gray-500'}`}>
                                {msg.time}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex items-end gap-2">
                    <button className="text-gray-500 hover:text-gray-700 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 resize-none max-h-24"
                        rows="1"
                    />

                    <button className="text-gray-500 hover:text-gray-700 flex-shrink-0">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
                        </svg>
                    </button>

                    <button
                        onClick={handleSend}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex-shrink-0 transition duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
