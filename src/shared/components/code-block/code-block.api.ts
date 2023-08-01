import type { HTMLAttributes } from 'react';

export interface ICodeBlockProps extends Omit<HTMLAttributes<HTMLElement>, 'style'> {
    /**
     * Renders an inline code block when set to true.
     */
    inline?: boolean;
    /**
     * Language of the code block.
     */
    language?: string;
}
