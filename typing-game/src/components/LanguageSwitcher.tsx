"use client";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/store/languageSlice";
import type { RootState } from "@/store/store";

function LanguageSwitcher() {
  const dispatch = useDispatch();
  const selectedLang = useSelector(
    (state: RootState) => state.language.selected,
  );

  const handleLanguageChange = (lang: "ja" | "en") => {
    dispatch(setLanguage(lang));
  };

  return (
    <div className="relative flex w-48 items-center rounded-full bg-gray-200 p-1">
      <div
        className={`absolute h-8 w-1/2 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out`}
        style={{
          transform:
            selectedLang === "ja" ? "translateX(0%)" : "translateX(100%)",
        }}
      />

      <button
        type="button"
        onClick={() => handleLanguageChange("ja")}
        className={`z-10 flex-1 rounded-full py-1 text-center text-sm font-medium transition-colors duration-300 ${selectedLang === "ja" ? "text-blue-600" : "text-gray-500"}`}
      >
        日本語
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        className={`z-10 flex-1 rounded-full py-1 text-center text-sm font-medium transition-colors duration-300 ${selectedLang === "en" ? "text-blue-600" : "text-gray-500"}`}
      >
        English
      </button>
    </div>
  );
}

export default LanguageSwitcher;
