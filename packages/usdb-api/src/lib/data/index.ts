export * from "./image";
export * from "./lyrics";
export * from "./songs";
export * from "./youtubeLinks";

import { parseLyrics } from "../parser/parseLyrics";
import { scrapeLyricsPage } from "../scraper/lyricsPage";

/**
 * Get metadata from html
 * @param html HTML string from lyricsPage
 * @returns Metadata object
 */
export const getMetadata = (html: string) => {
  return parseLyrics(html)?.metadata;
};

/**
 * Get metadata from html
 * @param id Song id
 * @returns Metadata object
 */
export const getMetadataById = async (id: number) => {
  const html = await scrapeLyricsPage(id);
  return getMetadata(html);
};
