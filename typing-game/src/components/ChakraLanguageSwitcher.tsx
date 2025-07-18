"use client";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/store/languageSlice";
import type { RootState } from "@/store/store";
import { Button, ButtonGroup } from "@chakra-ui/react";

function ChakraLanguageSwitcher() {
  const dispatch = useDispatch();
  const selectedLang = useSelector(
    (state: RootState) => state.language.selected,
  );

  const handleLanguageChange = (lang: "ja" | "en") => {
    dispatch(setLanguage(lang));
  };

  return (
    <ButtonGroup isAttached>
      <Button
        onClick={() => handleLanguageChange("ja")}
        colorScheme={selectedLang === "ja" ? "teal" : "gray"}
        variant={selectedLang === "ja" ? "solid" : "outline"}
      >
        日本語
      </Button>
      <Button
        onClick={() => handleLanguageChange("en")}
        colorScheme={selectedLang === "en" ? "teal" : "gray"}
        variant={selectedLang === "en" ? "solid" : "outline"}
      >
        English
      </Button>
    </ButtonGroup>
  );
}

export default ChakraLanguageSwitcher;
