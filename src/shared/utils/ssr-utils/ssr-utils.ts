class SsrUtils {
    isServer = (): boolean => typeof window === 'undefined' || window.document == null;
}

export const ssrUtils = new SsrUtils();
