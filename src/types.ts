import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  categoryTitle: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  highlight?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export enum MessageSender {
  USER = 'user',
  AI = 'ai',
}

export interface ChatMessage {
  sender: MessageSender;
  text: string;
}
