declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '.scss' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
