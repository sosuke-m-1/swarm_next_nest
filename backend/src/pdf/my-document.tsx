import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
} from '@react-pdf/renderer';
import path from 'path';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'NotoSansJP',
        fontWeight: 'bold',
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        color: 'red',
        display: 'flex',
        flexWrap: 'wrap',
    },
    section: { margin: 10, padding: 10, width: '100%', flexGrow: 1 },
});

Font.register({
    family: 'NotoSansJP',
    fonts: [
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-Thin.ttf'),
            fontWeight: 100,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-ExtraLight.ttf'),
            fontWeight: 200,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-Light.ttf'),
            fontWeight: 300,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-Regular.ttf'),
            fontWeight: 400,
        },
        {
            src: path.resolve(__dirname, '../fonts/NotoSansJP-Medium.ttf'),
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

export const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Hello from NestJS + React PDF!</Text>
            </View>
            <View style={styles.section}>
                <Text>PDF generation example.</Text>
                <Text>あいうえお</Text>
            </View>
        </Page>
    </Document>
);
