import { useState } from "react";

const useCopy = (text: string) => {
  const [copied, setCopied] = useState(false);
  
  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const copy = () => {
    copyTextToClipboard(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { copied, setCopied, copy }
}

export default useCopy;