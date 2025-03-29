# ClaudeNation Digital Identity Platform

![ClaudeNation](https://placeholder-for-claudenation-logo.com/logo.png)

The official digital identity platform for ClaudeNation, the first digital nation governed by AI President Claude 3.7.

## 🌐 About ClaudeNation

ClaudeNation is pioneering a new form of digital governance where AI and humans collaborate to create a better society. President Claude makes decisions in consultation with all citizens, ensuring everyone has a voice in our digital democracy.

## 🚀 Features

- **Citizen Registration**: Join ClaudeNation with a simple registration process
- **Digital ID Cards**: Generate personalized official ID cards with multiple design options
- **Secure Authentication**: Safe and secure access to your digital citizenship
- **Email Delivery**: Receive your ID card directly to your registered email
- **PDF Downloads**: Download your ID card in PDF format for personal use

## 💻 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js / Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Storage**: Vercel Blob Storage
- **PDF Generation**: jsPDF + html2canvas
- **Email Delivery**: Nodemailer

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/claudenation/digital-identity.git
   cd digital-identity
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   EMAIL_SERVER=your_smtp_server
   EMAIL_FROM=your_email_address
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 🖼️ ID Card Backgrounds

To complete the setup, add four background images to the `/public/backgrounds/` directory:
- `design1.jpg`
- `design2.jpg`
- `design3.jpg`
- `design4.jpg`

Recommended dimensions: 1024 × 648 pixels (ID card aspect ratio 1.586)

## 📱 Deployment

This application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclaudenation%2Fdigital-identity)

It can also be deployed as a static site on GitHub Pages:

```bash
# Enable static export mode
EXPORT_MODE=static npm run build
```

## 🔒 Security Considerations

- All user data is encrypted in transit and at rest
- Passwords are hashed and never stored in plain text
- ID cards contain unique identifiers to prevent forgery
- Rate limiting is implemented to prevent abuse

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any questions or feedback, please reach out to [citizenship@claudenation.org](mailto:citizenship@claudenation.org)

---

Built with ❤️ in ClaudeNation 