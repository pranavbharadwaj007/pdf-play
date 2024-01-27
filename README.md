# pdf-play

<img src="./pdf-play-logo.png" alt="pdf-play Logo" width="250" height="250">

A NPM Package for PDF manipulation.

## Installation

You can install `pdf-play` using npm:

```bash
npm install pdf-play
```
Before using pdf-play, ensure that poppler-utils is installed on your system. You can install poppler-utils using the following commands:

### For Linux (Debian/Ubuntu):

```bash
sudo apt update
sudo apt install poppler-utils
```
### For macOS (using Homebrew):

```bash
brew install poppler
```

```javascript
const { toImage } = require('pdf-play');

// Example usage
const pdfFilePath = '/path/to/your/pdf/file.pdf';
const options = { format: 'png' };

toImage(pdfFilePath, options);
```