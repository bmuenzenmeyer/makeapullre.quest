export type Post = {
  name: string;
  lede: string;
};

export type Nav = {
  [string]: Post;
};

export type Translation = {
  nav: Nav;
  welcome: string;
};
