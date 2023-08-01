'use client';

import { ColorTheme } from '@shared/types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useColorTheme } from '../../hooks';
import type { ICodeBlockProps } from './code-block.api';

export const CodeBlock: React.FC<ICodeBlockProps> = ({ inline, children, ...props }) => {
    const { currentTheme } = useColorTheme();
    const codeTheme = currentTheme === ColorTheme.DARK ? a11yDark : a11yLight;

    if (inline) {
        return (
            <code className="code-block--inline" {...props}>
                {children}
            </code>
        );
    }

    return (
        <SyntaxHighlighter className="code-block" style={codeTheme} PreTag="div" {...props}>
            {String(children)}
        </SyntaxHighlighter>
    );
};
