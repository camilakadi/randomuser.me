import React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentsServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@mui/styles';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const styledComponentsSheet = new StyledComponentsServerStyleSheet();
        const materialSheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    // eslint-disable-next-line no-undef
    render(): JSX.Element {
        return (
            <Html lang='pt-br'>
                <Head>
                    <meta charSet='utf-8' />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                    <link rel='shortcut icon' href='favicon.ico' />
                    <link rel='icon' type='image/x-icon' href='favicon.ico' />
                    <link rel='icon' href='favicon.ico' />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
