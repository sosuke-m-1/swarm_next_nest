import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
} from '@react-pdf/renderer';
import '../fonts/font';

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
