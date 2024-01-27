"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toImage = void 0;
var child_process_1 = require("child_process");
function toImage(pdfFilePath, options) {
    var format = options.format;
    // Define the command to convert PDF to images
    var command = 'pdftoppm';
    var args = [
        "-".concat(format), // Output format (only jpeg supported for pdftoppm)
        pdfFilePath, // Input PDF file
        'output' // Output file prefix
    ];
    // Spawn the child process
    var childProcess = (0, child_process_1.spawn)(command, args);
    // Handle process events
    childProcess.on('error', function (err) {
        console.error('Failed to start child process.', err);
    });
    childProcess.on('close', function (code) {
        if (code === 0) {
            console.log('PDF conversion successful.');
        }
        else {
            console.error('PDF conversion failed with code:', code);
        }
    });
}
exports.toImage = toImage;
