import { Font } from '@react-pdf/renderer';
import path from 'path';

Font.register({
    family: 'NotoSansJP',
    fonts: [
        {
            src: path.resolve(__dirname, './NotoSansJP-Thin.ttf'),
            fontWeight: 100,
        },
        {
            src: path.resolve(__dirname, './NotoSansJP-ExtraLight.ttf'),
            fontWeight: 200,
        },
        {
            src: path.resolve(__dirname, './NotoSansJP-Light.ttf'),
            fontWeight: 300,
        },
        {
            src: path.resolve(__dirname, './NotoSansJP-Regular.ttf'),
            fontWeight: 400,
        },
        {
            src: path.resolve(__dirname, './NotoSansJP-Medium.ttf'),
            fontWeight: 500,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-SemiBold.ttf'),
            fontWeight: 600,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-Bold.ttf'),
            fontWeight: 700,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-ExtraBold.ttf'),
            fontWeight: 800,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-Black.ttf'),
            fontWeight: 900,
        },
    ],
});
