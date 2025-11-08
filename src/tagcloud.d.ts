declare module 'TagCloud' {
  interface TagCloudOptions {
    radius?: number;
    maxSpeed?: string | number;
    initSpeed?: string | number;
    direction?: number;
    keep?: boolean;
    useHTML?: boolean;
    useContainerInlineStyles?: boolean;
    useItemInlineStyles?: boolean;
  }

  interface TagCloudInstance {
    update(): void;
    destroy(): void;
    pause(): void;
    resume(): void;
  }

  function TagCloud(
    container: HTMLElement | string,
    texts: string[],
    options?: TagCloudOptions
  ): TagCloudInstance;

  export default TagCloud;
}
