export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Here you can write the logic to create the account using the provided email and password

        // For demonstration purposes, you can send a success response
        res.status(200).json({ message: 'Account created successfully' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}