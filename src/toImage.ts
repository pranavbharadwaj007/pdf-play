import { spawn } from 'child_process';

interface Options {
    format: 'png' | 'jpeg' | 'jpg';
}

export function toImage(pdfFilePath: string, options: Options): void {
    const { format } = options;

    // Define the command to convert PDF to images
    const command = 'pdftoppm';
    const args = [
        `-${format}`, // Output format (only jpeg supported for pdftoppm)
        pdfFilePath, // Input PDF file
        'output' // Output file prefix
    ];

    // Spawn the child process
    const childProcess = spawn(command, args);

    // Handle process events
    childProcess.on('error', (err) => {
        console.error('Failed to start child process.', err);
    });

    childProcess.on('close', (code) => {
        if (code === 0) {
            console.log('PDF conversion successful.');
        } else {
            console.error('PDF conversion failed with code:', code);
        }
    });
}
