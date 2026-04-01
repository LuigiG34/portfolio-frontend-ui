export interface IBlogDT {
  id: number;
  img?: string;
  images?: string[];
  title: string;
  date: string;
  category: string;
  author: string;
  videoId?: string;
  avatar?: string;
  blogQuote?: boolean;
  video?: boolean;
  imgSlider?: boolean;
  blogQuoteTwo?: boolean;
  blogHeroSlider?: boolean;
  desc?: string;
}