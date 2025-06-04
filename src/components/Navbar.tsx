"use client";

import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Auth from './Auth';
import { User, Session } from '@supabase/supabase-js';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setUser(session?.user || null);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2 text-gray-900' 
          : 'bg-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className={`w-8 h-8 ${isScrolled ? 'text-indigo-600' : 'text-indigo-400'}`} />
            <span className="text-xl font-bold">Neurosci AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a>
            <a href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button
                onClick={handleSignOut}
                className={`px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-indigo-600 hover:bg-indigo-50' 
                    : 'text-white hover:bg-white/10'
                  } transition-colors`}
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowAuth(true)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isScrolled 
                      ? 'text-indigo-600 hover:bg-indigo-50' 
                      : 'text-white hover:bg-white/10'
                    } transition-colors`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setShowAuth(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow transition-colors"
                >
                  Try for Free
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <a href="#features" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">Pricing</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">Contact</a>
          </div>
          <div className="px-4 py-4 border-t border-gray-200 space-y-2">
            {user ? (
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowAuth(true)}
                  className="block w-full px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => setShowAuth(true)}
                  className="block w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                >
                  Try for Free
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </nav>
  );
};

export default Navbar;