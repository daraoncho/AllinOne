import { useState, useCallback } from 'react';

export const useShare = () => {
  const [isSharing, setIsSharing] = useState(false);

  const canShare = navigator.share !== undefined;

  const share = useCallback(async ({ title, text, url }) => {
    if (isSharing) return;

    setIsSharing(true);

    try {
      if (canShare) {
        await navigator.share({
          title,
          text,
          url
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(url);
        
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Link copied to clipboard!';
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #15a110;
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          z-index: 1000;
          animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.remove();
        }, 3000);
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
    } finally {
      setIsSharing(false);
    }
  }, [canShare, isSharing]);

  return {
    share,
    canShare,
    isSharing
  };
};
