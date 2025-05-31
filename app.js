// app.js
function processExcel() {
  const file = document.getElementById('excelFile').files[0];
  const reader = new FileReader();

  reader.onload = async function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const emails = jsonData.flat().filter(cell => /\S+@\S+\.\S+/.test(cell));
    console.log("Extracted emails:", emails);

    const response = await fetch('/send-emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emails }),
    });

    const result = await response.json();
    alert(result.message);
  };

  reader.readAsArrayBuffer(file);
}
