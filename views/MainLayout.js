export function MainLayout(content, title="Tinder") {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            .red {
                color: 'red';
            }
        </style>
    </head>
    <body>
        ${content}
    </body>
    </html>`
}