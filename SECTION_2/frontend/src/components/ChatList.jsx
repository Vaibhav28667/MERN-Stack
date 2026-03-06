import React, { useState } from 'react';

const ChatListComponent = ({ chats, selectedChat, onSelectChat, onNewChat }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-80 border-r border-gray-200 flex flex-col bg-white">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
                    <button
                        onClick={onNewChat}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition duration-200"
                        title="New chat"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {filteredChats.length > 0 ? (
                    filteredChats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => onSelectChat(chat)}
                            className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition duration-200 ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={chat.avatar}
                                        alt={chat.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    {chat.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-gray-800 truncate">{chat.name}</h3>
                                        <span className="text-xs text-gray-500 ml-2">{chat.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                        {chat.unread}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-4 text-center text-gray-500">
                        <p>No conversations found</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 flex gap-2">
                <button className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition duration-200" title="Settings">
                    <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <button className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition duration-200" title="Help">
                    <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition duration-200" title="Profile">
                    <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatListComponent;
