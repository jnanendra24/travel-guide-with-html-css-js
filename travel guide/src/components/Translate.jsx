import React, { useEffect } from 'react'

export default function Translate() {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          "google_translate_element"
        );
      };
    useEffect(()=>{
        const translate = document.createElement('script')
        translate.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        translate.async = true;
        document.body.appendChild(translate)
        window.googleTranslateElementInit = googleTranslateElementInit;
    },[])
  return (
    <div className='' id="google_translate_element"></div>
  )
}
