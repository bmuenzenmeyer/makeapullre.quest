import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="transparent"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        color="currentColor"
      >
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <path d="M6 21V9a9 9 0 0 0 9 9"></path>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        Make A Pull Request...
      </span>
    </>
  ),
  project: {
    link: "https://github.com/bmuenzenmeyer/makeapullre.quest",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/bmuenzenmeyer/makeapullre.quest",
  footer: {
    text: "A slow web project by Brian Muenzenmeyer",
  },
  useNextSeoProps: () => {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "Make a Pull Request %s",
      };
    } else {
      return {
        title: "Make a Pull Request",
      };
    }
  },
  search: {
    placeholder: "Search...",
  },
  banner: {
    dismissible: false,
    text: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://war.ukraine.ua/support-ukraine/"
      >
        Support Ukraine 🇺🇦
      </a>
    ),
  },
};

export default config;
