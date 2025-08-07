"use client";

import { useState, useEffect } from 'react';

export function useTypingEffect(
  textToType: string,
  interKeyStrokeDurationInMs: number
) {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
  
    if (currentText.length === textToType.length) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setCurrentText(
        textToType.substring(0, currentText.length + 1)
      );
    }, interKeyStrokeDurationInMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [textToType, currentText, interKeyStrokeDurationInMs]);

  return currentText;
}