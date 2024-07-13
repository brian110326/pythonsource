document.getElementById("savePdfButton").addEventListener("click", function () {
  html2canvas(document.getElementById("chartContainer"), {
    backgroundColor: null, // 배경색을 투명하게 설정
    logging: true, // 디버깅 로그 활성화
    useCORS: true, // 크로스 도메인 이미지 로딩
    scale: 3, // 고해상도를 위해 스케일 증가
  }).then(function (canvas) {
    var imgData = canvas.toDataURL("image/png");
    var imgWidth = 190;
    var pageHeight = imgWidth * 1.414;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    var margin = 10;
    var doc = new jsPDF("p", "mm");
    var position = 0;

    doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 20) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const pid = document.querySelector("#productId").value;
    doc.save(`No${pid}-SalesPrediction.pdf`);
  });
});
