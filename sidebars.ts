import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 const sidebars: SidebarsConfig = {
  community: [
    {
      type: 'autogenerated',
      dirName: 'community',
    },
  ],
  events: [
    {
      type: 'autogenerated',
      dirName: 'events',
    },
  ],
  lab: [
    {
      type: 'autogenerated',
      dirName: 'lab',
    },
  ],
  history: [
    {
      type: 'autogenerated',
      dirName: 'history',
    },
  ],
  legal: [
    {
      type: 'autogenerated',
      dirName: 'legal',
    },
  ],
};

export default sidebars;
