import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportPDF = () => {
  const resume = document.querySelector('.resume-preview');
  if (!resume) return;

  html2canvas(resume, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pageHeight) {
      // Fits on one page
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // Scale down to fit one page
      const scaleFactor = pageHeight / imgHeight;
      const scaledWidth = imgWidth * scaleFactor;
      const scaledHeight = imgHeight * scaleFactor;
      const xOffset = (pageWidth - scaledWidth) / 2;

      pdf.addImage(imgData, 'PNG', xOffset, 0, scaledWidth, scaledHeight);
    }

    pdf.save('resume.pdf');
  });
};
