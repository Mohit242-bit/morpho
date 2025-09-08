"use client";

export const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

export const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
};

export const getCurrentTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'light';
  }
  return 'light';
};
