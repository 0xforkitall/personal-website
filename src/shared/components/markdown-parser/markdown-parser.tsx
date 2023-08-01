import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../code-block';
import { Link } from '../link';
import { Text } from '../text';
import type { IMarkdownParserProps } from './markdown-parser.api';

export const MarkdownParser: React.FC<IMarkdownParserProps> = (props) => {
    const { children = '', className } = props;

    return (
        <ReactMarkdown
            className={classNames('markdown-parser', className)}
            linkTarget="_blank"
            components={{
                h1: ({ color, ...props }) => <Text size="h1" responsiveSize={{ sm: 'h2' }} {...props} />,
                h2: ({ color, ...props }) => <Text size="h2" responsiveSize={{ sm: 'h3' }} {...props} />,
                h3: ({ color, ...props }) => <Text size="h3" responsiveSize={{ sm: 'h4' }} {...props} />,
                h4: ({ color, ...props }) => <Text size="h4" responsiveSize={{ sm: 'h5' }} {...props} />,
                h5: ({ color, ...props }) => <Text size="h5" {...props} />,
                p: ({ color, ...props }) => <Text size="m" {...props} />,
                a: ({ color, ...props }) => <Link variant="underline" {...props} />,
                code: ({ inline, className, ...props }) => {
                    const language = /language-(\w+)/.exec(className ?? '')?.[1];

                    return <CodeBlock language={language} inline={inline} {...props} />;
                },
            }}
        >
            {children}
        </ReactMarkdown>
    );
};
