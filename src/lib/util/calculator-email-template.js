const assembleMessage = () => {
	const html = `
<!DOCTYPE html>
<html lang="en">
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <header style="background-color: #f4f4f4; padding: 20px; text-align: center;">
        <h1 style="color: #F57C00; margin: 0;">Koredor Loan Calculator Results</h1>
    </header>
    <main style="padding: 20px;">
        <h2 style="color: #F57C00;">Invoice Financing Details</h2>
        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Invoice Amount:</strong> <span style="color: #28a745;">[currency]</span></li>
            <li style="margin-bottom: 10px;"><strong>Financing Amount:</strong> <span style="color: #28a745;">[currency]</span></li>
            <li style="margin-bottom: 10px;"><strong>Marketplace Fee:</strong> <span style="color: #28a745;">[currency]</span></li>
        </ul>
        
        <h2 style="color: #F57C00;">Payment Options</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr style="background-color: #F57C00; color: white;">
                    <th style="padding: 10px; text-align: left;">Terms</th>
                    <th style="padding: 10px; text-align: right;">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px;">One time payment</td>
                    <td style="padding: 10px; text-align: right;">[currency]</td>
                </tr>
                <tr>
                    <td style="padding: 10px;">3 Monthly Installments</td>
                    <td style="padding: 10px; text-align: right;">3 Monthly Installments</td>
                </tr>
            </tbody>
        </table>
    </main>
    <footer style="background-color: #f4f4f4; padding: 20px; text-align: center; margin-top: 20px;">
        <p style="margin: 0;">For more information, please visit <a href="https://www.koredor.com" style="color: #F57C00; text-decoration: none;">www.koredor.com</a></p>
    </footer>
</body>
</html>    
    `;

    return html;
};
