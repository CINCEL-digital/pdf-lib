import { Assets } from '..';
import { PDFDocument, StandardFonts } from '../../..';

export default async (assets: Assets) => {
  const pdfDoc = await PDFDocument.load(assets.pdfs.simple);
  const snapshot = pdfDoc.takeSnapshot({ pageIndex: 0 });
  const page = pdfDoc.getPage(0);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontSize = 30;
  const { height } = page.getSize();
  page.drawText('Incremental saving is also awesome!', {
    x: 50,
    y: height - 8 * fontSize,
    size: fontSize,
    font: timesRomanFont,
  });

  const pdfIncrementalBytes = await pdfDoc.saveIncremental(snapshot);

  const pdfBytes = Buffer.concat([assets.pdfs.simple, pdfIncrementalBytes]);

  return pdfBytes;
};
