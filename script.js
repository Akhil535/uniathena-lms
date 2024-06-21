function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}
function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}
function processContent() {
    const content = document.getElementById('docContent').value;
    console.log(content);
    const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    console.log(lines)
    if (lines.length < 7) {
        alert('please fill this  content');
        return;
    }
    //que section..............
    const questionLine = lines[0].split(' ').slice(1).join(' ');
    console.log(questionLine)
    document.getElementById('question').value = questionLine;
    //selected option section .........
    // we can use this method /[)\]}] /
    document.getElementById('option1_text').value = lines[1].split(') ')[1].trim(); // its only working closing parenthesis
    document.getElementById('option2_text').value = lines[2].split(') ')[1].trim();
    document.getElementById('option3_text').value = lines[3].split(') ')[1].trim();
    document.getElementById('option4_text').value = lines[4].split(') ')[1].trim();
    // ans like this ............
    const answerLine = lines[5].split(': ')[1].trim();
    //we can use this code /[:\\\- ]+/
    console.log(answerLine)
    if (answerLine.startsWith('a')) {
        document.getElementById('option1').checked = true;
    } else if (answerLine.startsWith('b')) {
        document.getElementById('option2').checked = true;
    } else if (answerLine.startsWith('c')) {
        document.getElementById('option3').checked = true;
    } else if (answerLine.startsWith('d')) {
        document.getElementById('option4').checked = true;
    }
    // explanation section part ..............
    const explanationIndex = lines.findIndex(line => line.startsWith('Explanation:'));
    const explanationLine = lines.slice(explanationIndex).join(' ').split(': ')[1].trim();
    document.getElementById('explanation').value = explanationLine;
    hidePopup();
}